// // src/components/PolygonNetworkBackground.jsx
// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry.js";
// import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
// import { Line2 } from "three/examples/jsm/lines/Line2.js";

// const PolygonNetworkBackground = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const scene = new THREE.Scene();
//     scene.fog = new THREE.FogExp2(0x0a0802, 0.025);

//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );

//     camera.position.set(0, 0, 0);

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(window.devicePixelRatio || 1);
//     renderer.setClearColor(0x0a0802, 1);
//     container.appendChild(renderer.domElement);

//     let baseGeometry = new THREE.SphereGeometry(
//       80,
//       15,
//       15,
//       1,
//       Math.PI * 2,
//       0,
//       2.5
//     );

//     const posAttribute = baseGeometry.getAttribute("position");
//     const vertex = new THREE.Vector3();

//     for (let i = 0; i < posAttribute.count; i++) {
//       vertex.fromBufferAttribute(posAttribute, i);

//       // Explosion: random radius distortion
//       const distortion = 1 + (Math.random() - 0.5) * 0.8;
//       vertex.multiplyScalar(distortion);

//       // Extra jitter
//       vertex.x += (Math.random() - 0.5) * 3;
//       vertex.y += (Math.random() - 0.5) * 3;
//       vertex.z += (Math.random() - 0.5) * 3;

//       posAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
//     }

//     baseGeometry.computeVertexNormals();

//     // Convert to fat line wireframe
//     const wireframeGeo = new THREE.WireframeGeometry(baseGeometry);
//     const lineGeometry = new LineSegmentsGeometry();
//     lineGeometry.fromWireframeGeometry(wireframeGeo);

//     const lineMaterial = new LineMaterial({
//       color: 0xdddddd,
//       linewidth: 2, // in pixels
//       transparent: true,
//       opacity: 0.2,
//       resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
//     });

//     const mesh = new Line2(lineGeometry, lineMaterial);
//     // Rotate so the "hole" looks towards camera
//     mesh.rotation.x = -Math.PI / 1.8;
//     // scene.add(mesh);

//     // Pool of endless meshes
//     const tunnelMeshes = [];
//     const TUNNEL_LENGTH = 65; // distance between clones
//     const MESH_COUNT = 1; // increase for smoother infinite effect

//     for (let i = 0; i < MESH_COUNT; i++) {
//       const clone = mesh.clone();
//       clone.position.z = -i * TUNNEL_LENGTH;
//       scene.add(clone);
//       tunnelMeshes.push(clone);
//     }

//     // --- PARTICLES (stardust) ---
//     // const particlesGeometry = new THREE.BufferGeometry();
//     // const particlesCount = 350;
//     // const posArray = new Float32Array(particlesCount * 3);

//     // for (let i = 0; i < particlesCount * 3; i += 3) {
//     //   posArray[i] = (Math.random() - 0.5) * 100;
//     //   posArray[i + 1] = (Math.random() - 0.5) * 100;
//     //   posArray[i + 2] = (Math.random() - 0.5) * 100;
//     // }
//     // particlesGeometry.setAttribute(
//     //   "position",
//     //   new THREE.BufferAttribute(posArray, 3)
//     // );

//     // const particlesMaterial = new THREE.PointsMaterial({
//     //   size: 1.2,
//     //   map: createGlowTexture(),
//     //   transparent: true,
//     //   opacity: 0.9,
//     //   color: 0xffd700,
//     //   blending: THREE.AdditiveBlending,
//     //   depthWrite: false,
//     // });

//     // const particlesMesh = new THREE.Points(
//     //   particlesGeometry,
//     //   particlesMaterial
//     // );
//     // scene.add(particlesMesh);

//     const updateCameraOnScroll = () => {
//       const scrollTotal =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const scrollCurrent = window.scrollY;
//       let scrollFraction = scrollTotal > 0 ? scrollCurrent / scrollTotal : 0;

//       scrollFraction = Math.min(Math.max(scrollFraction, 0), 1);

//       // Move camera from Z=0 (inside) to Z=60 (outside)
//       const zPosition = 0 + scrollFraction * 60;
//       camera.position.z = zPosition;

//       // Fog fades as you scroll out
//       scene.fog.density = 0.035 - scrollFraction * 0.03;

