import { Canvas } from '@react-three/fiber'
import { Counter } from '/resources/components/Counter'
import { Experience } from '/resources/components/Experience'

export { Page }

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
        <Canvas shadows orthographic camera={{ position: [5, 5, -5], zoom: 40 }}>
          {/* <color attach="background" args={['#ececec']} /> */}
          <Experience />
        </Canvas>
        <Canvas shadows orthographic camera={{ position: [5, 5, -5], zoom: 40 }}>
          {/* <color attach="background" args={['#ececec']} /> */}
          <Experience />
        </Canvas>
        <Canvas shadows orthographic camera={{ position: [5, 5, -5], zoom: 40 }}>
          {/* <color attach="background" args={['#ececec']} /> */}
          <Experience />
        </Canvas>
      </div>
    </>
  )
}
