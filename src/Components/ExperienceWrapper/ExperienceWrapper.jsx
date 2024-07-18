// * LIBRARIES
import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, ContactShadows } from '@react-three/drei';
import { Leva } from 'leva';

// * COMPONENTS
import Experience from '../../Experience';
import { interpolateFunc, backgroundSetter } from '../../Utils/utils';

const ExperienceWrapper = () => {
  useEffect(() => {
    backgroundSetter();
  }, []);

  return (
    <>
      <Leva collapsed hidden />
      <Canvas
        camera={{
          fov: 60,
          near: 0.1,
          far: 100,
        }}
      >
        <Bounds interpolateFunc={interpolateFunc}>
          <Experience />
        </Bounds>
        <ContactShadows
          opacity={0.35}
          scale={7.5}
          blur={1.2}
          color={'#001933'}
          position={[0, -0.9, 0]}
        />
      </Canvas>
    </>
  );
};

export default ExperienceWrapper;
