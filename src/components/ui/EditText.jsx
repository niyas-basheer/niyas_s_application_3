import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditText = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  type = 'text',
  disabled = false,
  leftImage = null,
  rightImage = null,
  className = '',
  ...props 
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const baseClasses = 'w-full bg-global-2 text-global-4 border border-[#d8e7f211] rounded-[3px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-[0px_1px_1px_#cfe7ff33]';
  
  const inputClasses = `
    ${baseClasses}
    ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="relative flex items-center w-full">
      {leftImage && (
        <img 
          src={leftImage.src} 
          alt="" 
          className="absolute left-3 z-10" 
          style={{ width: leftImage.width, height: leftImage.height }}
        />
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        disabled={disabled}
        className={`${inputClasses} ${leftImage ? 'pl-[44px]' : 'pl-3'} ${rightImage ? 'pr-[44px]' : 'pr-3'} py-[10px] text-sm`}
        {...props}
      />
      {rightImage && (
        <img 
          src={rightImage.src} 
          alt="" 
          className="absolute right-3 z-10" 
          style={{ width: rightImage.width, height: rightImage.height }}
        />
      )}
    </div>
  );
};

EditText.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
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

export default EditText;