//       // Slight twist
//       mesh.rotation.z = scrollFraction * 1;
//     };

//     window.addEventListener("scroll", updateCameraOnScroll, { passive: true });

//     // --- RESIZE ---
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       lineMaterial.resolution.set(window.innerWidth, window.innerHeight);
//       updateCameraOnScroll();
//     };

//     window.addEventListener("resize", handleResize);

//     // --- ANIMATION LOOP ---
//     let animationFrameId;
//     const animate = () => {
//       animationFrameId = requestAnimationFrame(animate);

//       mesh.rotation.y += 0.0005;
//       //   particlesMesh.rotation.y -= 0.0005;

//       renderer.render(scene, camera);
//     };

//     updateCameraOnScroll();
//     animate();

//     // --- CLEANUP ---
//     return () => {
//       window.removeEventListener("scroll", updateCameraOnScroll);
//       window.removeEventListener("resize", handleResize);
//       cancelAnimationFrame(animationFrameId);

//       container.removeChild(renderer.domElement);

//       // dispose
//       baseGeometry.dispose();
//       wireframeGeo.dispose();
//       lineGeometry.dispose();
//       lineMaterial.dispose();
//       //   particlesGeometry.dispose();
//       //   particlesMaterial.dispose();
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="pointer-events-none fixed inset-0 -z-20"
//     />
//   );
// };

// export default PolygonNetworkBackground;



// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry.js";
// import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
// import { Line2 } from "three/examples/jsm/lines/Line2.js";

// const PolygonNetworkBackground = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const scene = new THREE.Scene();
//     scene.fog = new THREE.FogExp2(0x0a0802, 0.025);

//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.set(0, 0, 0);

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(window.devicePixelRatio || 1);
//     renderer.setClearColor(0x0a0802, 1);
//     container.appendChild(renderer.domElement);


//     const baseGeometry = new THREE.SphereGeometry(
//       40,
//       10,
//       15,
//       1,
//       Math.PI * 2,
//       0,
//       2.5
//     );

//     const posAttribute = baseGeometry.getAttribute("position");
//     const vertex = new THREE.Vector3();

//     for (let i = 0; i < posAttribute.count; i++) {
//       vertex.fromBufferAttribute(posAttribute, i);
//       const distortion = 1 + (Math.random() - 0.5) * 0.8;
//       vertex.multiplyScalar(distortion);
//       vertex.x += (Math.random() - 0.5) * 3;
//       vertex.y += (Math.random() - 0.5) * 3;
//       vertex.z += (Math.random() - 0.5) * 3;
//       posAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
//     }

//     baseGeometry.computeVertexNormals();

//     // Wireframe geometry
//     const wireframeGeo = new THREE.WireframeGeometry(baseGeometry);
//     const lineGeometry = new LineSegmentsGeometry();
//     lineGeometry.fromWireframeGeometry(wireframeGeo);

//     const lineMaterial = new LineMaterial({
//       color: 0xdddddd,
//       linewidth: 2,
//       transparent: true,
//       opacity: 0.25,
//       resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
//     });

//     const wireMesh = new Line2(lineGeometry, lineMaterial);
//     wireMesh.rotation.x = -Math.PI / 1.8;

//     // Glossy triangle panels (1 in every 3)
//     const glossyGeometry = baseGeometry.clone();
//     const indexArray = glossyGeometry.index.array;

//     for (let i = 0; i < indexArray.length; i += 9) {
//       indexArray[i + 3] = indexArray[i];
//       indexArray[i + 4] = indexArray[i];
//       indexArray[i + 5] = indexArray[i];
//     }

//     const glossyMaterial = new THREE.MeshPhysicalMaterial({
//       color: 0xffffff,
//       opacity: 0.58,
//       transparent: true,
//       roughness: 0.05,
//       metalness: 0.4,
//       clearcoat: 0.4,
//       clearcoatRoughness: 0.1,
//       side: THREE.DoubleSide,
//       blending: THREE.AdditiveBlending,
//     });

//     const glossyMesh = new THREE.Mesh(glossyGeometry, glossyMaterial);
//     glossyMesh.rotation.copy(wireMesh.rotation);

//     // Infinite tunnel cloning
//     const tunnelMeshes = [];
//     const TUNNEL_LENGTH = 45; 
//     const MESH_COUNT = 1; 

