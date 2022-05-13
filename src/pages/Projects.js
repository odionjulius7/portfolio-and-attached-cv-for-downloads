import { motion } from 'framer-motion';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import { animatePages, transition } from '../animation/animate';

const Projects = () => {
  return (
    <motion.section
      initial='out'
      animate='in'
      exit='out'
      variants={animatePages}
      transition={transition}
      className='section project-section'
    >
      <div className='section-contents-wrapper container'>
        <div className='section-title'>
          <h1>My Works</h1>
        </div>
        <div className='content'>
          <div className='project-cards'>
            <div className='p-card p-card-1'>
              <div className='p-card-content'>
                <h4>Wishopa Ecommerce</h4>

                <div className='lang-tags'>
                  <button className='lang-tag react-tag'>react</button>
                  <button className='lang-tag context-tag chartjs-tag'>
                    Context
                  </button>
                  <button className='lang-tag firebase-tag'>firebase</button>
                  <button className='lang-tag mui-tag'>MUI</button>
                </div>

                <div className='project-links'>
                  <a
                    href='https://github.com/FesoQue/Wishopa-React-Ecommerce-Website'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href='https://wishopa.netlify.app'
                    className='ext-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-2'>
              <div className='p-card-content'>
                <h4>Gradient Color Generator</h4>
                <div className='lang-tags'>
                  <button className='lang-tag react-tag'>react</button>
                </div>

                <div className='project-links'>
                  <a
                    href='https://github.com/FesoQue/gradeo-gradient-generator'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href='https://coloree.netlify.app'
                    className='ext-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-3'>
              <div className='p-card-content'>
                <h4>Crypto Prices Tracker</h4>
                <div className='lang-tags'>
                  <button className='lang-tag react-tag'>react</button>
                  <button className='lang-tag context-tag chartjs-tag'>
                    Context
                  </button>
                  <button className='lang-tag firebase-tag'>firebase</button>
                  <button className='lang-tag chartjs-tag'>Chartjs</button>
                </div>

                <div className='project-links'>
                  <a
                    href='https://github.com/FesoQue/Live-CryptoCurrency-Tracker-Project'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href='https://coinsverse.netlify.app'
                    className='ext-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-4'>
              <div className='p-card-content'>
                <h4>Sneakers Landing Page</h4>
                <div className='lang-tags'>
                  <button className='lang-tag react-tag'>react</button>
                  <button className='lang-tag context-tag'>context</button>
                </div>

                <div className='project-links'>
                  <a
                    href='https://github.com/FesoQue/Sneakers-Ecommerce-Product-Page-With-Paystack-Checkout-and-Dark-Mode-With-localStorage'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href='https://sneakerz.netlify.app'
                    className='ext-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-5'>
              <div className='p-card-content'>
                <h4>Bookmark Landing Page</h4>
                <div className='lang-tags'>
                  <button className='lang-tag html-tag'>html</button>
                  <button className='lang-tag css-tag'>css</button>
                  <button className='lang-tag js-tag'>javascript</button>
                </div>

                <div className='project-links'>
                  <a
                    href='https://github.com/FesoQue/Bookmark-Landing-Page-With-Tabs-And-Email-Validation'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href='https://bookmarknow.netlify.app/'
                    className='ext-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-6'>
              <div className='p-card-content'>
                <h4>Digital Banking Landing Page</h4>
                <div className='lang-tags'>
                  <button className='lang-tag html-tag'>html</button>
                  <button className='lang-tag css-tag'>css</button>
                  <button className='lang-tag js-tag'>javascript</button>
                </div>

                <div className='project-links'>
                  <a
                    href='https://github.com/FesoQue/'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href='https://.netlify.app'
                    className='ext-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-7'>
              <div className='p-card-content'>
                <h4> Pricing Component</h4>
                <div className='lang-tags'>
                  <button className='lang-tag bootstrap-tag'> bootstrap</button>
                </div>

                <div className='project-links'>
                  <a
                    href='https://github.com/FesoQue/Interactive-pricing-component'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href='https://price-component.netlify.app/'
                    className='ext-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-8'>
              <div className='p-card-content'>
                <h4>Github User Finder</h4>
                <div className='lang-tags'>
                  <button className='lang-tag react-tag'>react</button>
                </div>

                <div className='project-links'>
                  <a
                    href='https://github.com/FesoQue/Github-Dev-Finder'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href='https://devpadi.netlify.app/'
                    className='ext-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-9'>
              <div className='p-card-content'>
                <h4>Room Homepage Master</h4>
                <div className='lang-tags'>
                  <button className='lang-tag html-tag'>html</button>
                  <button className='lang-tag css-tag'>css</button>
                  <button className='lang-tag js-tag'>javascript</button>
                </div>

                <div className='project-links'>
                  <a
                    href='https://github.com/FesoQue/Room-Homepage-Master'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href='https://roomhomepage-master.netlify.app/'
                    className='ext-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-10'>
              <div className='p-card-content'>
                <h4>Social Media Dashboard</h4>
                <div className='lang-tags'>
                  <button className='lang-tag html-tag'>html</button>
                  <button className='lang-tag css-tag'>css</button>
                  <button className='lang-tag js-tag'>javascript</button>
                </div>

                <div className='project-links'>
                  <a
                    href='https://github.com/FesoQue/Social-media-dashboard-with-theme-switcher'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href='https://social-md.netlify.app/'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
