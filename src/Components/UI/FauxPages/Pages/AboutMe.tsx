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
      onComplete: () => {
        htmlElement!.style.pointerEvents = 'all';
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
        <div className="text-center text-white pt-5 mt-5">
          <h1>About Me</h1>
        </div>
        <div className="container mt-4 pt-sm-4 text-white">
          <div className="d-flex flex-column align-items-center">
            <div className="col-6 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center">
              <div className="">
                <img
                  src="https://via.placeholder.com/400x400"
                  alt="client-image"
                  className="img-fluid"
                ></img>
              </div>
            </div>
            <div className="col-6 d-flex flex-column align-content-between client-info-col mt-5 pt-3 ml-lg-5">
              <div className="">
                {/* <h4 className="client-quote__line">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid optio doloribus maiores mollitia quaerat libero ut
                  odio rerum et id?
                </h4> */}
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
                  <strong style={{ color: '#ffff01' }}>Projects</strong> section
                  below to see what I’ve been up to lately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Html>
  );
}
