// * LIBRARY IMPORTS
import { useEffect, useRef } from 'react';
import { Html } from '@react-three/drei';
import WordCloud from 'react-wordcloud';
import gsap from 'gsap';

// * CSS IMPORTS
import './fonts.css';

// * PARAMETERS
import { options, mobileOptions } from './parameters/options';
import { data, mobileData } from './parameters/words';

const words = data.map((w) => ({ text: w.key, value: w.value }));

const mobileWords = mobileData.map((w) => ({ text: w.key, value: w.value }));

// * MOBILE COMPATIBILITY
const minSize = [window.innerWidth + 1000, 300];

const mobileMinSize = [window.innerWidth + 1000, 180];

export default function WordCloudComponent({ isOpen, isPoweredOn, isMobile }) {
  // * WORD CLOUD REF
  const wordCloudHtmlRef = useRef();
  const wordCloudRef = useRef();

  useEffect(() => {
    if (isOpen && !isPoweredOn) {
      displayWords();
    } else {
      hideWords();
    }
  }, [isOpen, isPoweredOn]);

  // * WORD CLOUD METHODS
  const displayWords = () => {
    gsap.to(wordCloudHtmlRef.current.style, {
      duration: 3,
      delay: 1.2,
      opacity: 1,
    });

    gsap.to(wordCloudRef.current.style, {
      duration: 3,
      delay: 1.2,
      opacity: 1,
    });
  };

  const hideWords = () => {
    if (wordCloudHtmlRef.current) {
      gsap.to(wordCloudHtmlRef.current.style, {
        duration: 2,
        opacity: 0,
      });

      gsap.to(wordCloudRef.current.style, {
        duration: 2,
        opacity: 0,
      });
    }
  };

  return (
    <Html
      transform
      center
      position-z={isMobile ? -2500 : -2000}
      rotation-x={-0.25}
      position-y={isMobile ? -500 : -300}
      ref={wordCloudHtmlRef}
      scale={isMobile ? 65 : 175}
      style={{
        opacity: 0,
      }}
    >
      <div ref={wordCloudRef} style={{ opacity: 0 }}>
        <WordCloud
          words={isMobile ? mobileWords : words}
          options={isMobile ? mobileOptions : options}
          minSize={isMobile ? mobileMinSize : minSize}
        />
      </div>
    </Html>
  );
}
