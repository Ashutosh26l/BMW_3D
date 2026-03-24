import * as THREE from 'three';

/**
 * Creates a stylized geometric BMW car using Three.js primitives.
 * Each modelType produces a slightly different silhouette.
 */
export function createBMWCar(colorHex = 0x1C69D4, modelType = 'sedan') {
  const car = new THREE.Group();

  // ─── MATERIALS ──────────────────────────────────────────────
  const bodyMat = new THREE.MeshPhysicalMaterial({
    color: colorHex,
    metalness: 0.65,
    roughness: 0.15,
    clearcoat: 1.0,
    clearcoatRoughness: 0.08,
    reflectivity: 1.0,
  });

  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x667788,
    metalness: 0.0,
    roughness: 0.05,
    transmission: 0.85,
    transparent: true,
    opacity: 0.35,
    side: THREE.DoubleSide,
  });

  const chromeMat = new THREE.MeshStandardMaterial({
    color: 0xcccccc,
    metalness: 1.0,
    roughness: 0.05,
  });

  const blackMat = new THREE.MeshStandardMaterial({
    color: 0x0a0a0a,
    metalness: 0.2,
    roughness: 0.9,
  });

  const darkMat = new THREE.MeshStandardMaterial({
    color: 0x111111,
    metalness: 0.4,
    roughness: 0.6,
  });

  const tireMat = new THREE.MeshStandardMaterial({
    color: 0x111111,
    metalness: 0.0,
    roughness: 1.0,
  });

  const headlightMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffee,
    emissiveIntensity: 0.8,
    metalness: 0.3,
    roughness: 0.1,
  });

  const taillightMat = new THREE.MeshStandardMaterial({
    color: 0xff3300,
    emissive: 0xff1100,
    emissiveIntensity: 0.5,
    metalness: 0.2,
    roughness: 0.1,
  });

  const bmwBlueMat = new THREE.MeshStandardMaterial({
    color: 0x1C69D4,
    metalness: 0.6,
    roughness: 0.3,
  });

  // ─── MODEL DIMENSIONS ──────────────────────────────────────
  const dims = getModelDimensions(modelType);

  // ─── MAIN BODY ──────────────────────────────────────────────
  // Lower body / sill area
  const lowerBodyGeo = new THREE.BoxGeometry(dims.bodyLength, dims.bodyHeight * 0.55, dims.bodyWidth);
  const lowerBody = new THREE.Mesh(lowerBodyGeo, bodyMat);
  lowerBody.position.y = dims.groundClearance + dims.bodyHeight * 0.28;
  car.add(lowerBody);

  // Side body sculpt (slightly narrower, taller box giving rounded feel)
  const midBodyGeo = new THREE.BoxGeometry(dims.bodyLength * 0.95, dims.bodyHeight * 0.4, dims.bodyWidth * 0.94);
  const midBody = new THREE.Mesh(midBodyGeo, bodyMat);
  midBody.position.y = dims.groundClearance + dims.bodyHeight * 0.6;
  car.add(midBody);

  // ─── CABIN ──────────────────────────────────────────────────
  const cabinLength = dims.bodyLength * (dims.cabinLengthRatio || 0.52);
  const cabinHeight = dims.cabinHeight;

  const cabinGeo = new THREE.BoxGeometry(cabinLength, cabinHeight, dims.bodyWidth * 0.9);
  const cabin = new THREE.Mesh(cabinGeo, bodyMat);
  cabin.position.set(dims.cabinOffset || -0.05, dims.cabinY, 0);
  car.add(cabin);

  // Cabin roof curve (top of cabin slightly narrower)
  const roofGeo = new THREE.BoxGeometry(cabinLength * 0.9, cabinHeight * 0.15, dims.bodyWidth * 0.82);
  const roof = new THREE.Mesh(roofGeo, bodyMat);
  roof.position.set(dims.cabinOffset || -0.05, dims.cabinY + cabinHeight * 0.5 + cabinHeight * 0.07, 0);
  car.add(roof);

  // ─── HOOD ───────────────────────────────────────────────────
  const hoodLength = dims.bodyLength * 0.28;
  const hoodGeo = new THREE.BoxGeometry(hoodLength, dims.bodyHeight * 0.12, dims.bodyWidth * 0.88);
  const hood = new THREE.Mesh(hoodGeo, bodyMat);
  // Position hood sloping forward
  hood.position.set(
    dims.bodyLength * 0.5 - hoodLength * 0.5 - 0.05,
    dims.groundClearance + dims.bodyHeight * 0.82,
    0
  );
  hood.rotation.z = -0.07;
  car.add(hood);

  // Hood leading edge
  const hoodFrontGeo = new THREE.BoxGeometry(0.12, dims.bodyHeight * 0.18, dims.bodyWidth * 0.88);
  const hoodFront = new THREE.Mesh(hoodFrontGeo, bodyMat);
  hoodFront.position.set(
    dims.bodyLength * 0.5 - 0.06,
    dims.groundClearance + dims.bodyHeight * 0.78,
    0
  );
  car.add(hoodFront);

  // ─── TRUNK / FASTBACK ────────────────────────────────────────
  const trunkLength = dims.bodyLength * 0.22;
  const trunkGeo = new THREE.BoxGeometry(trunkLength, dims.bodyHeight * 0.1, dims.bodyWidth * 0.88);
  const trunk = new THREE.Mesh(trunkGeo, bodyMat);
  trunk.position.set(
    -(dims.bodyLength * 0.5 - trunkLength * 0.5 - 0.05),
    dims.groundClearance + dims.bodyHeight * 0.8,
    0
  );
  trunk.rotation.z = modelType.includes('coupe') ? 0.15 : 0.06;
  car.add(trunk);

  // ─── FRONT BUMPER ────────────────────────────────────────────
  const bumperFGeo = new THREE.BoxGeometry(0.18, dims.bodyHeight * 0.6, dims.bodyWidth * 0.95);
  const bumperF = new THREE.Mesh(bumperFGeo, bodyMat);
  bumperF.position.set(dims.bodyLength * 0.5 + 0.09, dims.groundClearance + dims.bodyHeight * 0.22, 0);
  car.add(bumperF);

  // Front lip spoiler
  const lipGeo = new THREE.BoxGeometry(0.06, 0.06, dims.bodyWidth * 0.7);
  const lip = new THREE.Mesh(lipGeo, darkMat);
  lip.position.set(dims.bodyLength * 0.5 + 0.18, dims.groundClearance + 0.05, 0);
  car.add(lip);

  // ─── REAR BUMPER ─────────────────────────────────────────────
  const bumperRGeo = new THREE.BoxGeometry(0.18, dims.bodyHeight * 0.55, dims.bodyWidth * 0.95);
  const bumperR = new THREE.Mesh(bumperRGeo, bodyMat);
  bumperR.position.set(-(dims.bodyLength * 0.5 + 0.09), dims.groundClearance + dims.bodyHeight * 0.2, 0);
  car.add(bumperR);

  // ─── BMW KIDNEY GRILLES ──────────────────────────────────────
  const grilleOffsets = [-0.22, 0.22];
  grilleOffsets.forEach((zOff) => {
    // Grille background
    const grilleBGGeo = new THREE.BoxGeometry(0.06, dims.bodyHeight * 0.38, 0.32);
    const grilleBG = new THREE.Mesh(grilleBGGeo, blackMat);
    grilleBG.position.set(dims.bodyLength * 0.5 + 0.12, dims.groundClearance + dims.bodyHeight * 0.48, zOff);
    car.add(grilleBG);

    // Grille frame (chrome)
    const grilleFrameGeo = new THREE.BoxGeometry(0.07, dims.bodyHeight * 0.42, 0.36);
    const grilleFrame = new THREE.Mesh(grilleFrameGeo, chromeMat);
    grilleFrame.position.set(dims.bodyLength * 0.5 + 0.11, dims.groundClearance + dims.bodyHeight * 0.48, zOff);
    car.add(grilleFrame);

    // Grille horizontal slats
    for (let i = 0; i < 4; i++) {
      const slatGeo = new THREE.BoxGeometry(0.06, 0.025, 0.3);
      const slat = new THREE.Mesh(slatGeo, darkMat);
      const yOffset = dims.groundClearance + dims.bodyHeight * 0.35 + i * 0.065;
      slat.position.set(dims.bodyLength * 0.5 + 0.13, yOffset, zOff);
      car.add(slat);
    }
  });

  // Grille center bar
  const centerBarGeo = new THREE.BoxGeometry(0.07, dims.bodyHeight * 0.42, 0.08);
  const centerBar = new THREE.Mesh(centerBarGeo, chromeMat);
  centerBar.position.set(dims.bodyLength * 0.5 + 0.11, dims.groundClearance + dims.bodyHeight * 0.48, 0);
  car.add(centerBar);

  // Lower front mesh grille
  const lowerGrilleGeo = new THREE.BoxGeometry(0.1, 0.1, dims.bodyWidth * 0.6);
  const lowerGrille = new THREE.Mesh(lowerGrilleGeo, blackMat);
  lowerGrille.position.set(dims.bodyLength * 0.5 + 0.08, dims.groundClearance + 0.18, 0);
  car.add(lowerGrille);

  // ─── HEADLIGHTS (LED DRL) ────────────────────────────────────
  [-1, 1].forEach((side) => {
    const zPos = side * (dims.bodyWidth * 0.45);

    // Main headlight unit
    const hlGeo = new THREE.BoxGeometry(0.09, dims.bodyHeight * 0.22, 0.35);
    const hl = new THREE.Mesh(hlGeo, headlightMat);
    hl.position.set(dims.bodyLength * 0.5 + 0.08, dims.groundClearance + dims.bodyHeight * 0.68, zPos);
    car.add(hl);

    // DRL strip (angel eye)
    const drlGeo = new THREE.BoxGeometry(0.06, 0.04, 0.32);
    const drlMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1.5 });
    const drl = new THREE.Mesh(drlGeo, drlMat);
    drl.position.set(dims.bodyLength * 0.5 + 0.1, dims.groundClearance + dims.bodyHeight * 0.82, zPos);
    car.add(drl);
  });

  // ─── TAILLIGHTS ─────────────────────────────────────────────
  [-1, 1].forEach((side) => {
    const zPos = side * (dims.bodyWidth * 0.44);

    const tlGeo = new THREE.BoxGeometry(0.09, dims.bodyHeight * 0.2, 0.4);
    const tl = new THREE.Mesh(tlGeo, taillightMat);
    tl.position.set(-(dims.bodyLength * 0.5 + 0.08), dims.groundClearance + dims.bodyHeight * 0.65, zPos);
    car.add(tl);

    // Tail light strip (L-strip LED)
    const stripGeo = new THREE.BoxGeometry(0.06, 0.04, 0.38);
    const stripMat = new THREE.MeshStandardMaterial({ color: 0xff2200, emissive: 0xff0000, emissiveIntensity: 0.8 });
    const strip = new THREE.Mesh(stripGeo, stripMat);
    strip.position.set(-(dims.bodyLength * 0.5 + 0.1), dims.groundClearance + dims.bodyHeight * 0.78, zPos);
    car.add(strip);
  });

  // Rear connecting light bar
  const rearBarGeo = new THREE.BoxGeometry(0.05, 0.03, dims.bodyWidth * 0.7);
  const rearBarMat = new THREE.MeshStandardMaterial({ color: 0xff2200, emissive: 0xff0000, emissiveIntensity: 0.5 });
  const rearBar = new THREE.Mesh(rearBarGeo, rearBarMat);
  rearBar.position.set(-(dims.bodyLength * 0.5 + 0.1), dims.groundClearance + dims.bodyHeight * 0.78, 0);
  car.add(rearBar);

  // ─── WINDSHIELDS ─────────────────────────────────────────────
  // Front windshield
  const fwsGeo = new THREE.PlaneGeometry(dims.bodyWidth * 0.84, cabinHeight * 0.72);
  const fws = new THREE.Mesh(fwsGeo, glassMat);
  fws.position.set(
    (dims.cabinOffset || -0.05) + cabinLength * 0.45,
    dims.cabinY + cabinHeight * 0.05,
    0
  );
  fws.rotation.y = Math.PI / 2;
  fws.rotation.z = dims.windshieldAngle || 0.32;
  car.add(fws);

  // Rear windshield
  const rwsGeo = new THREE.PlaneGeometry(dims.bodyWidth * 0.82, cabinHeight * 0.65);
  const rws = new THREE.Mesh(rwsGeo, glassMat);
  rws.position.set(
    (dims.cabinOffset || -0.05) - cabinLength * 0.44,
    dims.cabinY + cabinHeight * 0.05,
    0
  );
  rws.rotation.y = -Math.PI / 2;
  rws.rotation.z = -(dims.rearWindowAngle || 0.28);
  car.add(rws);

  // Side windows
  [-1, 1].forEach((side) => {
    const swGeo = new THREE.PlaneGeometry(cabinLength * 0.85, cabinHeight * 0.62);
    const sw = new THREE.Mesh(swGeo, glassMat);
    sw.position.set(dims.cabinOffset || -0.05, dims.cabinY + cabinHeight * 0.05, side * dims.bodyWidth * 0.455);
    sw.rotation.y = side === 1 ? 0 : Math.PI;
    car.add(sw);
  });

  // ─── SIDE MIRRORS ────────────────────────────────────────────
  [-1, 1].forEach((side) => {
    const mirrorGeo = new THREE.BoxGeometry(0.18, 0.1, 0.06);
    const mirror = new THREE.Mesh(mirrorGeo, bodyMat);
    mirror.position.set(
      (dims.cabinOffset || -0.05) + cabinLength * 0.38,
      dims.cabinY + cabinHeight * 0.52,
      side * (dims.bodyWidth * 0.5 + 0.03)
    );
    car.add(mirror);

    // Mirror glass
    const mgGeo = new THREE.PlaneGeometry(0.15, 0.08);
    const mg = new THREE.Mesh(mgGeo, glassMat);
    mg.position.copy(mirror.position);
    mg.position.z += side * 0.04;
    mg.rotation.y = side === 1 ? -0.2 : Math.PI + 0.2;
    car.add(mg);
  });

  // ─── DOOR HANDLES ────────────────────────────────────────────
  const doorHandlePositions = [
    [0.5, 0],
    [-0.2, 0],
  ];
  [-1, 1].forEach((side) => {
    doorHandlePositions.forEach(([xOff]) => {
      const dhGeo = new THREE.BoxGeometry(0.18, 0.04, 0.02);
      const dh = new THREE.Mesh(dhGeo, chromeMat);
      dh.position.set(
        (dims.cabinOffset || -0.05) + xOff,
        dims.groundClearance + dims.bodyHeight * 0.85,
        side * (dims.bodyWidth * 0.48)
      );
      car.add(dh);
    });
  });

  // ─── SIDE SKIRTS ─────────────────────────────────────────────
  [-1, 1].forEach((side) => {
    const skirtGeo = new THREE.BoxGeometry(dims.bodyLength * 0.7, 0.08, 0.06);
    const skirt = new THREE.Mesh(skirtGeo, darkMat);
    skirt.position.set(0, dims.groundClearance * 0.5, side * (dims.bodyWidth * 0.49));
    car.add(skirt);
  });

  // ─── WHEELS ─────────────────────────────────────────────────
  const wheelBase = dims.wheelbase;
  const wheelTrack = dims.wheeltrack;
  const wheelY = dims.wheelRadius;

  const wheelPositions = [
    [wheelBase / 2, wheelY, wheelTrack / 2, true],    // front right
    [wheelBase / 2, wheelY, -wheelTrack / 2, false],  // front left
    [-wheelBase / 2, wheelY, wheelTrack / 2, true],   // rear right
    [-wheelBase / 2, wheelY, -wheelTrack / 2, false], // rear left
  ];

  wheelPositions.forEach(([x, y, z]) => {
    const wheelGroup = new THREE.Group();
    wheelGroup.position.set(x, y, z);

    // Tire
    const tireGeo = new THREE.CylinderGeometry(dims.wheelRadius, dims.wheelRadius, dims.wheelWidth, 32);
    const tire = new THREE.Mesh(tireGeo, tireMat);
    tire.rotation.x = Math.PI / 2;
    wheelGroup.add(tire);

    // Rim outer
    const rimGeo = new THREE.CylinderGeometry(dims.rimRadius, dims.rimRadius, dims.wheelWidth + 0.01, 20);
    const rim = new THREE.Mesh(rimGeo, chromeMat);
    rim.rotation.x = Math.PI / 2;
    wheelGroup.add(rim);

    // Rim spokes (5-spoke design)
    for (let i = 0; i < 5; i++) {
      const spokeGeo = new THREE.BoxGeometry(dims.rimRadius * 1.8, 0.025, 0.03);
      const spoke = new THREE.Mesh(spokeGeo, chromeMat);
      spoke.rotation.z = (i * Math.PI * 2) / 5;
      spoke.position.z = dims.wheelWidth * 0.4;
      wheelGroup.add(spoke);

      // Spoke on the other side
      const spoke2 = spoke.clone();
      spoke2.position.z = -dims.wheelWidth * 0.4;
      wheelGroup.add(spoke2);
    }

    // Center cap
    const capGeo = new THREE.CylinderGeometry(0.06, 0.06, dims.wheelWidth + 0.03, 16);
    const cap = new THREE.Mesh(capGeo, bmwBlueMat);
    cap.rotation.x = Math.PI / 2;
    wheelGroup.add(cap);

    // Brake disc
    const discGeo = new THREE.CylinderGeometry(dims.rimRadius * 0.7, dims.rimRadius * 0.7, 0.02, 20);
    const discMat = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.8, roughness: 0.3 });
    const disc = new THREE.Mesh(discGeo, discMat);
    disc.rotation.x = Math.PI / 2;
    wheelGroup.add(disc);

    // Brake caliper
    const caliperGeo = new THREE.BoxGeometry(0.16, 0.1, 0.08);
    const caliperMat = new THREE.MeshStandardMaterial({ color: 0x1C69D4, metalness: 0.6, roughness: 0.3 });
    const caliper = new THREE.Mesh(caliperGeo, caliperMat);
    caliper.position.set(0, dims.rimRadius * 0.6, 0);
    caliper.rotation.x = Math.PI / 2;
    caliper.rotation.z = 0.5;
    wheelGroup.add(caliper);

    car.add(wheelGroup);
  });

  // ─── EXHAUST PIPES ───────────────────────────────────────────
  if (!modelType.startsWith('electric') && !modelType.includes('i4') && !modelType.includes('ix')) {
    const exhaustCount = modelType.includes('m') || modelType.includes('sport') ? 4 : 2;
    const exhaustOffsets = exhaustCount === 4
      ? [-0.35, -0.18, 0.18, 0.35]
      : [-0.2, 0.2];

    exhaustOffsets.forEach((zOff) => {
      const exhGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.12, 12);
      const exhMat = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.9, roughness: 0.2 });
      const exh = new THREE.Mesh(exhGeo, exhMat);
      exh.rotation.z = Math.PI / 2;
      exh.position.set(-(dims.bodyLength * 0.5 + 0.06), dims.groundClearance + 0.1, zOff);
      car.add(exh);
    });
  }

  // ─── BMW LOGO (FRONT) ────────────────────────────────────────
  const logoRingGeo = new THREE.TorusGeometry(0.1, 0.02, 8, 24);
  const logoRing = new THREE.Mesh(logoRingGeo, chromeMat);
  logoRing.position.set(dims.bodyLength * 0.5 + 0.14, dims.groundClearance + dims.bodyHeight * 0.88, 0);
  logoRing.rotation.y = Math.PI / 2;
  car.add(logoRing);

  // BMW Logo quadrants
  const quadrantColors = [0x1C69D4, 0xffffff, 0x1C69D4, 0xffffff];
  for (let i = 0; i < 4; i++) {
    const qGeo = new THREE.CircleGeometry(0.07, 6, (i * Math.PI) / 2, Math.PI / 2);
    const qMat = new THREE.MeshStandardMaterial({ color: quadrantColors[i] });
    const q = new THREE.Mesh(qGeo, qMat);
    q.position.set(dims.bodyLength * 0.5 + 0.15, dims.groundClearance + dims.bodyHeight * 0.88, 0);
    q.rotation.y = Math.PI / 2;
    car.add(q);
  }

  // ─── SHADOWS ─────────────────────────────────────────────────
  car.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return car;
}

