"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

// Planet component props
interface PlanetProps {
    position: [number, number, number];
    size: number;
    color: string;
    rotationSpeed: number;
    orbitSpeed: number;
    orbitRadius: number;
    hasRing?: boolean;
    texture?: string;
}

function Planet({
    position,
    size,
    color,
    rotationSpeed,
    orbitSpeed,
    orbitRadius,
    hasRing = false,
    texture,
}: PlanetProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const groupRef = useRef<THREE.Group>(null);
    const ringRef = useRef<THREE.Mesh>(null);
    const [pulse, setPulse] = useState(1);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += rotationSpeed * 0.5;
            meshRef.current.rotation.y += rotationSpeed;
            meshRef.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 2) * 0.05);
        }
        if (groupRef.current) {
            groupRef.current.rotation.y += orbitSpeed;
        }
        if (ringRef.current && hasRing) {
            ringRef.current.rotation.x = Math.PI / 2;
            ringRef.current.rotation.z += 0.002;
        }
        setPulse(1 + Math.sin(clock.getElapsedTime() * 3) * 0.1);
    });

    const textureMap = texture ? useLoader(THREE.TextureLoader, texture) : null;

    return (
        <group ref={groupRef}>
            <mesh ref={meshRef} position={[orbitRadius, 0, 0]}>
                <sphereGeometry args={[size, 64, 64]} />
                <meshStandardMaterial
                    map={textureMap}
                    color={texture ? undefined : color}
                    emissive={color}
                    emissiveIntensity={0.3 * pulse}
                    roughness={0.4}
                    metalness={0.2}
                />
                <pointLight intensity={0.2} distance={size * 5} color={color} />
            </mesh>
            {hasRing && (
                <mesh ref={ringRef} position={[orbitRadius, 0, 0]}>
                    <ringGeometry args={[size * 1.2, size * 1.8, 64]} />
                    <meshStandardMaterial
                        color="#cccccc"
                        transparent
                        opacity={0.5}
                        side={THREE.DoubleSide}
                    />
                </mesh>
            )}
        </group>
    );
}

function CentralStar() {
    const meshRef = useRef<THREE.Mesh>(null);
    const [pulse, setPulse] = useState(1);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.003;
            meshRef.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime()) * 0.1);
        }
        setPulse(1 + Math.sin(clock.getElapsedTime() * 2) * 0.15);
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial
                color="#ff6b35"
                emissive="#ff6b35"
                emissiveIntensity={0.7 * pulse}
                roughness={0.1}
                metalness={0.1}
            />
            <pointLight intensity={3} distance={50} color="#ff6b35" />
        </mesh>
    );
}

interface OrbitRingProps {
    radius: number;
}

function OrbitRing({ radius }: OrbitRingProps) {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
        const angle = (i / 64) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }

    return (
        <group>
            <line>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={points.length}
                        array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial color="#4fb3ff" opacity={0.4} transparent linewidth={2} />
            </line>
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={points.length}
                        array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial size={0.05} color="#4fb3ff" transparent opacity={0.6} />
            </points>
        </group>
    );
}

export default function SolarSystem(): JSX.Element {
    const [orbitSpeed, setOrbitSpeed] = useState<number>(0.01);
    const [showOrbits, setShowOrbits] = useState<boolean>(true);
    const [showStars, setShowStars] = useState<boolean>(true);

    return (
        <div className="relative h-screen w-screen bg-gradient-to-b from-black to-gray-900">
            <div className="absolute top-4 left-4 z-10 bg-gray-800 bg-opacity-80 p-4 rounded-lg text-white space-y-4 max-w-xs">
                <h2 className="text-lg font-bold">Solar System Controls</h2>
                <div>
                    <label className="block">Orbit Speed: {(orbitSpeed * 100).toFixed(0)}%</label>
                    <input
                        type="range"
                        min="0"
                        max="0.02"
                        step="0.001"
                        value={orbitSpeed}
                        onChange={(e) => setOrbitSpeed(parseFloat(e.target.value))}
                        className="w-full"
                    />
                </div>
                <div>
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={showOrbits}
                            onChange={() => setShowOrbits(!showOrbits)}
                        />
                        <span>Show Orbit Paths</span>
                    </label>
                </div>
                <div>
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={showStars}
                            onChange={() => setShowStars(!showStars)}
                        />
                        <span>Show Starfield</span>
                    </label>
                </div>
            </div>
            <Canvas camera={{ position: [0, 8, 15], fov: 60 }}>
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={0.8} />
                {showStars && <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />}
                <CentralStar />
                {showOrbits && [3, 5, 7, 9].map((radius) => (
                    <OrbitRing key={radius} radius={radius} />
                ))}
                <Planet
                    position={[3, 0, 0]}
                    size={0.3}
                    color="#4fb3ff"
                    rotationSpeed={0.02}
                    orbitSpeed={orbitSpeed}
                    orbitRadius={3}
                    hasRing={false}
                    texture="https://i.imgur.com/8fJ8X1t.jpg"
                />
                <Planet
                    position={[5, 0, 0]}
                    size={0.4}
                    color="#ff6b35"
                    rotationSpeed={0.015}
                    orbitSpeed={orbitSpeed * 0.8}
                    orbitRadius={5}
                    hasRing={true}
                    texture="https://i.imgur.com/2rX1J9Z.jpg"
                />
                <Planet
                    position={[7, 0, 0]}
                    size={0.45}
                    color="#9b59b6"
                    rotationSpeed={0.01}
                    orbitSpeed={orbitSpeed * 0.6}
                    orbitRadius={7}
                    hasRing={false}
                    texture="https://i.imgur.com/5z1W2V3.jpg"
                />
                <Planet
                    position={[9, 0, 0]}
                    size={0.35}
                    color="#2ecc71"
                    rotationSpeed={0.025}
                    orbitSpeed={orbitSpeed * 0.4}
                    orbitRadius={9}
                    hasRing={true}
                    texture="https://i.imgur.com/7k12Q2w.jpg"
                />
                <OrbitControls
                    enablePan={false}
                    enableZoom={true}
                    minDistance={5}
                    maxDistance={20}
                    autoRotate
                    autoRotateSpeed={0.3}
                    maxPolarAngle={Math.PI / 1.8}
                    minPolarAngle={Math.PI / 2.2}
                />
            </Canvas>
        </div>
    );
}