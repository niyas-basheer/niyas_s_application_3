import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  fullWidth = false,
  leftImage = null,
  rightImage = null,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center';
  
  const variants = {
    primary: 'bg-[linear-gradient(180deg,#10131c_0%,_#d8e7f211_100%)] text-global-12 hover:opacity-90 disabled:opacity-50 border border-[#d8e7f211]',
    secondary: 'bg-global-2 text-global-4 hover:opacity-90 disabled:opacity-50 border border-[#d8e7f211]',
    outline: 'border border-[#d8e7f211] text-global-4 hover:bg-global-2 disabled:opacity-50',
  };
  
  const sizes = {
    small: 'px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm',
    medium: 'px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base',
    large: 'px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg',
  };
  
  const buttonClasses = `
    ${baseClasses} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${fullWidth ? 'w-full' : ''} 
    ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {leftImage && (
        <img 
          src={leftImage.src} 
          alt="" 
          className="mr-2" 
          style={{ width: leftImage.width, height: leftImage.height }}
        />
      )}
      {children}
      {rightImage && (
        <img 
          src={rightImage.src} 
          alt="" 
          className="ml-2" 
          style={{ width: rightImage.width, height: rightImage.height }}
        />
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  fullWidth: PropTypes.bool,
  leftImage: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  }),
  rightImage: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  }),
  className: PropTypes.string,
};

export default Button;