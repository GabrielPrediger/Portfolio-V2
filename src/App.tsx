import React from 'react';

function App() {
  return (
    <div className="w-screen max-w-full">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="text-5xl text-[#FFD1E3] font-sans">
        Hello, my name is Gabriel
      </div>

      <div className="origin-center rotate-180 w-[40rem] h-[40rem] shadow-lg shadow-slate-500/50 rounded-full bg-moon absolute bottom-[-45%] right-[35%]"></div>
    </div>
  );
}

export default App;
