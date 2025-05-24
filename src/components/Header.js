import React, { useState } from 'react';
import logo from '../images/csa.jpg';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white px-6 md:px-12 py-8 border-b border-[#02AB60]/30 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">

        {/* Left: Large title with logo after 'x' */}
        <h1 className="text-[#0A2C40] text-5xl md:text-6xl font-extrabold flex items-center gap-4 tracking-tight leading-none select-none">
          KPDU&nbsp;
          <span className="text-[#02AB60] font-black">x</span>
          <img
            src={logo}
            alt="CSA Logo"
            className="w-20 h-20 object-contain border-4 border-[#02AB60] rounded-md"
          />
        </h1>

        {/* Mobile Hamburger Menu Icon */}
        <div className="block md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-[#0A2C40] text-3xl focus:outline-none"
          >
            &#9776; {/* Hamburger Icon */}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-12 text-[#0A2C40] font-extrabold text-xl md:text-2xl uppercase tracking-wider">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="relative pb-2 hover:text-[#02AB60] transition duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#02AB60] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation (Hidden on Desktop, visible on small screens) */}
        <nav className={`absolute top-0 left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col items-center py-4 space-y-4 text-[#0A2C40] font-extrabold text-xl">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="relative pb-2 hover:text-[#02AB60] transition duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#02AB60] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;
