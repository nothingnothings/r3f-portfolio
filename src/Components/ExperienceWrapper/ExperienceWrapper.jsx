// * LIBRARIES
import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, ContactShadows } from '@react-three/drei';
import { Leva } from 'leva';

// * COMPONENTS
import Experience from '../../Experience';
import { interpolateFunc, backgroundSetter } from '../../Utils/utils';
import useNotebook from '../../store/useNotebook';
import PageButtonsHub from '../UI/Buttons/PageButtonsHub';

const ExperienceWrapper = () => {
  const isFinishedBooting = useNotebook((state) => state.isFinishedBooting);
  const isPoweredOn = useNotebook((state) => state.isPoweredOn);

  useEffect(() => {
    backgroundSetter();
  }, []);

  return (
    <>
      <Leva collapsed />
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

      {isPoweredOn && isFinishedBooting && <PageButtonsHub />}
    </>
  );
};

export default ExperienceWrapper;
