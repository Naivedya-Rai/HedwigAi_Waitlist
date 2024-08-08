
import React from 'react';

export function Button({ text, variant }) {
  const baseStyles = 'px-4 py-2 rounded-full font-bold transition duration-300 cursor-pointer';
  const primaryStyles = 'bg-gray-900 text-white hover:bg-gray-700';
  const secondaryStyles = 'bg-gray-400 text-black border border-white hover:bg-gray-300';

  return (
    <button className={`${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles}`}>
      {text}
    </button>
  );
}
