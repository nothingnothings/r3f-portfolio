import React, { useEffect } from 'react';

import gsap from 'gsap';
import { Html } from '@react-three/drei';

export default function AboutMe({ visible, UIRef }) {
  useEffect(() => {
    if (visible) {
      showPanel();
    } else {
      hidePanel();
    }
  }, [visible]);

  const showPanel = () => {
    gsap.to(UIRef.current, {
      opacity: 1,
      delay: 2.5,
      duration: 1.5,
      onStart: () => {
        UIRef.current.style.display = 'block';
      },
      onComplete: () => {
        UIRef.current.style.pointerEvents = 'all';
      },
    });
  };

  const hidePanel = () => {
    if (UIRef.current) {
      gsap.to(UIRef.current, {
        opacity: 0,
        duration: 1.5,
        onStart: () => {
          UIRef.current.style.pointerEvents = 'none';
        },
        onComplete: () => {
          UIRef.current.style.display = 'none';
        },
      });
    }
  };

  return (
    <Html visible={visible} ref={UIRef} style={{ opacity: 0 }}>
      <div className="mt-5 row d-flex justify-content-between align-items-center">
        <div className="d-none d-md-block col-md-5">
          <img src="" alt="image" className="img-fluid about-img" />
        </div>
        <div className="px-4 mx-auto text-justify px-md-5 col-md-7 about-description">
          <p className="lead">
            My name is <mark>Arthur Panazolo.</mark> I am a Full Stack Web
            Developer passionate about creating fast, responsive, and visually
            appealing web applications.
          </p>
          <p className="lead">
            With years of experience in the industry, I enjoy the challenge of
            turning ideas into functional, beautiful websites. I focus on
            practical solutions that meet real user needs.
          </p>
          <p className="lead">
            Check out the Work section below to see what I’ve been up to lately.
          </p>
        </div>
      </div>
    </Html>
  );
}
