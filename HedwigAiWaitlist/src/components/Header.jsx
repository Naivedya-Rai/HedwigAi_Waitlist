import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center py-6">
      <h1 className="text-3xl font-black">hedwigAI.</h1>
      <div className="space-x-2">
        <button 
          className="bg-[#969090] text-white px-6 py-2 rounded-full text-xl font-semibold"
          style={{ width: '119px', height: '46px', padding: '8px 20px', gap: '8px' }}
        >
          Login
        </button>
        <button 
          className="bg-[#393939] text-white px-6 py-2 rounded-full text-xl font-semibold"
          style={{ width: '119px', height: '46px', padding: '8px 20px', gap: '8px' }}
        >
          Sign up
        </button>
      </div>
    </header>
  );
}

export default Header;
