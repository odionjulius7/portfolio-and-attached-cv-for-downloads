import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { animatePages, transition } from '../animation/animate';

const About = () => {
  const [bioLength, setBioLength] = useState('longer');

  const setActiveClass = (arg) => {
    switch (arg) {
      case 'shortest':
        setBioLength('shortest');
        break;
      case 'shorter':
        setBioLength('shorter');
        break;
      case 'short':
        setBioLength('short');
        break;
      case 'long':
        setBioLength('long');
        break;
      case 'longer':
        setBioLength('longer');
        break;
      case 'longest':
        setBioLength('longest');
        break;

      default:
        break;
    }
  };
  return (
    <motion.section
      initial='out'
      animate='in'
      exit='out'
      variants={animatePages}
      transition={transition}
      className='section about-section'
    >
      <div className='section-contents-wrapper container'>
        <div className='section-title'>
          <h1>About Myself</h1>
        </div>
        {/* img */}
        <div className='about-wrapper'>
          <div className='profile-img'></div>
          <div className='section-content'>
            <div className='bio-length'>
              <p>Adjust Bio Length:</p>
              <div className='dots-wrapper'>
                <div
                  className={`${
                    bioLength === 'shortest' ? 'dot dot-active' : 'dot'
                  }`}
                  onClick={() => setActiveClass('shortest')}
                ></div>
                <div
                  className={`${
                    bioLength === 'shorter' ? 'dot dot-active' : 'dot'
                  }`}
                  onClick={() => setActiveClass('shorter')}
                ></div>
                <div
                  className={`${
                    bioLength === 'short' ? 'dot dot-active' : 'dot'
                  }`}
                  onClick={() => setActiveClass('short')}
                ></div>
                <div
                  className={`${
                    bioLength === 'long' ? 'dot dot-active' : 'dot'
                  }`}
                  onClick={() => setActiveClass('long')}
                ></div>
                <div
                  className={`${
                    bioLength === 'longer' ? 'dot dot-active' : 'dot'
                  }`}
                  onClick={() => setActiveClass('longer')}
                ></div>
                <div
                  className={`${
                    bioLength === 'longest' ? 'dot dot-active' : 'dot'
                  }`}
                  onClick={() => setActiveClass('longest')}
                ></div>
              </div>
              <div className='length-tags'>
                <p>shortest</p>
                <p>Longest</p>
              </div>
            </div>
            <div
              className={
                bioLength === 'shortest' ? 'bio-text active-text' : 'bio-text'
              }
            >
              <p>
                Hi, my name is{' '}
                <span
                  style={{
                    fontWeight: '600',
                    padding: '4px',
                    borderRadius: '3px',
                    backgroundColor: '#2a2e35',
                  }}
                >
                  Adefeso Qudus (Q.Dus)
                </span>
                , I studied Electrical/Electronics Engineering.
              </p>
            </div>
            <div
              className={
                bioLength === 'shorter' ? 'bio-text active-text' : 'bio-text'
              }
            >
              <p>
                <span
                  style={{
                    fontWeight: '600',
                    padding: '4px',
                    borderRadius: '3px',
                    backgroundColor: '#2a2e35',
                  }}
                >
                  Adefeso Qudus (Q.Dus)
                </span>{' '}
                transitioned into web development to explore the creative and
                analytical sides of his mind. He was simply fascinated with it.
              </p>
            </div>
            <div
              className={
                bioLength === 'short' ? 'bio-text active-text' : 'bio-text'
              }
            >
              <p>
                <span
                  style={{
                    fontWeight: '600',
                    padding: '4px',
                    borderRadius: '3px',
                    backgroundColor: '#2a2e35',
                  }}
                >
                  Adefeso Qudus (Q.Dus)
                </span>{' '}
                is an Electrical/Electronics Engineer now turned to frontend
                developer. He remembered the first time he discovered HTML, CSS,
                Wordpress a whole new world of possibilities happened before his
                eyes.
              </p>
            </div>
            <div
              className={
                bioLength === 'long' ? 'bio-text active-text' : 'bio-text'
              }
            >
              <p>
                <span
                  style={{
                    fontWeight: '600',
                    padding: '4px',
                    borderRadius: '3px',
                    backgroundColor: '#2a2e35',
                  }}
                >
                  Adefeso Qudus (Q.Dus)
                </span>{' '}
                is an Electrical Engineer now turned to frontend developer. He
                remembered the first time he discovered HTML, CSS, Wordpress a
                whole new world of possibilities happened before his eyes. He
                fiddled with wordpress(because he finds it easier then) for days
                to see what he could do with it. In the process, his{' '}
                <a href=''>first ever website</a> was created. It was an
                entertainment blog website.
              </p>
            </div>
            <div
              className={
                bioLength === 'longer' ? 'bio-text active-text' : 'bio-text'
              }
            >
              <p>
                <span
                  style={{
                    fontWeight: '600',
                    padding: '4px',
                    borderRadius: '3px',
                    backgroundColor: '#2a2e35',
                  }}
                >
                  Adefeso Qudus (Q.Dus)
                </span>{' '}
                is an Electrical Engineer now turned to frontend developer. He
                remembered the first time he discovered HTML, CSS, Wordpress a
                whole new world of possibilities happened before his eyes. He
                fiddled with wordpress(because he finds it easier then) for days
                to see what he could do with it. In the process, his{' '}
                <a
                  href='https://kudosnaija.wordpress.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  first ever website
                </a>{' '}
                was created. It was an entertainment blog website. He was
                excited and really wants to create more magical things with it .
                Even though he became really passionate and want to create more
                interesting things on the web to satisfy his need for
                creativity, he just couldn't due to academics workload. He
                reginited the flames and passion for web development after he
                graduated.
              </p>
              <p>
                As a person, he's an ambitious, goal driven & detail oriented
                frontend developer looking to leverage his working knowledge of
                frontend technologies for a role in an established IT company.
              </p>
            </div>
            <div
              className={
                bioLength === 'longest' ? 'bio-text active-text' : 'bio-text'
              }
            >
              <p>
                <span
                  style={{
                    fontWeight: '600',
                    padding: '4px',
                    borderRadius: '3px',
                    backgroundColor: '#2a2e35',
                  }}
                >
                  Adefeso Qudus (Q.Dus)
                </span>{' '}
                is an Electrical Engineer now turned to frontend developer. He
                stransitioned into web development to explore the creative and
                analytical sides of his mind. He was simply fascinated with it.
                He remembered the first time he discovered HTML, CSS, Wordpress
                a whole new world of possibilities happened before his eyes. He
                fiddled with wordpress(because he finds it easier then) for days
                to see what he could do with it. In the process, his{' '}
                <a href=''>first ever website</a> was created. It was an
                entertainment blog website. He was excited and really wants to
                create more magical things with it . Even though he became
                really passionate and want to create more interesting things on
                the web to satisfy his need for creativity, he just couldn't due
                to academics workload. He reginited the flames and passion for
                web development after he graduated, and he have been learning
                and creating ever since then
              </p>
              <p>
                As a person, he's an ambitious, goal driven & detail oriented
                frontend developer looking to leverage his working knowledge of
                frontend technologies for a role in an established IT company
                with the opportunity to work on challenging and diverse projects
                and equally trying to help maximize productivity.
              </p>
              <p>
                He's also naturally curious, confident and always eager to
                broaden his horizon by learning different new technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