//     for (let i = 0; i < MESH_COUNT; i++) {
//       const group = new THREE.Group();
//       const wireClone = wireMesh.clone();
//       const glossyClone = glossyMesh.clone();
//       group.add(wireClone);
//       group.add(glossyClone);
//       group.position.z = -i * TUNNEL_LENGTH;
//       scene.add(group);
//       tunnelMeshes.push(group);
//     }

//     // Scroll logic
//     const updateCameraOnScroll = () => {
//       const scrollTotal =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const scrollCurrent = window.scrollY;
//       let scrollFraction = scrollTotal > 0 ? scrollCurrent / scrollTotal : 0;
//       scrollFraction = Math.min(Math.max(scrollFraction, 0), 1);

//       const zOffset = scrollFraction * 120;
//       camera.position.z = zOffset;

//       scene.fog.density = 0.035 - scrollFraction * 0.03;
//     };

//     window.addEventListener("scroll", updateCameraOnScroll, { passive: true });

//     // Resize support
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       lineMaterial.resolution.set(window.innerWidth, window.innerHeight);
//       updateCameraOnScroll();
//     };

//     window.addEventListener("resize", handleResize);

//     // Animation loop
//     let animationFrameId;
//     const animate = () => {
//       animationFrameId = requestAnimationFrame(animate);

//       tunnelMeshes.forEach((m) => {
//         m.rotation.y += 0.0005;

//         if (m.position.z - camera.position.z > TUNNEL_LENGTH * 0.5) {
//           m.position.z -= TUNNEL_LENGTH * MESH_COUNT;
//         }
//       });

//       renderer.render(scene, camera);
//     };

//     updateCameraOnScroll();
//     animate();

//     // Cleanup
//     return () => {
//       window.removeEventListener("scroll", updateCameraOnScroll);
//       window.removeEventListener("resize", handleResize);
//       cancelAnimationFrame(animationFrameId);
//       container.removeChild(renderer.domElement);
//       baseGeometry.dispose();
//       wireframeGeo.dispose();
//       lineGeometry.dispose();
//       lineMaterial.dispose();
//       glossyGeometry.dispose();
//       glossyMaterial.dispose();
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-20" />
//   );
// };

// export default PolygonNetworkBackground;


// src/components/PolygonNetworkBackground.jsx
// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry.js";
// import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
// import { Line2 } from "three/examples/jsm/lines/Line2.js";

// const PolygonNetworkBackground = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const scene = new THREE.Scene();
//     scene.fog = new THREE.FogExp2(0x0a0802, 0.025);

//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.set(0, 0, 0);

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(window.devicePixelRatio || 1);
//     renderer.setClearColor(0x0a0802, 1);
//     container.appendChild(renderer.domElement);

//     // Base distorted geometry
//     const baseGeometry = new THREE.SphereGeometry(
//       40,
//       10,
//       15,
//       1,
//       Math.PI * 2,
//       0,
//       2.5
//     );

//     const posAttribute = baseGeometry.getAttribute("position");
//     const vertex = new THREE.Vector3();

//     for (let i = 0; i < posAttribute.count; i++) {
//       vertex.fromBufferAttribute(posAttribute, i);
//       const distortion = 1 + (Math.random() - 0.5) * 0.8;
//       vertex.multiplyScalar(distortion);
//       vertex.x += (Math.random() - 0.5) * 3;
//       vertex.y += (Math.random() - 0.5) * 3;
//       vertex.z += (Math.random() - 0.5) * 3;
//       posAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
//     }

//     baseGeometry.computeVertexNormals();

//     // Wireframe geometry
//     const wireframeGeo = new THREE.WireframeGeometry(baseGeometry);
//     const lineGeometry = new LineSegmentsGeometry();
//     lineGeometry.fromWireframeGeometry(wireframeGeo);

//     const lineMaterial = new LineMaterial({
//       color: 0xdddddd,
//       linewidth: 2,
//       transparent: true,
//       opacity: 0.25,
//       resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
//     });

//     const wireMesh = new Line2(lineGeometry, lineMaterial);
//     wireMesh.rotation.x = -Math.PI / 1.8;

