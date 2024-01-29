import React from 'react';
// @ts-ignore
import image from '../src/assets/images/art.jpg';

function App() {
  return (
    <div className="w-screen max-w-full h-full ">
      {/* <img className="w-screen z-[0] absolute" src={image} alt="Space" /> */}
      <div id="stars" />
      <div className="meteor-1"></div>
      <div className="meteor-2"></div>
      <div className="meteor-3"></div>
      <div className="meteor-4"></div>
      <div className="meteor-5"></div>
      <div className="meteor-6"></div>
      <div className="meteor-7"></div>
      <div className="meteor-8"></div>
      <div className="meteor-9"></div>
      <div className="meteor-10"></div>
      <div className="meteor-11"></div>
      <div className="meteor-12"></div>
      <div className="meteor-13"></div>
      <div className="meteor-14"></div>
      <div className="meteor-15"></div>

      <div className="flex justify-center item-center w-full h-full relative top-[20rem]">
        <h1 className="text-[#EEEEEE] text-7xl">Gabriel Prediger</h1>
      </div>
      <div className="block w-[100%] h-[120rem] bg-[#070707] relative top-[40rem] rounded-full"></div>
    </div>
  );
}

export default App;
