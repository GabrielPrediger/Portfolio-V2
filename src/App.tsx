import { Header } from 'components'
import React, { useEffect, useState } from 'react'
import { RiLinkedinLine } from 'react-icons/ri'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

const skills = [
  {
    id: 0,
    skillName: 'HTML',
    years: 5,
  },
  {
    id: 1,
    skillName: 'CSS',
    years: 5,
  },
  {
    id: 2,
    skillName: 'JS',
    years: 5,
  },
  {
    id: 3,
    skillName: 'TS',
    years: 5,
  },
  {
    id: 4,
    skillName: 'REACT',
    years: 5,
  },
  {
    id: 5,
    skillName: 'NEXT',
    years: 4,
  },
  {
    id: 6,
    skillName: 'NODE',
    years: 2,
  },
  {
    id: 7,
    skillName: 'PYTHON',
    years: 1,
  },
]

function App(): JSX.Element {
  const [playing, setPlaying] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: true })
  const [progress, setProgress] = useState<number>(0)

  const [state, setState] = useState({
    lvl1: false,
    lvl2: false,
    lvl3: false,
    lvl4: false,
    lvl5: false,
  })

  useEffect(() => {
    if (inView) {
      setPlaying(true)
    }
  }, [inView])

  useEffect(() => {
    let intervalId: NodeJS.Timer

    if (playing) {
      intervalId = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 1
          if (newProgress >= 100 || newProgress < 0) {
            clearInterval(intervalId)
            setPlaying(false)
            return newProgress >= 100 ? 100 : 0
          }
          return newProgress
        })
      }, 70)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [playing, progress])

  useEffect(() => {
    const updateState = (level: string) => {
      setState((prevState) => ({ ...prevState, [level]: true }))
    }

    switch (progress) {
      case 15:
        updateState('lvl1')
        break
      case 40:
        updateState('lvl2')
        break
      case 60:
        updateState('lvl3')
        break
      case 80:
        updateState('lvl4')
        break
      case 100:
        updateState('lvl5')
        break
      default:
        break
    }
  }, [progress, state])

  const translateYearToWidth = (years: number) => {
    if (years === 5) {
      return '100'
    } else if (years === 4) {
      return '85'
    } else if (years === 3) {
      return '60'
    } else if (years === 2) {
      return '40'
    } else if (years === 1) {
      return '10'
    }
  }

  return (
    <div className="h-full w-screen max-w-full">
      <div className=" absolute top-0 z-0 h-full w-full overflow-y-hidden">
        <img
          src={require('assets/images/bg8.png')}
          alt="Bg"
          className="fade-in-image"
        />
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
        <div className="relative top-[60rem] z-[999] flex flex-col gap-72">
          <div className="relative flex flex-col gap-36">
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
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl tracking-[0.5em] text-gray-100" ref={ref}>
                MY SKILLS
              </h1>
              <p className="max-w-[45%] text-justify text-base text-gray-500">
                Com quase <b className="text-gray-300">6 anos</b> de experiencia
                como desenvolvedor, o Front-end development eh onde eu tenho
                mais expertize porem tenho anos de experiencia em projetos
                pessoais e profissionais com o Back-end também
              </p>
            </div>
            <div className="flex gap-10">
              <div className="relative flex flex-1 flex-col gap-4 ">
                <div className="your-element flex text-white">
                  <p
                    className={`${state.lvl1 ? 'opacity-100' : 'opacity-0'} absolute left-[7.9%] top-[-10%] transition-opacity duration-500`}
                  >
                    1
                  </p>
                  <p
                    className={`${state.lvl2 ? 'opacity-100' : 'opacity-0'}  absolute left-[24.3%] top-[-10%] transition-opacity duration-500`}
                  >
                    2
                  </p>
                  <p
                    className={`${state.lvl3 ? 'opacity-100' : 'opacity-0'}  absolute left-[40.8%] top-[-10%] transition-opacity duration-500`}
                  >
                    3
                  </p>
                  <p
                    className={`${state.lvl4 ? 'opacity-100' : 'opacity-0'}  absolute left-[57.4%] top-[-10%] transition-opacity duration-500`}
                  >
                    4
                  </p>
                  <p
                    className={`${state.lvl5 ? 'opacity-100' : 'opacity-0'} absolute left-[73.9%] top-[-10%] font-semibold transition-opacity duration-500`}
                  >
                    5
                  </p>
                </div>
                <div>
                  <div
                    className={`${state.lvl1 ? 'opacity-100' : 'opacity-0'} absolute left-[7%] top-[-2%] h-1 w-5 rotate-90 rounded-full bg-white transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`${progress > 25 ? 'opacity-100' : 'opacity-0'} absolute left-[10%] top-[-2%] h-1 w-24 rounded-full bg-white transition-opacity duration-500`}
                  ></div>
                  <div
                    className={` ${state.lvl2 ? 'opacity-100' : 'opacity-0'} absolute left-[23.5%] top-[-2%] h-1 w-5 rotate-90 rounded-full bg-white transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`${progress > 45 ? 'opacity-100' : 'opacity-0'} absolute left-[26.5%] top-[-2%] h-1 w-24 rounded-full bg-white transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`${state.lvl3 ? 'opacity-100' : 'opacity-0'} absolute left-[40%] top-[-2%] h-1 w-5 rotate-90 rounded-full bg-white transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`${progress > 65 ? 'opacity-100' : 'opacity-0'} absolute left-[43%] top-[-2%] h-1 w-24 rounded-full bg-white transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`${state.lvl4 ? 'opacity-100' : 'opacity-0'} absolute left-[56.5%] top-[-2%] h-1 w-5 rotate-90 rounded-full bg-white transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`${progress > 85 ? 'opacity-100' : 'opacity-0'} absolute left-[59.5%] top-[-2%] h-1 w-24 rounded-full bg-white transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`${state.lvl5 ? 'opacity-100' : 'opacity-0'} absolute left-[73%] top-[-2%] h-1 w-5 rotate-90 rounded-full bg-white transition-opacity duration-500`}
                  ></div>
                </div>
                {skills?.map((data) => (
                  <div key={data.id} className="flex items-center gap-2">
                    <div className="h-2 w-[80%] rounded-full bg-slate-800">
                      <div
                        className={`h-full rounded-full bg-white transition-all`}
                        style={{
                          width: `${progress}%`,
                          transition: 'width 0.7s',
                          maxWidth: `${translateYearToWidth(data.years)}%`,
                        }}
                      />
                    </div>
                    <p className="text-base tracking-[0.5em] text-gray-100">
                      {data.skillName}
                    </p>
                  </div>
                ))}
                <p className="text-gray-700">
                  More deitals on my companies resume
                </p>
              </div>
              <div className="flex flex-1 flex-col"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