//     // Infinite tunnel cloning
//     const tunnelMeshes = [];
//     const TUNNEL_LENGTH = 45;
//     const MESH_COUNT = 1;

//     for (let i = 0; i < MESH_COUNT; i++) {
//       const wireClone = wireMesh.clone();
//       wireClone.position.z = -i * TUNNEL_LENGTH;
//       scene.add(wireClone);
//       tunnelMeshes.push(wireClone);
//     }

//     // Scroll logic
//     const updateCameraOnScroll = () => {
//       const scrollTotal =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const scrollCurrent = window.scrollY;
//       let scrollFraction = scrollTotal > 0 ? scrollCurrent / scrollTotal : 0;
//       scrollFraction = Math.min(Math.max(scrollFraction, 0), 1);

//       const zOffset = scrollFraction * 120;
//       camera.position.z = zOffset;

//       scene.fog.density = 0.035 - scrollFraction * 0.03;
//     };

//     window.addEventListener("scroll", updateCameraOnScroll, { passive: true });

//     // Resize support
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       lineMaterial.resolution.set(window.innerWidth, window.innerHeight);
//       updateCameraOnScroll();
//     };

//     window.addEventListener("resize", handleResize);

//     // Animation loop
//     let animationFrameId;
//     const animate = () => {
//       animationFrameId = requestAnimationFrame(animate);

//       tunnelMeshes.forEach((m) => {
//         m.rotation.y += 0.0005;

//         if (m.position.z - camera.position.z > TUNNEL_LENGTH * 0.5) {
//           m.position.z -= TUNNEL_LENGTH * MESH_COUNT;
//         }
//       });

//       renderer.render(scene, camera);
//     };

//     updateCameraOnScroll();
//     animate();

//     // Cleanup
//     return () => {
//       window.removeEventListener("scroll", updateCameraOnScroll);
//       window.removeEventListener("resize", handleResize);
//       cancelAnimationFrame(animationFrameId);
//       container.removeChild(renderer.domElement);
//       baseGeometry.dispose();
//       wireframeGeo.dispose();
//       lineGeometry.dispose();
//       lineMaterial.dispose();
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-20" />
//   );
// };

// export default PolygonNetworkBackground;


// src/components/PolygonNetworkBackground.jsx
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

    // Base distorted sphere geometry
    const baseGeometry = new THREE.SphereGeometry(
      35,
      10,
      2,
      3,
      Math.PI * 2,
      0.5,
      1.5
    );

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

    // Wireframe setup
    const wireframeGeo = new THREE.WireframeGeometry(baseGeometry);
    const lineGeometry = new LineSegmentsGeometry();
    lineGeometry.fromWireframeGeometry(wireframeGeo);

    const lineMaterial = new LineMaterial({
      color: 0xdddddd,
      linewidth: 1.5,
      transparent: true,
      opacity: 0.17,
      resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
    });

    const wireMesh = new Line2(lineGeometry, lineMaterial);
    wireMesh.rotation.x = -Math.PI / 1.8;

    // Infinite tunnel: Before + After camera
    const tunnelMeshes = [];
    const TUNNEL_LENGTH = 35;
    const MESH_COUNT = 4;

    for (let i = -Math.floor(MESH_COUNT / 2); i < Math.ceil(MESH_COUNT / 2); i++) {
      const clone = wireMesh.clone();
      clone.position.z = i * TUNNEL_LENGTH;
      scene.add(clone);
      tunnelMeshes.push(clone);
    }

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

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      tunnelMeshes.forEach((m) => {
        m.rotation.y += 0.0015;

        // User scrolling forward (down)
        if (camera.position.z - m.position.z > TUNNEL_LENGTH * 0.6) {
          m.position.z += TUNNEL_LENGTH * MESH_COUNT;
        }

        // User scrolling backward (up)
        if (m.position.z - camera.position.z > TUNNEL_LENGTH * 0.6) {
          m.position.z -= TUNNEL_LENGTH * MESH_COUNT;
        }
      });

      renderer.render(scene, camera);
    };

    animate();
    updateCameraOnScroll();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      lineMaterial.resolution.set(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", updateCameraOnScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      container.removeChild(renderer.domElement);
      baseGeometry.dispose();
      wireframeGeo.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-20" />
  );
};

export default PolygonNetworkBackground;
