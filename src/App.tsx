import { Header } from 'components'
import React from 'react'
import { RiLinkedinLine } from 'react-icons/ri'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'

function App(): JSX.Element {
  return (
    <div className="h-full w-screen max-w-full">
      <div className="absolute top-0 z-0 h-full w-full">
        <img src={require('assets/images/bg8.png')} alt="Bg" />
      </div>
      <div className="relative z-[999] flex flex-col px-44">
        <Header />
        <div
          id="name-intro"
          className="relative top-[35vh] flex flex-col items-center gap-1"
        >
          <h1 className="text-8xl font-medium tracking-wide text-[#EEEEEE]">
            Hello World
          </h1>
        </div>
        <div className="relative top-[60rem] flex flex-col">
          <div className="relative z-[999] mb-[40rem] flex flex-col gap-36">
            <h1 className="text-4xl tracking-[0.5em] text-gray-100">
              ABOUT ME
            </h1>
            <div className="flex gap-24 ">
              <div className="relative flex h-[44rem] flex-1 justify-center bg-slate-200">
                <img
                  src={require('assets/images/me4.png')}
                  className="absolute bottom-[-3px] right-0 w-[33rem]"
                  alt="Bg"
                />
              </div>
              <div className="flex flex-1 flex-col gap-10  px-20">
                <div className=" h-1 w-80 bg-green-300" />
                <div className="flex flex-col gap-16 text-white">
                  <span className="flex flex-col gap-1">
                    <h1 className="text-6xl text-gray-100">Gabriel Prediger</h1>
                    <h5 className="text-xl text-gray-600">Software Engineer</h5>
                  </span>
                  <p className="text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="flex gap-5 text-green-300">
                    <RiLinkedinLine size={25} />
                    <FaWhatsapp size={25} />
                    <MdOutlineMailOutline size={25} />
                    <FaGithub size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
