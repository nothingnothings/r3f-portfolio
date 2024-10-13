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
        className="row d-flex justify-content-between align-items-center text-white"
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
                  <path
                    fill="currentColor"
                    d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
                  ></path>
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
                  <path
                    fill="currentColor"
                    d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"
                  ></path>
                </svg>
                CSS
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
                    <path
                      d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026"
                      fill="#000000"
                    ></path>
                    <path
                      d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413"
                      fill="#000000"
                    ></path>
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
                  className="svg-inline--fa fa-react fa-w-16 mr-3 fa-2x"
                  style={{ color: '#61DBFB' }}
                  aria-hidden="true"
                  data-prefix="fab"
                  data-icon="react"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zm-130 189.1c4.6 8.8 9.3 17.5 14.3 26.1 5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5zm0-50.6c-6.3-14.9-11.6-29.5-16-43.6 14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26zm11.4 25.3c6.6-13.8 13.8-27.3 21.4-40.6 7.6-13.3 15.8-26.2 24.4-38.9 15-1.1 30.3-1.7 45.9-1.7 15.6 0 31 .6 45.9 1.7 8.5 12.6 16.6 25.5 24.3 38.7 7.7 13.2 14.9 26.7 21.7 40.4-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6-15.7 0-30.9-.5-45.6-1.4-8.7-12.7-16.9-25.7-24.6-39-7.7-13.3-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zM256 210.2c25.3 0 45.8 20.5 45.8 45.8 0 25.3-20.5 45.8-45.8 45.8-25.3 0-45.8-20.5-45.8-45.8 0-25.3 20.5-45.8 45.8-45.8"
                  ></path>
                </svg>
                React / NextJS
              </div>
            </div>
          </div>

          <div className="skill font-weight-bold">
            <div className="skill_title d-flex justify-content-between ">
              <div className="skill_name">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 -17.5 256 256"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <g>
                      {' '}
                      <path
                        d="M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z"
                        fill="#41B883"
                      >
                        {' '}
                      </path>{' '}
                      <path
                        d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z"
                        fill="#41B883"
                      >
                        {' '}
                      </path>{' '}
                      <path
                        d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z"
                        fill="#35495E"
                      >
                        {' '}
                      </path>{' '}
                    </g>{' '}
                  </g>
                </svg>
                Vue
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
                Bootstrap
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
                Tailwind
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
                ThreeJS / React Three Fiber
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 px-3 mx-auto px-md-5 col-md-5 frontend-description order-md-2">
          <h3 className="mb-3">Frontend</h3>
          <p className="lead">
            Proficient in a diverse selection of frontend tools and libraries.
          </p>
        </div>
      </div>

      <div
        className="row d-flex justify-content-between align-items-center text-white"
        style={{ marginTop: '5rem' }}
      >
        <div className="px-3 mx-auto px-md-5 col-md-5 backend-description">
          <h3 className="mb-3">Backend</h3>
          <p className="lead">
            Familiar with an array of backend services and programming
            languages.
          </p>
        </div>

        <div className="col-md-7 backend-progress">
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
                NodeJS / ExpressJS
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
                Python
              </div>
            </div>
          </div>
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
                PHP
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
        className="row d-flex justify-content-between align-items-center text-white"
        style={{ marginTop: '5rem' }}
      >
        <div className="order-2 col-md-7 order-md-1 other-progress">
          <div className="skill font-weight-bold">
            <div className="skill_title d-flex justify-content-between ">
              <div className="skill_name">PostgreQSL</div>
            </div>
          </div>

          <div className="skill font-weight-bold">
            <div className="skill_title d-flex justify-content-between ">
              <div className="skill_name">Snowflake</div>
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
                  <path
                    fill="currentColor"
                    d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"
                  ></path>{' '}
                </svg>
                Docker
              </div>
            </div>
          </div>

          <div className="skill font-weight-bold">
            <div className="skill_title d-flex justify-content-between ">
              <div className="skill_name">Webpack</div>
            </div>
          </div>
        </div>
        <div className="order-1 mx-auto px-md-5 order-md-2 col-md-5 other-description">
          <h3 className="mb-3">Misc</h3>
          <p className="lead">
            Miscellaneous tools, technologies and resources that I have
            experience with.
          </p>
        </div>
      </div>
    </Html>
  );
}
