import { useEffect, useRef, useCallback, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { createBMWCar, createShowroomFloor, updateCarColor } from '@/utils/carGeometry';
import { BMW_COLORS } from '@/data/bmwModels';

export default function CarViewer3D({ model, selectedColor, isRotating, onLoadComplete }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const carRef = useRef(null);
  const frameRef = useRef(null);
  const isRotatingRef = useRef(isRotating);
  const mouseRef = useRef({ isDown: false, lastX: 0, lastY: 0 });
  const rotationRef = useRef({ y: 0.3, target: 0.3 });
  const baseCarYRef = useRef(0);
  const particlesRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState('');

  const initScene = useCallback(() => {
    if (!mountRef.current) return;

    setIsLoading(true);
    setLoadError('');

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // ─── RENDERER ──────────────────────────────────────────────
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'default',
      });
    } catch (error) {
      console.error('3D viewer failed to initialize:', error);
      setLoadError('3D rendering is unavailable on this browser/device.');
      setIsLoading(false);
      return;
    }
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // ─── SCENE ─────────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.background = null; // transparent
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.045);
    sceneRef.current = scene;

    // ─── CAMERA ────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(5.5, 2.5, 0);
    camera.lookAt(0, 0.6, 0);
    cameraRef.current = camera;

    // ─── ENVIRONMENT LIGHTING ──────────────────────────────────
    // Ambient
    const ambient = new THREE.AmbientLight(0x1a2040, 0.8);
    scene.add(ambient);

    // Key light (slightly warm)
    const keyLight = new THREE.DirectionalLight(0xfff5e0, 2.5);
    keyLight.position.set(8, 10, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.camera.near = 0.1;
    keyLight.shadow.camera.far = 30;
    keyLight.shadow.camera.left = -8;
    keyLight.shadow.camera.right = 8;
    keyLight.shadow.camera.top = 8;
    keyLight.shadow.camera.bottom = -8;
    keyLight.shadow.bias = -0.0004;
    scene.add(keyLight);

    // Fill light (blue tinted)
    const fillLight = new THREE.DirectionalLight(0x4080ff, 1.2);
    fillLight.position.set(-6, 4, -4);
    scene.add(fillLight);

    // Rim light (back highlight)
    const rimLight = new THREE.DirectionalLight(0x8040ff, 0.8);
    rimLight.position.set(-3, 6, 8);
    scene.add(rimLight);

    // BMW Blue accent light from below
    const accentLight = new THREE.PointLight(0x1C69D4, 1.5, 8);
    accentLight.position.set(0, -0.5, 0);
    scene.add(accentLight);

    // Studio lights (top)
    const topLight1 = new THREE.SpotLight(0xffffff, 2.0, 20, Math.PI / 6);
    topLight1.position.set(2, 9, 1);
    topLight1.target.position.set(0, 0, 0);
    scene.add(topLight1);
    scene.add(topLight1.target);

    const topLight2 = new THREE.SpotLight(0xffffff, 1.5, 20, Math.PI / 6);
    topLight2.position.set(-2, 9, -1);
    topLight2.target.position.set(0, 0, 0);
    scene.add(topLight2);
    scene.add(topLight2.target);

    // ─── FLOOR ─────────────────────────────────────────────────
    const floor = createShowroomFloor();
    scene.add(floor);

    // ─── CAR ───────────────────────────────────────────────────
    const colorName = selectedColor || model?.colors?.[0] || 'Tanzanite Blue';
    const colorHex = parseInt(BMW_COLORS[colorName]?.replace('#', '0x') || '0x1C69D4');
    const mountCar = (car) => {
      scene.add(car);
      carRef.current = car;
      baseCarYRef.current = car.position.y;
      setIsLoading(false);
      onLoadComplete?.();
    };

    const createFallbackCar = () => {
      const fallbackCar = createBMWCar(colorHex, model?.modelType || 'sedan');
      fallbackCar.position.y = 0;
      fallbackCar.userData.usesProceduralBody = true;
      mountCar(fallbackCar);
    };

    const fitModelToStage = (car) => {
      car.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      const bounds = new THREE.Box3().setFromObject(car);
      const size = new THREE.Vector3();
      const center = new THREE.Vector3();
      bounds.getSize(size);
      bounds.getCenter(center);

      const maxDim = Math.max(size.x, size.y, size.z) || 1;
      const targetSize = 4.6;
      const scale = targetSize / maxDim;

      car.scale.setScalar(scale);
      car.position.sub(center.multiplyScalar(scale));

      const scaledBounds = new THREE.Box3().setFromObject(car);
      car.position.y -= scaledBounds.min.y;
      car.userData.usesProceduralBody = false;
    };

    if (model?.model3d) {
      const loader = new GLTFLoader();
      loader.load(
        model.model3d,
        (gltf) => {
          const gltfCar = gltf.scene;
          fitModelToStage(gltfCar);
          mountCar(gltfCar);
        },
        undefined,
        (error) => {
          console.error(`Failed to load GLB for ${model?.id || 'selected model'}:`, error);
          createFallbackCar();
        }
      );
    } else {
      createFallbackCar();
    }

    // ─── PARTICLES ─────────────────────────────────────────────
    const particleGeo = new THREE.BufferGeometry();
    const particleCount = 80;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = Math.random() * 7;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x1C69D4,
      size: 0.04,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // ─── ANIMATE ───────────────────────────────────────────────
    let time = 0;
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      time += 0.01;

      // Smooth rotation
      if (!mouseRef.current.isDown) {
        if (isRotatingRef.current) {
          rotationRef.current.target += 0.004;
        }
        rotationRef.current.y += (rotationRef.current.target - rotationRef.current.y) * 0.06;
      }

      if (carRef.current) {
        carRef.current.rotation.y = rotationRef.current.y;
        // Subtle floating
        carRef.current.position.y = baseCarYRef.current + Math.sin(time * 0.5) * 0.025;
      }

      // Particle drift
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0006;
      }

      // Accent light pulse
      accentLight.intensity = 1.5 + Math.sin(time * 2) * 0.3;

      renderer.render(scene, camera);
    };
    animate();
  }, [model, selectedColor, onLoadComplete]);

  // ─── INIT ──────────────────────────────────────────────────
  useEffect(() => {
    initScene();

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (rendererRef.current) {
        const canvas = rendererRef.current.domElement;
        rendererRef.current.dispose();
        if (mountRef.current?.contains(canvas)) {
          mountRef.current.removeChild(canvas);
        }
      }
    };
  }, [model?.id]);

  // ─── COLOR CHANGE ─────────────────────────────────────────
  useEffect(() => {
    if (carRef.current?.userData?.usesProceduralBody && selectedColor) {
      const hex = BMW_COLORS[selectedColor];
      if (hex) {
        const colorNum = parseInt(hex.replace('#', ''), 16);
        updateCarColor(carRef.current, colorNum);
      }
    }
  }, [selectedColor]);

  // ─── ROTATION TOGGLE ──────────────────────────────────────
  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  // ─── RESIZE ────────────────────────────────────────────────
  useEffect(() => {
    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      rendererRef.current.setSize(w, h);
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ─── MOUSE DRAG ────────────────────────────────────────────
  const handleMouseDown = (e) => {
    mouseRef.current.isDown = true;
    mouseRef.current.lastX = e.clientX;
  };
  const handleMouseMove = (e) => {
    if (!mouseRef.current.isDown) return;
    const dx = e.clientX - mouseRef.current.lastX;
    rotationRef.current.target += dx * 0.008;
    mouseRef.current.lastX = e.clientX;
  };
  const handleMouseUp = () => {
    mouseRef.current.isDown = false;
  };

  // Touch
  const handleTouchStart = (e) => {
    mouseRef.current.isDown = true;
    mouseRef.current.lastX = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    if (!mouseRef.current.isDown) return;
    const dx = e.touches[0].clientX - mouseRef.current.lastX;
    rotationRef.current.target += dx * 0.008;
    mouseRef.current.lastX = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    mouseRef.current.isDown = false;
  };

  return (
    <div className="relative w-full h-full canvas-container">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-2 border-bmw-blue/20 border-t-bmw-blue rounded-full animate-spin" />
            <span className="text-bmw-silver/60 font-body text-sm tracking-widest uppercase">
              Loading Model
            </span>
          </div>
        </div>
      )}
      {!isLoading && loadError && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-bmw-black/75 px-6">
          <p className="text-center text-sm text-white/70 font-body max-w-xs">
            {loadError}
          </p>
        </div>
      )}
      <div
        ref={mountRef}
        className="w-full h-full"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
      {/* Drag hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-40">
        <div className="w-4 h-4 border border-white/50 rounded-sm" />
        <span className="text-white/50 text-xs font-body tracking-widest uppercase">
          Drag to rotate
        </span>
      </div>
    </div>
  );
}
