// * LIBRARIES
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, ContactShadows } from '@react-three/drei';
import { Leva } from 'leva';

// * COMPONENTS
import Experience from '../../Experience';
import AboutMe from '../UI/FauxPages/Pages/AboutMe';
import Skills from '../UI/FauxPages/Pages/Skills';
import { interpolateFunc, backgroundSetter } from '../../Utils/utils';
import useNotebook from '../../store/useNotebook';

const ExperienceWrapper = () => {
  const currentPage = useNotebook((state) => state.experiencePage);

  const nextPage = (page) => useNotebook((state) => state.nextPage(page));
  const prevPage = (page) => useNotebook((state) => state.prevPage(page));

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
          {/* <Experience /> */}
          {currentPage === 0 && (
            <Experience onPageNext={nextPage} />
          )}
          {currentPage === 1 && (
            <AboutMe
              onPageNext={nextPage}
              onPagePrev={prevPage}
            />
          )}
          {currentPage === 2 && (
            <Skills onPagePrev={prevPage} />
          )}
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
