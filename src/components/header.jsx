import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener('resize', handleResize);

    
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};



export default function Header() {
  const isMobile = useIsMobile(); 
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
  setMenuOpen(prev => !prev);
};

  return (
  <header>
  <img src={logo} alt="header" />

  {isMobile ? (
    <>
      <section onClick={toggleMenu} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '0.4em' }}>
        <span style={{ backgroundColor: '#ffffff', width: '30px', height: '4px', borderRadius: '0.6em' }} />
        <span style={{ backgroundColor: '#ffffff', width: '30px', height: '4px', borderRadius: '0.6em' }} />
        <span style={{ backgroundColor: '#ffffff', width: '30px', height: '4px', borderRadius: '0.6em' }} />
      </section>

      {menuOpen && (
        <nav style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          backgroundColor: '#025951',
          padding: '1em',
          borderRadius: '0.5em',
          zIndex: 1000,
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1em', listStyle: 'none', margin: 0, padding: 0 }}>
            <li>Home</li>
            <li>Tour</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact</li>
          </ul>
        </nav>
      )}
    </>
  ) : (
    <nav>
      <ul style={{ display: 'flex', gap: '2em', listStyle: 'none', margin: 0, padding: 0 }}>
        <li>Home</li>
        <li>Tour</li>
        <li>Blog</li>
        <li>Pages</li>
        <li>Contact</li>
      </ul>
    </nav>
  )}
</header>

  );
}
