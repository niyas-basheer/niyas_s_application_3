import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="w-full bg-header-1 shadow-[0px_4px_12px_#888888ff]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/img_logo_wrapper_link.png" 
              alt="Logo" 
              className="w-[51px] h-[19px] sm:w-[76px] sm:h-[28px] md:w-[102px] md:h-[38px]"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center gap-[15px] md:gap-[30px] px-3 py-3 border border-[#d8e7f211] rounded-[22px]">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  role="menuitem"
                  className="text-header-1 text-sm font-medium hover:text-global-11 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Get Template Button */}
          <div className="hidden sm:block">
            <Button
              variant="primary"
              leftImage={{
                src: "/images/img_1529132500.svg",
                width: 20,
                height: 20
              }}
              className="text-global-12 text-sm font-medium px-[18px] py-2 shadow-[0px_-8px_8px_#0000003d] border border-[#d8e7f211] rounded-[8px] bg-[linear-gradient(180deg,#10131c_0%,_#d8e7f211_100%)]"
            >
              Get Template
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="block lg:hidden p-2" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6 text-header-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-4`}>
          <div className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                role="menuitem"
                className="text-header-1 text-sm font-medium text-left hover:text-global-11 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-4 sm:hidden">
              <Button
                variant="primary"
                fullWidth
                leftImage={{
                  src: "/images/img_1529132500.svg",
                  width: 20,
                  height: 20
                }}
                className="text-global-12 text-sm font-medium"
              >
                Get Template
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;