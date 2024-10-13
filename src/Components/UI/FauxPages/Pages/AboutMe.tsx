import React, { useEffect, useState } from 'react';

import gsap from 'gsap';
import { Html } from '@react-three/drei';

export default function AboutMe({ visible, UIRef }) {
  const [htmlElement, setHtmlElement] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    if (htmlElement && htmlElement.parentElement) {
      htmlElement.parentElement.style.pointerEvents = 'none';
    }
  }, [htmlElement]);

  useEffect(() => {
    if (visible) {
      showPanel();
    } else {
      hidePanel();
    }
  }, [visible]);

  const showPanel = () => {
    gsap.to(htmlElement, {
      opacity: 1,
      delay: 3.5,
      duration: 1.5,
      onStart: () => {
        htmlElement!.style.display = 'block';
      },
    });
  };

  const hidePanel = () => {
    if (UIRef.current) {
      gsap.to(htmlElement, {
        opacity: 0,
        duration: 1.5,
        onStart: () => {
          htmlElement!.style.pointerEvents = 'none';
        },
        onComplete: () => {
          htmlElement!.style.display = 'none';
        },
      });
    }
  };

  return (
    <Html
      visible={visible}
      ref={setHtmlElement}
      style={{ opacity: 0, pointerEvents: 'none' }}
      prepend
      transform
      position={[0, 1.8, 0]}
      rotation={[-Math.PI * 0.08, 0, 0]}
      scale={[0.2, 0.2, 0.2]}
    >
      <div className="mt-5 pt-5 titilium-web">
        <div className="container-fluid mt-5 pt-5 text-white">
          <div className="d-flex flex-column mt-5 align-items-center">
            <div className="d-flex col-4 justify-content-center">
              <div className="mt-3 pt-3">
                <img
                  // src="https://via.placeholder.com/400x400"
                  src="/images/arthur-panazolo.jpeg"
                  alt="client-image"
                  className="img-fluid rounded-circle rounded-image"
                ></img>
              </div>
            </div>
            <div className="d-flex col-6 flex-column align-content-between client-info-col mt-5">
              <div className="">
                <p className="lead" style={{ textAlign: 'justify' }}>
                  Hello, My name is{' '}
                  <strong style={{ color: '#ffff01' }}>Arthur Panazolo.</strong>{' '}
                  I am a Full Stack Web Developer passionate about creating
                  fast, responsive, and visually appealing web applications.
                </p>
                <p className="lead" style={{ textAlign: 'justify' }}>
                  With years of experience in the industry, I enjoy the
                  challenge of turning ideas into functional, beautiful
                  websites. I focus on practical solutions that meet real user
                  needs.
                </p>
                <p className="lead" style={{ textAlign: 'justify' }}>
                  Check out the{' '}
                  <strong style={{ color: '#ffff01' }}>Skills</strong> section
                  to see what I can help you with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Html>
  );
}
