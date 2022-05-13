import React from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='header'>
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Header;
