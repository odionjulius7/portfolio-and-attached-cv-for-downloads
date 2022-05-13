import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GrFacebookOption } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { animatePages, transition } from '../animation/animate';

const Home = () => {
  const textsRef = useRef();

  // gsap
  const tl = useRef();
  const charEl = useRef();
  const q = gsap.utils.selector(charEl);
  gsap.set(q('div'), { yPercent: -170 });
  gsap.set(charEl.current, { autoAlpha: 1 });

  useEffect(() => {
    // slide up multitext effect
    let index = 0;
    const textsElement = textsRef.current.children;
    const textsLength = textsElement.length;

    const animateText = () => {
      for (let i = 0; i < textsLength; i++) {
        textsElement[i].classList.remove('text-in');
      }
      textsElement[index].classList.add('text-in');
      if (index === textsLength - 1) {
        index = 0;
      } else {
        index++;
      }
      setTimeout(animateText, 3000);
    };

    animateText();
  }, []);

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .to(q('div'), {
        duration: 0.3,
        yPercent: 0,
        stagger: 0.05,
        ease: 'expo.inOut',
      })
      .to(q("div:not([data-char='.']"), {
        duration: 1,
        yPercent: 170,
        stagger: 0.11,
        ease: 'expo.inOut',
      });
  }, []);

  return (
    <motion.section
      initial='out'
      animate='in'
      exit='out'
      variants={animatePages}
      transition={transition}
      className='homepage'
    >
      <div className='intro container'>
        <div className='intro-text'>
          <h1>Hi,</h1>
          <div className='d-flex'>
            <h1>I'm</h1>
            <h1 className='char' ref={charEl}>
              <div data-char='Q'>O</div>
              <div data-char='.'>.</div>
              <div data-char='D'>O</div>
              <div data-char='u'>n</div>
              <div data-char='s'>c</div>,
            </h1>
          </div>
          <h1> Web Developer</h1>
        </div>
        <div className='job-desc'>
          <p>
            Have you wondered who is responsible for the design of the websites
            you use everyday? Yes, that's what <span>web developer</span> does.
            I help build stable, elegant, secure and reliable websites with;
          </p>
        </div>
        {/* services */}
        <div className='multitext-wrapper'>
          <h2 className='multitext' ref={textsRef}>
            <span>- beautiful user Interface</span>
            <span>- functional user experience</span>
            <span>- mobile/responsive design</span>
            <span>- good browser compatibility</span>
            <span>- great web accessibility</span>
          </h2>
        </div>
        {/* socials */}
        <div className='social-wrapper'>
          <p className='connect-text'>Let's connect</p>
          <div className='social'>
            <a
              href='https://m.facebook.com/adefesoqudus.dmics'
              className='fb'
              target='_blank'
              rel='noreferrer'
            >
              <GrFacebookOption />
            </a>
            <a
              href='https://twitter.com/pengpixel'
              className='twitter'
              target='_blank'
              rel='noreferrer'
            >
              <AiOutlineTwitter />
            </a>
            <a
              href='https://github.com/FesoQue'
              className='github'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/adefeso-qudus-a-ba8ba310a'
              className='linkedin'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
