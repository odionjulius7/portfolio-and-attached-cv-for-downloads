import React, { useState, useRef, useEffect } from 'react';
import Services from '../component/Services';
import HTML_ICON from '../assets/html.svg';
import CSS3_ICON from '../assets/css.svg';
import JAVASCRIPT_ICON from '../assets/javascript.svg';
import GIT_ICON from '../assets/git.svg';
import REACT_ICON from '../assets/react.svg';
import NEXT_ICON from '../assets/nextjs.svg';
import BOOTSTRAP_ICON from '../assets/bootstrap.png';
import FIREBASE_ICON from '../assets/firebase.svg';
import GSAP_ICON from '../assets/gsap.svg';
import VSCODE_ICON from '../assets/vscode.svg';
import CHROME_ICON from '../assets/chrome.svg';
import CODEPEN_ICON from '../assets/codepen.svg';
import CODESANDBOX_ICON from '../assets/code-sandbox.svg';
import ADOBE_ICON from '../assets/adobe-xd.svg';
import NPM_ICON from '../assets/npm.svg';
import PHOTOSHOP_ICON from '../assets/photoshop.svg';
import { motion } from 'framer-motion';
import { animatePages, transition } from '../animation/animate';

const Skills = () => {
  const mainCircle = useRef();

  const [option, setOption] = useState('skills');
  const [stack, setStack] = useState('react');
  const [width, setWidth] = useState(window.innerWidth);

  const setActiveClass = (arg) => {
    switch (arg) {
      case 'skills':
        setOption('skills');
        break;
      case 'services':
        setOption('services');
        break;

      default:
        break;
    }
  };

  const setActiveLine = (arg) => {
    switch (arg) {
      case 'html':
        setStack('html');
        break;
      case 'css':
        setStack('css');
        break;
      case 'js':
        setStack('javascript');
        break;
      case 'react':
        setStack('react');
        break;
      case 'firebase':
        setStack('firebase');
        break;
      case 'git':
        setStack('git');
        break;
      case 'nextJs':
        setStack('nextJs');
        break;
      case 'gsap':
        setStack('gsap');
        break;
      case 'bootstrap':
        setStack('bootstrap');
        break;

      default:
        break;
    }
  };

  const checkSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    const degreeElement = mainCircle.current.children[0].children;
    const degArr = Array.from(degreeElement);

    degArr.forEach((element, index) => {
      // element.style.left = '140px';
      // element.style.transformOrigin = '50% 145px';
      element.style.transform = `rotate(${index * 40}deg)`;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    const degreeElement = mainCircle.current.children[0].children;
    const degArr = Array.from(degreeElement);

    if (width > 1000) {
      mainCircle.current.style.width = `450px`;
      mainCircle.current.style.height = `450px`;

      degArr.forEach((element, i) => {
        element.style.left = '210px';
        element.style.transformOrigin = '50% 220px';
      });
    } else {
      mainCircle.current.style.width = `300px`;
      mainCircle.current.style.height = `300px`;

      degArr.forEach((element, i) => {
        element.style.left = '132px';
        element.style.transformOrigin = '50% 145px';
      });
    }

    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, [width]);

  return (
    <motion.section
      initial='out'
      animate='in'
      exit='out'
      variants={animatePages}
      transition={transition}
      className='section skills-section'
    >
      <div className='section-contents-wrapper container'>
        <div className='section-title'>
          <h1>Skills & Services</h1>
        </div>

        <div className='tab-btn-wrapper'>
          <button
            onClick={() => setActiveClass('skills')}
            className={`tab-btn ${
              option === 'skills' ? 'active-tab-btn' : 'null'
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveClass('services')}
            className={`tab-btn ${
              option === 'services' ? 'active-tab-btn' : 'null'
            }`}
          >
            Services
          </button>
        </div>
        <div className='section-content'>
          {/* ========== skills ========== */}
          <div
            className={
              option === 'skills'
                ? 'skills-content active-content'
                : 'skills-content'
            }
          >
            {/* technical */}
            <div className='technical-skills'>
              <h3>Tech Stacks:</h3>
              <div id='main-circle' ref={mainCircle}>
                <div className='degree-wrapper'>
                  <div className='degree' onClick={() => setActiveLine('html')}>
                    <span
                      className={`line ${
                        stack === 'html' ? 'active-line' : ''
                      }`}
                    ></span>
                    <img src={HTML_ICON} alt='html5' />
                  </div>

                  <div className='degree' onClick={() => setActiveLine('css')}>
                    <span
                      className={`line ${stack === 'css' ? 'active-line' : ''}`}
                    ></span>
                    <img src={CSS3_ICON} alt='css3' />
                  </div>

                  <div className='degree' onClick={() => setActiveLine('js')}>
                    <span
                      className={`line ${
                        stack === 'javascript' ? 'active-line' : ''
                      }`}
                    ></span>
                    <img src={JAVASCRIPT_ICON} alt='javascript' />
                  </div>
                  <div
                    className='degree'
                    onClick={() => setActiveLine('react')}
                  >
                    <span
                      className={`line ${
                        stack === 'react' ? 'active-line' : ''
                      }`}
                    ></span>
                    <img src={REACT_ICON} alt='react' />
                  </div>
                  <div
                    className='degree'
                    onClick={() => setActiveLine('firebase')}
                  >
                    <span
                      className={`line ${
                        stack === 'firebase' ? 'active-line' : ''
                      }`}
                    ></span>
                    <img src={FIREBASE_ICON} alt='firebase' />
                  </div>

                  <div className='degree' onClick={() => setActiveLine('git')}>
                    <span
                      className={`line ${stack === 'git' ? 'active-line' : ''}`}
                    ></span>
                    <img src={GIT_ICON} alt='git' />
                  </div>

                  <div
                    className='degree'
                    onClick={() => setActiveLine('nextJs')}
                  >
                    <span
                      className={`line ${
                        stack === 'nextJs' ? 'active-line' : ''
                      }`}
                    ></span>
                    <img src={NEXT_ICON} alt='nextjs' />
                  </div>

                  <div
                    className='degree'
                    onClick={() => {
                      setActiveLine('gsap');
                    }}
                  >
                    <span
                      className={`line ${
                        stack === 'gsap' ? 'active-line' : ''
                      }`}
                    ></span>
                    <img src={GSAP_ICON} alt='bootstrap' />
                  </div>

                  <div
                    className='degree'
                    onClick={() => setActiveLine('bootstrap')}
                  >
                    <span
                      className={`line ${
                        stack === 'bootstrap' ? 'active-line' : ''
                      }`}
                    ></span>
                    <img src={BOOTSTRAP_ICON} alt='gsap' />
                  </div>
                </div>

                <div className='center-label'>
                  <p className='stack-name'>
                    <span>{stack}</span>
                  </p>
                </div>
              </div>
            </div>
            {/* tools */}
            <div className='flex'>
              <div className='tools'>
                <h3>Tools: </h3>
                <div className='tools-wrapper'>
                  <div className='tool'>
                    <img src={VSCODE_ICON} alt='vscode' />
                  </div>
                  <div className='tool'>
                    <img src={CHROME_ICON} alt='chrome' />
                  </div>
                  <div className='tool'>
                    <img src={GIT_ICON} alt='git' />
                  </div>
                  <div className='tool'>
                    <img src={CODEPEN_ICON} alt='codepen' />
                  </div>
                  <div className='tool'>
                    <img src={PHOTOSHOP_ICON} alt='photoshop' />
                  </div>
                  <div className='tool'>
                    <img src={ADOBE_ICON} alt='adobe-xd' />
                  </div>
                  <div className='tool'>
                    <img src={CODESANDBOX_ICON} alt='codesandbox' />
                  </div>
                  <div className='tool'>
                    <img src={NPM_ICON} alt='npm' />
                  </div>
                </div>
              </div>
              {/* non technical */}
              <div className='non-technical-skills'>
                <h3>Soft Skills:</h3>
                <div className='soft-skills-wrapper'>
                  <div className='soft-skill'>
                    <p>Good Communication Skills</p>
                  </div>
                  <div className='soft-skill'>
                    <p>Critical Thinking & Problem Solving</p>
                  </div>
                  <div className='soft-skill'>
                    <p>Team Work & Collaboration</p>
                  </div>
                  <div className='soft-skill'>
                    <p>Professionalism & Strong Work Ethics</p>
                  </div>
                  <div className='soft-skill'>
                    <p>Flexibility & Adaptability</p>
                  </div>
                  <div className='soft-skill'>
                    <p>Time Management Skills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========== services ========== */}
          <section
            className={
              option === 'services'
                ? 'services-content active-content'
                : 'services-content'
            }
          >
            <Services />
          </section>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
