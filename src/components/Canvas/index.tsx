import {memo, Suspense} from 'react'
import {CameraControls, Environment} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Bloom, EffectComposer} from '@react-three/postprocessing'
import CubeMesh from './CubeMesh'

function Component() {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Environment preset='sunset' background backgroundBlurriness={0.2} />
        <CubeMesh emissiveIntensity={0.0} position={[0, 0, 0]} />
        <CubeMesh emissiveIntensity={1} position={[2, 0, 0]} />
        <CameraControls />
      </Suspense>
      <EffectComposer>
        <Bloom luminanceThreshold={0.6} luminanceSmoothing={0.1} intensity={0.6} />
      </EffectComposer>
    </Canvas>
  )
}

const Scene = memo(Component)
export default Scene
