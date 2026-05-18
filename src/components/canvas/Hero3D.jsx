import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Float, Stars, Box, Cylinder } from '@react-three/drei';

const AnimatedShape = () => {
  const outerHexRef = useRef();
  const innerCubeRef = useRef();
  
  useFrame((state, delta) => {
    if (outerHexRef.current) {
      outerHexRef.current.rotation.y += delta * 0.3;
      outerHexRef.current.rotation.z += delta * 0.1;
    }
    if (innerCubeRef.current) {
      innerCubeRef.current.rotation.x -= delta * 0.4;
      innerCubeRef.current.rotation.y -= delta * 0.3;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <group>
          {/* Inner Solid Cube */}
          <Box ref={innerCubeRef} args={[1.4, 1.4, 1.4]}>
            <meshStandardMaterial
              color="#3b82f6"
              emissive="#1d4ed8"
              emissiveIntensity={0.6}
              roughness={0.1}
              metalness={0.9}
            />
          </Box>
          
          {/* Outer Hexagonal Prism (Wireframe) */}
          <Cylinder ref={outerHexRef} args={[2, 2, 2.5, 6]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#0891b2"
              emissiveIntensity={1}
              wireframe={true}
              transparent
              opacity={0.8}
            />
          </Cylinder>
        </group>
      </Float>
      
      {/* Floating Accent Spheres */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={3}>
        <Sphere args={[0.3, 32, 32]} position={[-3, 1.5, -1]}>
          <meshStandardMaterial color="#8b5cf6" emissive="#6d28d9" emissiveIntensity={0.8} />
        </Sphere>
      </Float>
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <Sphere args={[0.2, 32, 32]} position={[3, -1.5, 1]}>
          <meshStandardMaterial color="#06b6d4" emissive="#0891b2" emissiveIntensity={0.8} />
        </Sphere>
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
        
        <AnimatedShape />
        
        <Stars radius={50} depth={50} count={3000} factor={3} saturation={0.5} fade speed={1} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={1.5}
          maxPolarAngle={Math.PI / 2 + 0.3}
          minPolarAngle={Math.PI / 2 - 0.3}
        />
      </Canvas>
    </div>
  );
};

export default Hero3D;
