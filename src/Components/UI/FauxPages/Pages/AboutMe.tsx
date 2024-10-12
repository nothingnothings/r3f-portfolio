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
      <div className="clients mt-5 pt-5">
        <div className="text-center partners-clients-header text-uppercase text-white pt-5 mt-5">
          About Me
        </div>
        <div className="container mt-md-2 pt-md-5 pt-sm-4 text-white">
          <div className="d-flex flex-column align-items-center">
            <div className="col-6 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-end">
              <div className="client-image">
                <img
                  src="https://via.placeholder.com/532x467"
                  alt="client-image"
                  className="img-fluid"
                ></img>
              </div>
            </div>
            <div className="col-4 d-flex flex-column align-content-between client-info-col mt-5 pt-3 ml-lg-5">
              <div className="client-quote">
                <p className="client-quote__line text-justify text-md-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid optio doloribus maiores mollitia quaerat libero ut
                  odio rerum et id?
                </p>
              </div>
              <div className="client-description">
                <h5 className="client-name">Lorem Ipsum</h5>
                <h6 className="client-company">Renault LATAM</h6>
              </div>
              <div className="service-link d-flex client-link mt-lg-3">
                <a
                  className="service-link-line client-link-line text-nowrap"
                  href="./case.html"
                >
                  SAIBA MAIS
                </a>
                <div className="arrow-line client-arrow-line"></div>
                <div className="arrow ml-2 client-arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Html>
  );
}
