import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { animatePages, transition } from '../animation/animate';
import ERR_ICON from '../assets/404.gif';

const Error = () => {
  return (
    <motion.section
      initial='out'
      animate='in'
      exit='out'
      variants={animatePages}
      transition={transition}
      className='section error-section'
    >
      <div className='section-contents-wrapper container'>
        <div className='err-content'>
          <div className='err-img-wrap'>
            <img src={ERR_ICON} alt='404' />
          </div>
          <Link to='/'>GO HOME</Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Error;
