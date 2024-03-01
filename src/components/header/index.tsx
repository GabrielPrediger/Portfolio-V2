import React from 'react'
import { headerLinks } from './HeaderLinks'

type HeaderLinks = {
  id: number
  content: string | JSX.Element
}

export const Header: React.FC = () => {
  return (
    <div
      id="header"
      className="flex items-start justify-between  bg-[#0000002c] px-[20rem] pb-5 pt-8 text-white shadow-2xl "
    >
      {headerLinks.map((data: HeaderLinks) => (
        <div
          key={data?.id}
          className={`${data.id === 3 && 'pulsating-arrow'} cursor-pointer text-sm hover:opacity-70`}
        >
          {data?.content}
        </div>
      ))}
    </div>
  )
}
