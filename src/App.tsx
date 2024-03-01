import { Header } from 'components/header'
import React from 'react'

function App(): JSX.Element {
  return (
    <div className="h-full w-screen max-w-full">
      <div className="absolute top-0 z-0 h-full w-full">
        <img src={require('assets/images/bg4.png')} alt="Bg" />
      </div>
      <div className="relative z-[999] flex flex-col px-44">
        <Header />
        <div
          id="name-intro"
          className="relative top-[35vh] flex flex-col items-center gap-1 "
        >
          <h1 className="text-7xl font-medium text-[#EEEEEE]">
            Gabriel Prediger
          </h1>
          <p className="text-xl text-white">Software Engineer</p>
        </div>
      </div>
    </div>
  )
}

export default App
