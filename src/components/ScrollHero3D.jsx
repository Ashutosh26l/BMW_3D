import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { createBMWCar, createShowroomFloor } from '@/utils/carGeometry';
import { ArrowDown, Play } from 'lucide-react';
import { mapRange, smoothstep, lerp } from '@/hooks/useScrollProgress';

/*
 * ══════════════════════════════════════════════════════════════
 *  ScrollHero3D
 *  Full-screen, scroll-driven 3D car reveal.
 *
 *  Phases (mapped to scrollProgress 0→1 within the spacer):
 *    0.00 – 0.12  Hero text visible, car idle
 *    0.12 – 0.50  Car rotates 360°
 *    0.50 – 0.72  Door opens, camera shifts
 *    0.72 – 0.88  Spec cards fly in
 *    0.88 – 1.00  Shrink + fade out, release scroll
 * ══════════════════════════════════════════════════════════════
 */

const SPECS = [
  { label: 'Power', value: '248 hp', unit: '' },
  { label: '0–100', value: '6.6', unit: 's' },
  { label: 'Drive', value: 'xDrive', unit: 'AWD' },
  { label: 'Torque', value: '370', unit: 'Nm' },
];

export default function ScrollHero3D({ onFinished }) {
  const sectionRef = useRef(null);
  const canvasWrapRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const carRef = useRef(null);
  const doorRef = useRef(null);
  const frameRef = useRef(null);
  const progressRef = useRef(0);
  const particlesRef = useRef(null);
  const lightRefs = useRef({});

  const [isLoading, setIsLoading] = useState(true);
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [specsVisible, setSpecsVisible] = useState(false);
  const [scrollHint, setScrollHint] = useState(true);
  const [uiProgress, setUiProgress] = useState(0);

  /* ── Initialise Three.js Scene ─────────────────────────────── */
  const initScene = useCallback(() => {
    if (!canvasWrapRef.current) return;

    const w = window.innerWidth;
    const h = window.innerHeight;

    // Renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    canvasWrapRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.035);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 100);
    camera.position.set(6, 2.8, 0);
    camera.lookAt(0, 0.6, 0);
    cameraRef.current = camera;

    // ── Lighting ────────────────────────────────────────────────
    const ambient = new THREE.AmbientLight(0x1a2040, 0.9);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xfff5e0, 2.8);
    keyLight.position.set(8, 10, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.camera.near = 0.1;
    keyLight.shadow.camera.far = 30;
    keyLight.shadow.camera.left = -8;
    keyLight.shadow.camera.right = 8;
    keyLight.shadow.camera.top = 8;
    keyLight.shadow.camera.bottom = -8;
    keyLight.shadow.bias = -0.0004;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x4080ff, 1.4);
    fillLight.position.set(-6, 4, -4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x8040ff, 0.9);
    rimLight.position.set(-3, 6, 8);
    scene.add(rimLight);

    const accentLight = new THREE.PointLight(0x1C69D4, 2.0, 10);
    accentLight.position.set(0, -0.5, 0);
    scene.add(accentLight);
    lightRefs.current.accent = accentLight;

    const topSpot1 = new THREE.SpotLight(0xffffff, 2.0, 20, Math.PI / 6);
    topSpot1.position.set(2, 9, 1);
    topSpot1.target.position.set(0, 0, 0);
    scene.add(topSpot1);
    scene.add(topSpot1.target);

    const topSpot2 = new THREE.SpotLight(0xffffff, 1.5, 20, Math.PI / 6);
    topSpot2.position.set(-2, 9, -1);
    topSpot2.target.position.set(0, 0, 0);
    scene.add(topSpot2);
    scene.add(topSpot2.target);

    // ── Floor ───────────────────────────────────────────────────
    const floor = createShowroomFloor();
    scene.add(floor);

    // ── Load BMW X3 GLB ─────────────────────────────────────────
    const loader = new GLTFLoader();
    loader.load(
      '/models/bmw-x3.glb',
      (gltf) => {
        const car = gltf.scene;
        fitModel(car);
        scene.add(car);
        carRef.current = car;

        // Try to find door meshes in the GLB
        let foundDoor = false;
        car.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
          const name = (child.name || '').toLowerCase();
          if (
            !foundDoor &&
            (name.includes('door') && (name.includes('front') || name.includes('fl') || name.includes('left')))
          ) {
            doorRef.current = child;
            // Store original rotation
            child.userData.originalRotation = child.rotation.y;
            foundDoor = true;
          }
        });

        // If no door mesh found, create a fake door pivot group
        if (!foundDoor) {
          createFakeDoor(car);
        }

        setIsLoading(false);
      },
      undefined,
      () => {
        // Fallback to procedural car
        const fallback = createBMWCar(0x1C69D4, 'suv-compact');
        fallback.position.y = 0;
        scene.add(fallback);
        carRef.current = fallback;
        createFakeDoor(fallback);
        setIsLoading(false);
      }
    );

    // ── Particles ───────────────────────────────────────────────
    const particleGeo = new THREE.BufferGeometry();
    const pCount = 120;
    const positions = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = Math.random() * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x1C69D4,
      size: 0.04,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // ── Render Loop ─────────────────────────────────────────────
    let time = 0;
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      time += 0.008;

      const p = progressRef.current;

      if (carRef.current) {
        // Phase 1 (0–0.12): Subtle idle rotation
        // Phase 2 (0.12–0.50): Scroll-linked 360° rotation
        const idleRotation = time * 0.15;
        const scrollRotation = mapRange(p, 0.12, 0.50) * Math.PI * 2;
        const totalRotation = p < 0.12 ? idleRotation : scrollRotation + 0.3;
        carRef.current.rotation.y = totalRotation;

        // Floating effect (subtle)
        carRef.current.position.y = (carRef.current.userData.baseY || 0) + Math.sin(time * 0.5) * 0.015;
      }

      // Phase 3 (0.50–0.72): Door opens
      if (doorRef.current) {
        const doorProgress = smoothstep(mapRange(p, 0.50, 0.72));
        const origRot = doorRef.current.userData.originalRotation || 0;
        doorRef.current.rotation.y = origRot + doorProgress * 1.1; // ~63 degrees
      }

      // Camera movement based on progress
      if (cameraRef.current) {
        // Phase 2–3: Camera arcs around
        const camAngle = mapRange(p, 0.12, 0.72) * 0.8;
        const camDist = lerp(6, 4.5, smoothstep(mapRange(p, 0.50, 0.80)));
        const camHeight = lerp(2.8, 2.0, smoothstep(mapRange(p, 0.50, 0.80)));

        camera.position.x = Math.cos(camAngle) * camDist;
        camera.position.z = Math.sin(camAngle) * camDist;
        camera.position.y = camHeight;

        // Phase 5 (0.88–1.0): Pull back
        if (p > 0.88) {
          const pullBack = smoothstep(mapRange(p, 0.88, 1.0));
          camera.position.y = lerp(2.0, 4.0, pullBack);
          const dist = lerp(4.5, 8, pullBack);
          camera.position.x = Math.cos(camAngle) * dist;
          camera.position.z = Math.sin(camAngle) * dist;
        }

        camera.lookAt(0, 0.6, 0);
      }

      // Particle drift
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0004;
      }

      // Accent light pulse
      if (lightRefs.current.accent) {
        lightRefs.current.accent.intensity = 2.0 + Math.sin(time * 2) * 0.4;
      }

      renderer.render(scene, camera);
    };
    animate();
  }, []);

  /* ── Fit GLB Model ─────────────────────────────────────────── */
  function fitModel(car) {
    const bounds = new THREE.Box3().setFromObject(car);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    bounds.getSize(size);
    bounds.getCenter(center);

    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const scale = 4.6 / maxDim;

    car.scale.setScalar(scale);
    car.position.sub(center.multiplyScalar(scale));

    const scaledBounds = new THREE.Box3().setFromObject(car);
    car.position.y -= scaledBounds.min.y;
    car.userData.baseY = car.position.y;
  }

  /* ── Create Fake Door Pivot ────────────────────────────────── */
  function createFakeDoor(car) {
    // Create a transparent door-sized group attached to the car
    // positioned at the front-left door area
    const doorPivot = new THREE.Group();
    doorPivot.position.set(0.8, 0.5, 1.0); // Front-left hinge position
    doorPivot.userData.originalRotation = 0;

    // Create a visible door panel
    const doorGeo = new THREE.BoxGeometry(1.0, 0.8, 0.04);
    const doorMat = new THREE.MeshPhysicalMaterial({
      color: 0x1C69D4,
      metalness: 0.65,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      transparent: true,
      opacity: 0.6,
    });
    const doorMesh = new THREE.Mesh(doorGeo, doorMat);
    doorMesh.position.set(-0.5, 0, 0); // Offset from hinge
    doorPivot.add(doorMesh);

    car.add(doorPivot);
    doorRef.current = doorPivot;
  }

  /* ── Init + Cleanup ────────────────────────────────────────── */
  useEffect(() => {
    initScene();

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (rendererRef.current) {
        const canvas = rendererRef.current.domElement;
        rendererRef.current.dispose();
        if (canvasWrapRef.current?.contains(canvas)) {
          canvasWrapRef.current.removeChild(canvas);
        }
      }
    };
  }, []);

  /* ── Scroll Handler ────────────────────────────────────────── */
  useEffect(() => {
    let rafId = null;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const el = sectionRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const sectionHeight = el.scrollHeight - window.innerHeight;
        const raw = (window.scrollY - sectionTop) / Math.max(sectionHeight, 1);
        const p = Math.min(Math.max(raw, 0), 1);

        progressRef.current = p;
        setUiProgress(p);

        // UI state updates
        setHeroOpacity(p < 0.08 ? 1 : Math.max(0, 1 - mapRange(p, 0.08, 0.18) * 1));
        setSpecsVisible(p > 0.68 && p < 0.92);
        setScrollHint(p < 0.05);

        if (p >= 0.98) {
          onFinished?.();
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onFinished]);

  /* ── Resize Handler ────────────────────────────────────────── */
  useEffect(() => {
    const onResize = () => {
      if (!rendererRef.current || !cameraRef.current) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      rendererRef.current.setSize(w, h);
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* ── Phase Label ───────────────────────────────────────────── */
  const getPhaseLabel = () => {
    const p = uiProgress;
    if (p < 0.12) return '';
    if (p < 0.50) return 'Exterior · 360° View';
    if (p < 0.72) return 'Door Opening';
    if (p < 0.88) return 'Performance Specs';
    return 'Entering Showroom';
  };

  /* ── Render ────────────────────────────────────────────────── */
  return (
    <section ref={sectionRef} className="relative" style={{ height: '400vh' }}>
      {/* Fixed 3D Canvas */}
      <div className="fixed inset-0 z-10" style={{ pointerEvents: uiProgress >= 0.98 ? 'none' : 'auto' }}>
        {/* Three.js mount */}
        <div
          ref={canvasWrapRef}
          className="absolute inset-0"
          style={{
            opacity: uiProgress > 0.92 ? Math.max(0, 1 - mapRange(uiProgress, 0.92, 1.0)) : 1,
            transform: uiProgress > 0.88
              ? `scale(${lerp(1, 0.85, smoothstep(mapRange(uiProgress, 0.88, 1.0)))})`
              : 'scale(1)',
            transition: 'none',
          }}
        />

        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-30 bg-bmw-black">
            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 border-2 border-bmw-blue/20 border-t-bmw-blue rounded-full animate-spin" />
              <span className="text-white/50 font-body text-sm tracking-[0.3em] uppercase">
                Loading BMW X3
              </span>
            </div>
          </div>
        )}

        {/* Background Grid */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            opacity: 0.06,
            backgroundImage: `
              linear-gradient(rgba(28,105,212,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(28,105,212,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 60%, rgba(28,105,212,0.08) 0%, transparent 70%)',
          }}
        />

        {/* ─── Hero Text Overlay ─────────────────────────────────── */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none"
          style={{
            opacity: heroOpacity,
            transform: `translateY(${uiProgress * -80}px)`,
            transition: 'none',
          }}
        >
          <div className="text-center px-6 max-w-5xl mx-auto pointer-events-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-bmw-blue/30 rounded-full text-bmw-blue-light text-xs font-body tracking-[0.3em] uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-bmw-blue animate-pulse" />
              BMW Showroom India — 2024
            </div>

            {/* Headline */}
            <h1 className="font-display text-white mb-6 leading-none">
              <span className="block text-[clamp(3.5rem,10vw,8rem)] font-800 tracking-[-0.02em] text-gradient">
                The Ultimate
              </span>
              <span className="block text-[clamp(3.5rem,10vw,8rem)] font-800 tracking-[-0.02em] text-gradient-blue">
                Driving Machine
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/40 text-lg font-body font-300 max-w-xl mx-auto leading-relaxed mb-12">
              Experience every BMW model in stunning 3D. Scroll to explore the
              BMW X3 in a cinematic reveal.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <button className="group px-8 py-4 bg-bmw-blue hover:bg-bmw-blue-dark text-white font-display font-600 text-sm tracking-[0.2em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(28,105,212,0.5)] flex items-center gap-3">
                Scroll to Explore
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-200" />
              </button>
              <button className="group px-8 py-4 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-display font-500 text-sm tracking-[0.2em] uppercase rounded-sm transition-all duration-300 flex items-center gap-3">
                <Play size={14} fill="currentColor" />
                Watch Film
              </button>
            </div>
          </div>

          {/* Stats bar */}
          <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-12 sm:gap-20">
            {[
              { label: 'BMW Models', value: '9+' },
              { label: 'Years of Excellence', value: '107' },
              { label: 'Happy Owners', value: '500K+' },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="font-display text-2xl font-700 text-white tracking-wide">{value}</div>
                <div className="text-[10px] text-white/30 font-body tracking-[0.25em] uppercase mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Phase Label ───────────────────────────────────────── */}
        {uiProgress > 0.12 && uiProgress < 0.95 && (
          <div
            className="absolute top-6 left-1/2 -translate-x-1/2 z-30"
            style={{
              opacity: uiProgress > 0.12 ? Math.min(1, mapRange(uiProgress, 0.12, 0.18)) : 0,
            }}
          >
            <div className="glass px-5 py-2 rounded-full flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-bmw-blue animate-pulse" />
              <span className="text-[11px] text-white/70 font-body tracking-[0.25em] uppercase">
                {getPhaseLabel()}
              </span>
              <span className="text-[10px] text-white/30 font-mono">
                {Math.round(uiProgress * 100)}%
              </span>
            </div>
          </div>
        )}

        {/* ─── Spec Cards ────────────────────────────────────────── */}
        <div
          className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-4"
          style={{
            opacity: specsVisible ? 1 : 0,
            transform: specsVisible
              ? 'translate(-50%, 0)'
              : 'translate(-50%, 40px)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {SPECS.map((spec, i) => (
            <div
              key={spec.label}
              className="glass-dark px-6 py-4 rounded-lg min-w-[120px] text-center"
              style={{
                transitionDelay: `${i * 80}ms`,
                opacity: specsVisible ? 1 : 0,
                transform: specsVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div className="font-display text-xl font-700 text-white tracking-wide">
                {spec.value}
              </div>
              <div className="text-[9px] text-bmw-blue-light font-body tracking-[0.2em] uppercase mt-1">
                {spec.unit && <span className="text-white/40 mr-1">{spec.unit}</span>}
                {spec.label}
              </div>
            </div>
          ))}
        </div>

        {/* ─── Scroll Hint ───────────────────────────────────────── */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
          style={{
            opacity: scrollHint ? 0.4 : 0,
            transition: 'opacity 0.5s',
          }}
        >
          <span className="text-[10px] text-white font-body tracking-[0.3em] uppercase">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-white/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
