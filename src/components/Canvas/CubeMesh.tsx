import {memo, useRef} from 'react'
import {useFrame} from '@react-three/fiber'
import {Mesh} from 'three'

function Component({emissiveIntensity, position}: {emissiveIntensity: number; position: number[]}) {
  const ref = useRef<Mesh>(null)
  useFrame(({clock}) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime()
      ref.current.rotation.y = clock.getElapsedTime()
    }
  })
  return (
    <mesh ref={ref} position={[position[0], position[1], position[2]]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={0xfeca6f}
        emissive={0xfeca6f}
        emissiveIntensity={emissiveIntensity}
        roughness={0}
      />
    </mesh>
  )
}

const CubeMesh = memo(Component)
export default CubeMesh
