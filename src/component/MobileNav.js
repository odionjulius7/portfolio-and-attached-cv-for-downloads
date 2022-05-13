import React, { useState, useEffect } from 'react';
import { RiHome5Line } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { VscTools } from 'react-icons/vsc';
import { RiCodeSSlashFill } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import RESUME from '../assets/Adefeso_qudus_dev_resume.pdf';

const MobileNav = () => {
  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  const checkScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <div className='mobile-header'>
      <nav className='header-row-1'>
        <div className='row-1-wrapper container'>
          <div className='logo'>
            <Link to='/'>
              <h2>
                Q<span>.</span>
              </h2>
            </Link>
          </div>

          {/* <p className='version'>v1.0</p> */}
          <div className='resume'>
            <a
              href={RESUME}
              className='download-resume'
              download='adefeso-Qudus-Resume'
            >
              <span>
                <FiDownload />
              </span>
              resume
            </a>
          </div>
        </div>
      </nav>
      <nav className={`header-row-2 ${visible ? '' : 'hide'}`}>
        <div className='row-2-wrapper container'>
          <div className='nav-menu-list'>
            <NavLink to='/' className='menu-item'>
              <RiHome5Line />
              <span className='label one'>HOME</span>
            </NavLink>
            <NavLink to='/about' className='menu-item'>
              <AiOutlineUser />
              <span className='label two'>ABOUT</span>
            </NavLink>
            <NavLink to='/skills' className='menu-item'>
              <VscTools />
              <span className='label three'>SKILLS</span>
            </NavLink>
            <NavLink to='/projects' className='menu-item'>
              <RiCodeSSlashFill />
              <span className='label four'>WORK</span>
            </NavLink>
            <NavLink to='/contact' className='menu-item'>
              <HiOutlineMail />
              <span className='label five'>CONTACT</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
