import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { Line2 } from "three/examples/jsm/lines/Line2.js";

const PolygonNetworkBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ==================== SCENE SETUP ====================
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0802, 0.025);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.set(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setClearColor(0x0a0802, 1);
    container.appendChild(renderer.domElement);

    // ==================== STAR FIELD PARTICLES ====================
    // Subtle floating stars instead of particles
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 300;
    const starPositions = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 300;
      starPositions[i + 1] = (Math.random() - 0.5) * 300;
      starPositions[i + 2] = (Math.random() - 0.5) * 300;
      starSizes[i / 3] = Math.random() * 2 + 0.5;
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );
    starGeometry.setAttribute("size", new THREE.BufferAttribute(starSizes, 1));

    const starMaterial = new THREE.PointsMaterial({
      size: 1.5,
      sizeAttenuation: true,
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
      fog: false,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // ==================== POLYGONAL MESH ====================
    const baseGeometry = new THREE.SphereGeometry(35, 10, 2, 3, Math.PI * 2, 0.5, 1.5);
    const posAttribute = baseGeometry.getAttribute("position");
    const vertex = new THREE.Vector3();

    for (let i = 0; i < posAttribute.count; i++) {
      vertex.fromBufferAttribute(posAttribute, i);
      const distortion = 1 + (Math.random() - 0.5) * 0.8;
      vertex.multiplyScalar(distortion);
      vertex.x += (Math.random() - 0.5) * 3;
      vertex.y += (Math.random() - 0.5) * 3;
      vertex.z += (Math.random() - 0.5) * 3;
      posAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }
    baseGeometry.computeVertexNormals();

    // Wireframe with enhanced glow
    const wireframeGeo = new THREE.WireframeGeometry(baseGeometry);
    const lineGeometry = new LineSegmentsGeometry();
    lineGeometry.fromWireframeGeometry(wireframeGeo);

    const lineMaterial = new LineMaterial({
      color: 0xd4af37,
      linewidth: 2,
      transparent: true,
      opacity: 0.35,
      resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
      fog: false,
    });

    const wireMesh = new Line2(lineGeometry, lineMaterial);
    wireMesh.rotation.x = -Math.PI / 1.8;

    // ==================== TUNNEL SYSTEM ====================
    const tunnelMeshes = [];
    const TUNNEL_LENGTH = 35;
    const MESH_COUNT = 4;

    for (let i = -Math.floor(MESH_COUNT / 2); i < Math.ceil(MESH_COUNT / 2); i++) {
      const clone = wireMesh.clone();
      clone.position.z = i * TUNNEL_LENGTH;
      scene.add(clone);
      tunnelMeshes.push(clone);
    }

    // ==================== SCROLL PHYSICS ====================
    const updateCameraOnScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrollCurrent = window.scrollY;
      let scrollFraction = scrollCurrent / scrollTotal;
      scrollFraction = Math.min(Math.max(scrollFraction, 0), 1);

      const zOffset = scrollFraction * 120;
      camera.position.z = zOffset;
      scene.fog.density = 0.035 - scrollFraction * 0.03;
    };

    window.addEventListener("scroll", updateCameraOnScroll, { passive: true });

    // ==================== ANIMATION LOOP ====================
    let animationFrameId;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.016; // ~60fps

      // Subtle star twinkling
      const starSizesArray = starGeometry.attributes.size.array;
      for (let i = 0; i < starCount; i++) {
        starSizesArray[i] = (Math.random() * 2 + 0.5) * (0.8 + 0.2 * Math.sin(time * 2 + i * 0.5));
      }
      starGeometry.attributes.size.needsUpdate = true;

      // Tunnel mesh rotation
      tunnelMeshes.forEach((m) => {
        m.rotation.y += 0.0015;

        if (camera.position.z - m.position.z > TUNNEL_LENGTH * 0.6) {
          m.position.z += TUNNEL_LENGTH * MESH_COUNT;
        }

        if (m.position.z - camera.position.z > TUNNEL_LENGTH * 0.6) {
          m.position.z -= TUNNEL_LENGTH * MESH_COUNT;
        }
      });

      renderer.render(scene, camera);
    };

    animate();
    updateCameraOnScroll();

    // ==================== RESIZE HANDLER ====================
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      lineMaterial.resolution.set(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // ==================== CLEANUP ====================
    return () => {
      window.removeEventListener("scroll", updateCameraOnScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      container.removeChild(renderer.domElement);
      baseGeometry.dispose();
      wireframeGeo.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-20" />
  );
};

export default PolygonNetworkBackground;
