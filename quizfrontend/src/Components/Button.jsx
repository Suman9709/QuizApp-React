import React from 'react';

const Button = ({ label, onClick, disabled }) => {
  return (
    <button
      className={`border-1 border-red-500 p-2 bg-amber-500 text-white font-semibold shadow-lg rounded-md transition-transform ease-in-out duration-300 cursor-pointer hover:bg-blue-500 hover:scale-110 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={onClick}
      disabled={disabled} 
    >
      {label}
    </button>
  );
};

export default Button;
