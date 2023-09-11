import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export { DioramaWrapper }

function DioramaWrapper({ children }) {
  return (
    <Canvas shadows orthographic camera={{ position: [5, 5, -5], zoom: 40 }} frameloop="demand">
      <OrbitControls />
      <ambientLight intensity={1} />
      {children}
    </Canvas>
  )
}
