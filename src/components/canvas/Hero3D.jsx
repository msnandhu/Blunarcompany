import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Icosahedron, MeshDistortMaterial, Float, Stars, Wireframe } from '@react-three/drei';
import { useRef } from 'react';

const PremiumCrystal = () => {
  const outerRef = useRef();
  const innerRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (outerRef.current) {
      outerRef.current.rotation.y = t * 0.2;
      outerRef.current.rotation.z = t * 0.1;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.3;
      innerRef.current.rotation.x = t * 0.2;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        {/* Outer Wireframe Crystal */}
        <Icosahedron ref={outerRef} args={[1.8, 1]} scale={1}>
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#0891b2"
            emissiveIntensity={0.5}
            wireframe={true}
            transparent
            opacity={0.3}
          />
        </Icosahedron>
        
        {/* Inner Solid/Distorted Crystal Core */}
        <Icosahedron ref={innerRef} args={[1.2, 2]} scale={1}>
          <MeshDistortMaterial
            color="#3b82f6"
            emissive="#1d4ed8"
            emissiveIntensity={0.8}
            distort={0.2}
            speed={2}
            roughness={0.1}
            metalness={1}
            wireframe={false}
            transparent
            opacity={0.9}
          />
        </Icosahedron>
      </Float>
    </group>
  );
};

const Hero3D = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative z-20 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} color="#8b5cf6" intensity={2} />
        <pointLight position={[10, -10, 5]} color="#06b6d4" intensity={2} />
        
        <PremiumCrystal />
        
        <Stars radius={50} depth={50} count={2000} factor={3} saturation={0.5} fade speed={1} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={1.5}
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 2 - 0.2}
        />
      </Canvas>
    </div>
  );
};

export default Hero3D;
