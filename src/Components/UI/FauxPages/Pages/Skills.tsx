import React, { useEffect, useState } from 'react';
import { Html } from '@react-three/drei';
import gsap from 'gsap';

export default function Skills({ visible, infoPagesVisited }) {
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
      delay: infoPagesVisited ? 2 : 3.5,
      duration: 1.5,
      onStart: () => {
        htmlElement!.style.display = 'block';
      },
    });
  };

  const hidePanel = () => {
    if (htmlElement) {
      gsap.to(htmlElement, {
        opacity: 0,
        duration: 1.5,
        onStart: () => {
          htmlElement.style.pointerEvents = 'none';
        },
        onComplete: () => {
          htmlElement.style.display = 'none';
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
      <div
        className="row d-flex justify-content-between align-items-center"
        style={{ marginTop: '4rem' }}
      >
        <div className="order-2 col-md-7 order-md-1 frontend-progress">
          <div className="skill font-weight-bold">
            <div className="skill_title d-flex justify-content-between ">
              <div className="skill_name">
                <svg
                  className="svg-inline--fa fa-html5 fa-w-12 mr-3 fa-2x"
                  style={{ color: '#e34c26' }}
                  aria-hidden="true"
                  data-prefix="fab"
                  data-icon="html5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  data-fa-i2svg=""
                >
                  <path fill="currentColor" d=""></path>
                </svg>
                HTML
              </div>
            </div>
            <div className="skill_bar" style={{ width: '90%' }}>
              <div className="skill_bar-slider" style={{ width: '0px' }}></div>
            </div>
          </div>

          <div className="skill font-weight-bold">
            <div className="skill_title d-flex justify-content-between ">
              <div className="skill_name">
                <svg
                  className="svg-inline--fa fa-css3-alt fa-w-12 mr-3 fa-2x"
                  style={{ color: '#264de4' }}
                  aria-hidden="true"
                  data-prefix="fab"
                  data-icon="css3-alt"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  data-fa-i2svg=""
                >
                  <path fill="currentColor" d=""></path>
                </svg>
                CSS / Bootstrap / Tailwind
              </div>
            </div>
            <div className="skill_bar" style={{ width: '70%' }}>
              <div className="skill_bar-slider" style={{ width: '0px' }}></div>
            </div>
          </div>

          <div className="skill font-weight-bold">
            <div className="skill_title d-flex justify-content-between ">
              <div className="skill_name">
                <svg
                  width="2em"
                  className="mr-3"
                  viewBox="0 0 256 256"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <g>
                    <path
                      d="M0,0 L256,0 L256,256 L0,256 L0,0 Z"
                      fill="#f0db4f"
                    ></path>
                    <path d="" fill="#000000"></path>
                    <path d="" fill="#000000"></path>
                  </g>
                </svg>
                JavaScript / TypeScript
              </div>
            </div>
          </div>

          <div className="skill font-weight-bold">
            <div className="skill_title d-flex justify-content-between ">
              <div className="skill_name">
                <svg
                  className="svg-inline--fa fa-angular fa-w-13 mr-3 fa-2x"
                  style={{ color: '#dd1b16' }}
                  aria-hidden="true"
                  data-prefix="fab"
                  data-icon="angular"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 415 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M169.7 268.1h76.2l-38.1-91.6-38.1 91.6zM207.8 32L0 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7L207.8 32zM338 373.8h-48.6l-26.2-65.4H152.6l-26.2 65.4H77.7L207.8 81.5 338 373.8z"
                  ></path>
                </svg>
                Vue
              </div>
            </div>
          </div>

          <div className="skill font-weight-bold">
            <div className="skill_title d-flex justify-content-between ">
              <div className="skill_name">
                <svg
                  className="svg-inline--fa fa-react fa-w-16 mr-3 fa-2x"
                  style={{ color: '#61DBFB' }}
                  aria-hidden="true"
                  data-prefix="fab"
                  data-icon="react"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path fill="currentColor" d=""></path>
                </svg>
                React / NextJS
              </div>
            </div>
          </div>

          <div className="skill font-weight-bold">
            <div className="skill_title d-flex justify-content-between ">
              <div className="skill_name">
                <svg
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 ionicon"
                  style={{ fill: '#498AFF' }}
                  viewBox="0 0 512 512"
                >
                  <title>Logo Ionic</title>
                  <path d="M256 153.9A102.1 102.1 0 10358.1 256 102.23 102.23 0 00256 153.9z"></path>
                  <circle cx="402.59" cy="116.45" r="46.52"></circle>
                  <path d=""></path>
                </svg>
                Ionic
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 px-3 mx-auto px-md-5 col-md-5 frontend-description order-md-2">
          <h3 className="mb-3">Frontend</h3>
          <p className="lead">
            Having experience with wide range of frontend technologies and
            frameworks.
          </p>
        </div>
      </div>

      <div
        className="row d-flex justify-content-between align-items-center"
        style={{ marginTop: '5rem' }}
      >
        <div className="px-3 mx-auto px-md-5 col-md-5 backend-description">
          <h3 className="mb-3">Backend</h3>
          <p className="lead">
            Equally well blended with backend technologies and frameworks.
          </p>
        </div>

        <div className="col-md-7 backend-progress">
          <div className="skill font-weight-bold">
            <div className="skill_title d-flex justify-content-between ">
              <div className="skill_name">
                <svg
                  className="svg-inline--fa fa-java fa-w-12 mr-3 fa-2x"
                  style={{ color: '#f89820' }}
                  aria-hidden="true"
                  data-prefix="fab"
                  data-icon="java"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 377 512"
                  data-fa-i2svg=""
                >
                  <path fill="currentColor" d=""></path>
                </svg>
                Java / Spring Boot
              </div>
            </div>
          </div>

          <div className="skill font-weight-bold">
            <div className="skill_title d-flex justify-content-between ">
              <div className="skill_name">
                <svg
                  className="svg-inline--fa fa-node-js fa-w-14 mr-3 fa-2x"
                  style={{ color: '#3c873a' }}
                  aria-hidden="true"
                  data-prefix="fab"
                  data-icon="node-js"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path fill="currentColor" d=""></path>
                </svg>
                NodeJS / ExpressJS / Socket.io / NestJS
              </div>
            </div>
          </div>

          <div className="skill font-weight-bold">
            <div className="skill_title d-flex justify-content-between ">
              <div className="skill_name">
                <svg
                  width="1em"
                  className="mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 598.88 1333.33"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <g fillRule="nonzero">
                    <path d="" fill="#599636"></path>
                    <path d="" fill="#6cac48"></path>
                    <path d="" fill="#c2bfbf"></path>
                  </g>
                </svg>
                &nbsp;&nbsp;MongoDB
              </div>
            </div>
          </div>

          <div className="skill font-weight-bold">
            <div className="skill_title d-flex justify-content-between ">
              <div className="skill_name">
                <svg
                  width="5em"
                  className="mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 231 30"
                  preserveAspectRatio="xMinYMid"
                >
                  <path
                    d=""
                    transform="translate(-0.02 0)"
                    style={{ fill: '#C74634' }}
                  ></path>
                </svg>
                Oracle DB
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="row d-flex justify-content-between align-items-center"
        style={{ marginTop: '5rem' }}
      >
        <div className="order-2 col-md-7 order-md-1 other-progress">
          <div className="skill font-weight-bold">
            <div className="skill_title d-flex justify-content-between ">
              <div className="skill_name">MEAN Stack</div>
            </div>
          </div>

          <div className="skill font-weight-bold">
            <div className="skill_title d-flex justify-content-between ">
              <div className="skill_name">MERN Stack</div>
            </div>
          </div>

          <div className="skill font-weight-bold">
            <div className="skill_title d-flex justify-content-between ">
              <div className="skill_name">
                <svg
                  width="2em"
                  className="mr-3"
                  version="1.1"
                  id="GraphQL_Logo"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 400 400"
                  enableBackground="new 0 0 400 400"
                >
                  <g>
                    <g>
                      <g>
                        <rect
                          x="122"
                          y="-0.4"
                          transform="matrix(-0.866 -0.5 0.5 -0.866 163.3196 363.3136)"
                          fill="#E535AB"
                          width="16.6"
                          height="320.3"
                        ></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect
                          x="39.8"
                          y="272.2"
                          fill="#E535AB"
                          width="320.3"
                          height="16.6"
                        ></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect
                          x="37.9"
                          y="312.2"
                          transform="matrix(-0.866 -0.5 0.5 -0.866 83.0693 663.3409)"
                          fill="#E535AB"
                          width="185"
                          height="16.6"
                        ></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect
                          x="177.1"
                          y="71.1"
                          transform="matrix(-0.866 -0.5 0.5 -0.866 463.3409 283.0693)"
                          fill="#E535AB"
                          width="185"
                          height="16.6"
                        ></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect
                          x="122.1"
                          y="-13"
                          transform="matrix(-0.5 -0.866 0.866 -0.5 126.7903 232.1221)"
                          fill="#E535AB"
                          width="16.6"
                          height="185"
                        ></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect
                          x="109.6"
                          y="151.6"
                          transform="matrix(-0.5 -0.866 0.866 -0.5 266.0828 473.3766)"
                          fill="#E535AB"
                          width="320.3"
                          height="16.6"
                        ></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect
                          x="52.5"
                          y="107.5"
                          fill="#E535AB"
                          width="16.6"
                          height="185"
                        ></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect
                          x="330.9"
                          y="107.5"
                          fill="#E535AB"
                          width="16.6"
                          height="185"
                        ></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect
                          x="262.4"
                          y="240.1"
                          transform="matrix(-0.5 -0.866 0.866 -0.5 126.7953 714.2875)"
                          fill="#E535AB"
                          width="14.5"
                          height="160.9"
                        ></rect>
                      </g>
                    </g>
                    <path
                      fill="#E535AB"
                      d="M369.5,297.9c-9.6,16.7-31,22.4-47.7,12.8c-16.7-9.6-22.4-31-12.8-47.7c9.6-16.7,31-22.4,47.7-12.8   C373.5,259.9,379.2,281.2,369.5,297.9"
                    ></path>
                    <path
                      fill="#E535AB"
                      d="M90.9,137c-9.6,16.7-31,22.4-47.7,12.8c-16.7-9.6-22.4-31-12.8-47.7c9.6-16.7,31-22.4,47.7-12.8   C94.8,99,100.5,120.3,90.9,137"
                    ></path>
                    <path
                      fill="#E535AB"
                      d="M30.5,297.9c-9.6-16.7-3.9-38,12.8-47.7c16.7-9.6,38-3.9,47.7,12.8c9.6,16.7,3.9,38-12.8,47.7   C61.4,320.3,40.1,314.6,30.5,297.9"
                    ></path>
                    <path
                      fill="#E535AB"
                      d="M309.1,137c-9.6-16.7-3.9-38,12.8-47.7c16.7-9.6,38-3.9,47.7,12.8c9.6,16.7,3.9,38-12.8,47.7   C340.1,159.4,318.7,153.7,309.1,137"
                    ></path>
                    <path
                      fill="#E535AB"
                      d="M200,395.8c-19.3,0-34.9-15.6-34.9-34.9c0-19.3,15.6-34.9,34.9-34.9c19.3,0,34.9,15.6,34.9,34.9   C234.9,380.1,219.3,395.8,200,395.8"
                    ></path>
                    <path
                      fill="#E535AB"
                      d="M200,74c-19.3,0-34.9-15.6-34.9-34.9c0-19.3,15.6-34.9,34.9-34.9c19.3,0,34.9,15.6,34.9,34.9   C234.9,58.4,219.3,74,200,74"
                    ></path>
                  </g>
                </svg>
                GraphQL / REST
              </div>
            </div>
          </div>

          <div className="skill font-weight-bold">
            <div className="skill_title d-flex justify-content-between ">
              <div className="skill_name">
                <svg
                  className="svg-inline--fa fa-docker fa-w-20 mr-3 fa-2x"
                  style={{ color: '#0db7ed' }}
                  aria-hidden="true"
                  data-prefix="fab"
                  data-icon="docker"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  data-fa-i2svg=""
                >
                  <path fill="currentColor" d=""></path>
                </svg>
                Docker
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 mx-auto px-md-5 order-md-2 col-md-5 other-description">
          <h3 className="mb-3">Other Technologies</h3>
          <p className="lead">
            Also worked upon these amazing stacks and technologies.
          </p>
        </div>
      </div>
    </Html>
  );
}