function getModelDimensions(modelType) {
  const base = {
    bodyLength: 4.4,
    bodyHeight: 0.7,
    bodyWidth: 1.8,
    groundClearance: 0.22,
    cabinHeight: 0.62,
    cabinY: 1.01,
    cabinOffset: -0.08,
    cabinLengthRatio: 0.50,
    wheelbase: 2.8,
    wheeltrack: 1.55,
    wheelRadius: 0.32,
    rimRadius: 0.22,
    wheelWidth: 0.22,
    windshieldAngle: 0.30,
    rearWindowAngle: 0.25,
  };

  switch (modelType) {
    case 'sedan-long':
      return {
        ...base,
        bodyLength: 5.0,
        bodyWidth: 1.9,
        cabinHeight: 0.68,
        cabinY: 1.04,
        cabinLengthRatio: 0.52,
        wheelbase: 3.1,
        wheelRadius: 0.36,
        rimRadius: 0.25,
        wheelWidth: 0.24,
        groundClearance: 0.20,
      };
    case 'sedan-sport':
    case 'coupe-sport':
      return {
        ...base,
        bodyLength: 4.5,
        bodyHeight: 0.68,
        cabinHeight: 0.58,
        cabinY: 0.98,
        cabinLengthRatio: 0.48,
        windshieldAngle: 0.38,
        rearWindowAngle: 0.35,
        wheelRadius: 0.34,
        rimRadius: 0.24,
        groundClearance: 0.18,
      };
    case 'coupe':
      return {
        ...base,
        bodyLength: 4.6,
        bodyHeight: 0.67,
        cabinHeight: 0.57,
        cabinY: 0.97,
        cabinLengthRatio: 0.46,
        windshieldAngle: 0.40,
        rearWindowAngle: 0.38,
        wheelRadius: 0.34,
        rimRadius: 0.24,
        groundClearance: 0.18,
      };
    case 'suv-compact':
      return {
        ...base,
        bodyLength: 4.6,
        bodyHeight: 0.85,
        bodyWidth: 1.88,
        groundClearance: 0.28,
        cabinHeight: 0.72,
        cabinY: 1.14,
        cabinLengthRatio: 0.62,
        cabinOffset: 0,
        wheelbase: 2.86,
        wheelRadius: 0.36,
        rimRadius: 0.25,
        wheelWidth: 0.26,
        windshieldAngle: 0.22,
        rearWindowAngle: 0.18,
      };
    case 'suv':
      return {
        ...base,
        bodyLength: 4.9,
        bodyHeight: 0.95,
        bodyWidth: 2.0,
        groundClearance: 0.3,
        cabinHeight: 0.78,
        cabinY: 1.24,
        cabinLengthRatio: 0.64,
        cabinOffset: 0,
        wheelbase: 2.98,
        wheelRadius: 0.38,
        rimRadius: 0.27,
        wheelWidth: 0.28,
        windshieldAngle: 0.20,
        rearWindowAngle: 0.16,
      };
    case 'suv-large':
      return {
        ...base,
        bodyLength: 5.15,
        bodyHeight: 1.02,
        bodyWidth: 2.1,
        groundClearance: 0.32,
        cabinHeight: 0.84,
        cabinY: 1.32,
        cabinLengthRatio: 0.66,
        cabinOffset: 0,
        wheelbase: 3.1,
        wheelRadius: 0.40,
        rimRadius: 0.28,
        wheelWidth: 0.30,
        windshieldAngle: 0.18,
        rearWindowAngle: 0.15,
      };
    default: // sedan
      return base;
  }
}

