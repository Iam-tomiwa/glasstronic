"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  MeshTransmissionMaterial,
  Float,
  Environment,
  Edges,
} from "@react-three/drei"
import * as THREE from "three"

function Cube() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3.2, 3.2, 3.2]} />
      <MeshTransmissionMaterial
        transmission={1}
        ior={1.5}
        thickness={3}
        samples={16}
        resolution={512}
        roughness={0}
        clearcoat={1}
        clearcoatRoughness={0}
        chromaticAberration={0.04}
        anisotropy={0.1}
        attenuationDistance={6}
        attenuationColor="#f0f8ff"
        color="#ffffff"
        distortion={0}
        distortionScale={0}
        temporalDistortion={0}
        envMapIntensity={1.2}
      />
      <Edges threshold={15} color="#a0c0d0" />
    </mesh>
  )
}

export default function GlassCube() {
  return (
    <div className="h-[400px] w-full md:h-[500px]">
      <Canvas
        camera={{ position: [0, 1.5, 8], fov: 35 }}
        gl={{ alpha: true, antialias: true }}
      >
        <color attach="background" args={["#ffffff"]} />
        <Environment preset="studio" />
        <directionalLight position={[5, 8, 5]} intensity={1.5} />
        <directionalLight position={[-5, -4, -3]} intensity={0.6} />
        <Float speed={2} rotationIntensity={0} floatIntensity={0.15}>
          <Cube />
        </Float>
      </Canvas>
    </div>
  )
}
