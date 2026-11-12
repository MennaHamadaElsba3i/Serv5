import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function SculpturalWorld3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 24);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // =========================================================================
    // LIGHTING: LUMINOUS DAYLIGHT & SOFT ICE-BLUE ARCHITECTURAL AMBIENCE
    // =========================================================================
    const ambientLight = new THREE.AmbientLight(0xf0f7ff, 2.2);
    scene.add(ambientLight);

    // Cool Ice-White Key Light
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(12, 18, 14);
    scene.add(keyLight);

    // Electric Ice-Blue Rim Accent Light
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 2.2);
    rimLight.position.set(-14, -8, 8);
    scene.add(rimLight);

    // Soft Pure Off-White Overhead Dome Light
    const domeLight = new THREE.PointLight(0xffffff, 1.5, 60);
    domeLight.position.set(0, 20, 10);
    scene.add(domeLight);

    // =========================================================================
    // MATERIALS: BRIGHT PEARL WHITE, CRYSTALLINE ICE BLUE & SLATE ACCENTS
    // (NO S/5 SCULPTURE — THE 3D ROBOT MASCOT IS NOW THE PRIMARY HERO FIGURE)
    // =========================================================================
    const crystallineIceMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x93c5fd,
      roughness: 0.08,
      metalness: 0.1,
      transmission: 0.88,
      thickness: 0.6,
      ior: 1.45,
      transparent: true,
      opacity: 0.75,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05
    });

    const pearlWhiteMaterial = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.25,
      metalness: 0.45
    });

    const azureAccentMaterial = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      roughness: 0.22,
      metalness: 0.75
    });
    const navyAccentMaterial = azureAccentMaterial;

    const brushedPlatinumMaterial = new THREE.MeshStandardMaterial({
      color: 0x94a3b8, // Crisp slate silver
      roughness: 0.35,
      metalness: 0.85
    });

    const alabasterMatteMaterial = pearlWhiteMaterial;

    const brushedSilverMaterial = new THREE.MeshStandardMaterial({
      color: 0xdbeafe, // Soft ice-silver
      roughness: 0.22,
      metalness: 0.90
    });
    const chromeSilverMaterial = brushedSilverMaterial;

    // =========================================================================
    // 1. HERO SECTION BACKGROUND: PURE LIGHT & AIRBORNE ATMOSPHERE
    // (Old S/5 Sculpture REMOVED — The 3D Robot Mascot is the primary Hero figure)
    // =========================================================================

    // =========================================================================
    // 3. SERVICES & PRODUCTS: SURREAL ARCHITECTURAL FACETS
    // =========================================================================
    const servicesSculptureGroup = new THREE.Group();
    servicesSculptureGroup.position.set(6.8, -19.0, -1);
    scene.add(servicesSculptureGroup);

    // Monumental Octahedron / Crystal Form (Deep Navy)
    const crystalGeo = new THREE.OctahedronGeometry(2.4, 0);
    const crystal = new THREE.Mesh(crystalGeo, navyAccentMaterial);
    servicesSculptureGroup.add(crystal);

    // Surrounding Graphite Ribbon
    const ribbonGeo = new THREE.TorusGeometry(3.8, 0.12, 16, 100);
    const ribbon = new THREE.Mesh(ribbonGeo, brushedPlatinumMaterial);
    ribbon.rotation.x = Math.PI / 3;
    ribbon.rotation.y = -Math.PI / 5;
    servicesSculptureGroup.add(ribbon);

    // Floating Alabaster Platonic Solid
    const platonicGeo = new THREE.IcosahedronGeometry(1.1, 0);
    const platonic = new THREE.Mesh(platonicGeo, alabasterMatteMaterial);
    platonic.position.set(-3.2, 2.2, 1.5);
    servicesSculptureGroup.add(platonic);

    // =========================================================================
    // 4. PORTFOLIO & WHY SERV5: MONUMENTAL SURREAL PORTAL ARCHES
    // =========================================================================
    const portalSculptureGroup = new THREE.Group();
    portalSculptureGroup.position.set(-6.0, -31.0, -2);
    scene.add(portalSculptureGroup);

    // Twin Intersecting Architectural Arches (Platinum Silver & Graphite)
    const arch1Geo = new THREE.TorusGeometry(4.0, 0.32, 24, 80, Math.PI * 1.1);
    const arch1 = new THREE.Mesh(arch1Geo, brushedSilverMaterial);
    arch1.rotation.y = Math.PI / 3;
    portalSculptureGroup.add(arch1);

    const arch2Geo = new THREE.TorusGeometry(3.4, 0.28, 24, 80, Math.PI * 1.1);
    const arch2 = new THREE.Mesh(arch2Geo, brushedPlatinumMaterial);
    arch2.rotation.y = -Math.PI / 4;
    arch2.rotation.z = Math.PI / 6;
    portalSculptureGroup.add(arch2);

    // Suspended Disc (Deep Navy)
    const discGeo = new THREE.CylinderGeometry(1.8, 1.8, 0.15, 48);
    const disc = new THREE.Mesh(discGeo, navyAccentMaterial);
    disc.position.set(2.0, -1.5, 1.0);
    disc.rotation.x = Math.PI / 3.5;
    portalSculptureGroup.add(disc);

    // =========================================================================
    // SUBTLE ATMOSPHERIC AIRBORNE DUST PARTICLES (Ice Blue Depth)
    // =========================================================================
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 40;
      particlePositions[i + 1] = -Math.random() * 55 + 5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 30;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x60a5fa, // Soft Ice Blue
      size: 0.14,
      transparent: true,
      opacity: 0.28
    });
    const dustParticles = new THREE.Points(particleGeo, particleMat);
    scene.add(dustParticles);

    // =========================================================================
    // MOUSE PARALLAX & SCROLL INTERACTION
    // =========================================================================
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    let scrollProgress = 0;
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        scrollProgress = Math.min(1, Math.max(0, window.pageYOffset / maxScroll));
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      updateResponsivePosition();
    };
    window.addEventListener('resize', onResize);

    // =========================================================================
    // ANIMATION LOOP: SLOW, CINEMATIC, DELIBERATE SCULPTURAL ROTATIONS
    // =========================================================================
    let clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse interpolation (Damped, gentle)
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      // (S/5 Sculpture has been replaced by the 3D Robot Mascot)
      // 3. Services Crystal slow majestic rotation
      crystal.rotation.x = -elapsed * 0.14;
      crystal.rotation.y = elapsed * 0.18;
      ribbon.rotation.z = elapsed * 0.08;
      platonic.rotation.y = -elapsed * 0.2;

      // 4. Portal arches subtle parallax
      arch1.rotation.y = Math.PI / 3 + Math.sin(elapsed * 0.4) * 0.1;
      arch2.rotation.z = Math.PI / 6 + Math.cos(elapsed * 0.45) * 0.1;
      disc.rotation.y = elapsed * 0.08;

      // Camera vertical tracking mapped gracefully to page scroll
      // Max scroll drops camera down 44 units along the vertical gallery
      const targetCameraY = -scrollProgress * 44 - (mouseY * 0.6);
      const targetCameraX = mouseX * 1.0;
      camera.position.y += (targetCameraY - camera.position.y) * 0.06;
      camera.position.x += (targetCameraX - camera.position.x) * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="sculptural-world-3d-canvas"
      aria-hidden="true"
    />
  );
}