/**
 * Create a showroom floor / platform
 */
export function createShowroomFloor() {
  const group = new THREE.Group();

  // Main platform
  const platformGeo = new THREE.CylinderGeometry(3.8, 4.0, 0.08, 64);
  const platformMat = new THREE.MeshStandardMaterial({
    color: 0x1a1a1a,
    metalness: 0.7,
    roughness: 0.2,
    envMapIntensity: 1.0,
  });
  const platform = new THREE.Mesh(platformGeo, platformMat);
  platform.position.y = -0.04;
  platform.receiveShadow = true;
  group.add(platform);

  // Ring accent (glowing blue)
  const ringGeo = new THREE.TorusGeometry(3.8, 0.04, 8, 64);
  const ringMat = new THREE.MeshStandardMaterial({
    color: 0x1C69D4,
    emissive: 0x1C69D4,
    emissiveIntensity: 1.2,
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0;
  group.add(ring);

  // Inner ring
  const innerRingGeo = new THREE.TorusGeometry(2.2, 0.02, 8, 64);
  const innerRing = new THREE.Mesh(innerRingGeo, ringMat);
  innerRing.rotation.x = Math.PI / 2;
  innerRing.position.y = 0.01;
  group.add(innerRing);

  // Reflection plane
  const reflectGeo = new THREE.CircleGeometry(3.7, 64);
  const reflectMat = new THREE.MeshStandardMaterial({
    color: 0x111111,
    metalness: 0.9,
    roughness: 0.05,
    side: THREE.DoubleSide,
  });
  const reflect = new THREE.Mesh(reflectGeo, reflectMat);
  reflect.rotation.x = -Math.PI / 2;
  reflect.position.y = 0.001;
  reflect.receiveShadow = true;
  group.add(reflect);

  return group;
}

/**
 * Update car body color
 */
export function updateCarColor(car, colorHex) {
  car.traverse((child) => {
    if (child.isMesh) {
      if (
        child.material.metalness !== undefined &&
        child.material.roughness !== undefined &&
        child.material.color &&
        child.material !== null
      ) {
        // Only update the body paint (not glass, chrome, tires, etc.)
        const isBodyPaint =
          child.material.clearcoat !== undefined &&
          child.material.clearcoat > 0;
        const isBodyVariant =
          child.material.metalness > 0.4 &&
          child.material.metalness < 0.8 &&
          child.material.roughness < 0.4;

        if (isBodyPaint || isBodyVariant) {
          child.material.color.setHex(colorHex);
        }
      }
    }
  });
}