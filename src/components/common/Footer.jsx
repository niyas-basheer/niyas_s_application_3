import React from 'react';

const Footer = () => {
  const footerLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
    { label: 'Blog', href: '#blog' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms', href: '#terms' }
  ];

  return (
    <footer className="w-full mt-[30px] md:mt-[60px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-12">
          {/* Left Section - Logo and Links */}
          <div className="flex flex-col gap-6 lg:gap-10 flex-1">
            {/* Logo */}
            <img 
              src="/images/img_footer_logo.png" 
              alt="Footer Logo" 
              className="w-[51px] h-[19px] sm:w-[76px] sm:h-[28px] md:w-[102px] md:h-[38px]"
            />
            
            {/* Footer Links */}
            <ul className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 py-1.5">
              {footerLinks.map((link, index) => (
                <li key={index} role="menuitem">
                  <a 
                    href={link.href}
                    className="text-global-9 text-sm font-medium hover:text-global-4 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex items-center gap-4 mt-2 lg:mt-0">
            {/* Social Icon 1 */}
            <div className="relative w-[18px] h-[16px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/img_el8uvqlqv.svg')" }}
              >
                <div className="flex flex-col gap-0.5 justify-start items-start w-[8%]">
                  <img src="/images/img_h4gjunyzh.svg" alt="" className="w-[6px] h-[6px] self-end" />
                  <img src="/images/img_h4gjunyzh.svg" alt="" className="w-[6px] h-[6px]" />
                </div>
              </div>
            </div>

            {/* Social Icon 2 */}
            <div className="relative w-[18px] h-[18px] px-1">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/img_nb8qhy58t.svg')" }}
              >
                <div className="flex justify-center items-center w-full h-full">
                  <div className="flex justify-center items-start gap-0 mt-1">
                    <img src="/images/img_h4gjunyzh.svg" alt="" className="w-[6px] h-[1px] mt-1" />
                    <img src="/images/img_qfonxwoye.svg" alt="" className="w-[3px] h-[12px] -ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icon 3 */}
            <div className="relative w-[18px] h-[18px] p-0.5">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/img_vvj8fldvj.svg')" }}
              >
                <div className="flex justify-center items-end w-full h-full p-0.5">
                  <div 
                    className="bg-cover bg-center w-[8px] h-[8px]"
                    style={{ backgroundImage: "url('/images/img_q3v7fjwhv.svg')" }}
                  >
                    <div className="flex justify-end items-start w-4/5 h-full">
                      <div className="w-[2px] h-[2px] bg-global-10 rounded-[1px] mb-1.5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icon 4 */}
            <div className="relative w-[18px] h-[18px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/img_nb8qhy58t.svg')" }}
              >
                <div className="flex flex-col justify-start items-center w-full h-full">
                  <img src="/images/img_uwno1deck.svg" alt="" className="w-[14px] h-[4px]" />
                  <img src="/images/img_uwno1deck.svg" alt="" className="w-[14px] h-[6px] self-end" />
                </div>
                <img src="/images/img_uwno1deck.svg" alt="" className="absolute top-0.5 left-1 w-[6px] h-[16px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-[#d8e7f211] my-6"></div>

        {/* Bottom Section */}
        <div className="relative w-full h-[50px] md:h-[100px]">
          <img 
            src="/images/img_container_100x1920.png" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center h-full px-0 py-4">
            <p className="text-global-4 text-sm">© 2025 Landio Template</p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
              <div className="flex items-center gap-0.5">
                <span className="text-global-4 text-sm">Made by </span>
                <span className="text-global-9 text-sm">Framebase</span>
              </div>
              <a 
                href="mailto:landio@support.com"
                className="text-global-4 text-sm hover:text-global-11 transition-colors duration-200"
              >
                landio@support.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;