<h1 align="center">R3F Portfolio</h1>


<p align="center">
  <img src="threejs.png" alt="threejs-logo" width="120px" height="120px"/>
  <br>
  <i>Interactive Portfolio page built with ThreeJS and React Three Fiber libraries
    </i>
  <br>
</p>


<p align="center">
  <a href="https://arthur-panazolo.netlify.app/" target="_blank" rel="noreferrer noopener"><strong>https://arthur-panazolo.netlify.app/</strong></a>
  <br>
</p>



## Introduction

![Portfolio1](screenshots/panazolo-portfolio.png)
![Portfolio2](screenshots/panazolo-portfolio2.png)



After postponing it for so long, finally made up my mind and decided to create my personal portfolio. This Single Page Application serves as a showcase of my skills, projects, and experiences in web development. 
With a modern design and interactive elements, I aimed to reflect my passion for coding and creativity, while maintaining a simple and elegant appearance.

Leveraging technologies like React, ThreeJS and React Three Fiber, I focused on delivering a smooth interactive 3D experience, along with responsiveness for various devices. 

React's `useState()` hook and the Zustand library were used to manage the many states of the app (the Notebook's open/close and on/off states; also the management of the other pages, "About" and "Skills"), and the 
animations of the notebook and room's pages were made possible by the Gsap library and React Three Fiber's `useFrame()` hook. 

Also worthy of note is the `react-three/drei` library, developed by the open source developer collective 
Pmndrs, which sped up the development of the project considerably, thanks to its extremely useful helpers (components like "<Center>", "<Environment>", <Billboard> and "<Html>", among many others).

Due to several issues that needed to be ironed out, the project took quite some time to finish. To ensure a working design in most devices, many techniques were used (such as the usage and management of the "<Bounds>" Drei component).

Another challenge was the interaction of the React Three Fiber library with other libraries (like `react-wordcloud`), which led to performance issues. These were addressed through extensive tweaking and debugging with the Leva component, ultimately resolving the problems.

The interactive background component, composed of many words in a single block, was made possible by the `react-wordcloud` library, which randomizes each word's positions before joining them all together.
The end goal was to generate something like <a href="https://github.com/nothingnothings/r3f-portfolio/blob/master/wordcloud.jpg" target="_blank" rel="noreferrer noopener">this</a>.

The app was deployed with the help of Netlify, and can be accessed <a href="https://arthur-panazolo.netlify.app/" target="_blank" rel="noreferrer noopener">here</a>.


[![en](https://img.shields.io/badge/lang-en-red.svg?style=flat-square)](https://github.com/nothingnothings/r3f-portfolio)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg?style=flat-square)](https://github.com/nothingnothings/r3f-portfolio/blob/master/README.pt-br.md)



 
## Technologies
 
Some of the languages and libraries that were used:
 
- Node Package Manager (bootstrapping and managing the React application)
- HTML5 (with JSX, due to React)
- CSS3 (animations, Flexbox, media queries)
- ReactJS (JavaScript library/framework, app composed entirely of React components)
- ThreeJS (for creating the canvas element where the whole experience is rendered)
- React Three Fiber (library that wraps the ThreeJS library and assists with its integration with the React library)
- Local state management (two main states: first the central one, maanged by the `zustand` library, in `store/useNotebook.jsx`, used all over the app, then a collection of local states, created via the `useState` hook and present in components like "<Room>", "<AboutMe>", "<Skills>" and "<PageButtonsHub>")
- Leva (Powerful GUI component that was used to tweak positioning, scale and rotation of 3D elements, along with other things)
- React Wordcloud (responsible for generating the Word Cloud background component)
- Gsap (library responsible for animating many 2D and 3D component's css properties)
- Bootstrap (used for the responsive layout of the "<AboutMe>" and "<Skills>" Pages)
- FontAwesome (for the icons of the "<SocialMediaPanel>")
- Netlify (for the deployment of the app)


## Project Directory Structure

