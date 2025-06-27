'use client';
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

import React, { useState } from 'react'
type Selects = {
    option: string;
    link?: string
}

type Props = {
    options: Selects[]
    title: string;
}

const Dropdown: React.FC<Props> = ({options, title}) => {

    const [open, setOPen] = useState(false);
    const handleOpen = () => {
        setOPen(!open)
    }

  return (
    <div className='relative'>
        <div onClick={handleOpen} className="flex gap-2.5 cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:left-0 after:bottom-0 after:transition-transform after:origin-left after:duration-300 hover:after:scale-x-100 pb-1">
            <span  className="">{title}</span>
            <ChevronDown/>
        </div>
        
     
        <ul className={`flex flex-col justify-between w-[200px] bg-white absolute top-[30px] -left-4 z-[10000] transition-all duration-200 ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
            {options.map((option, index) => (
                <li key={index} className='border-b-gray-400 hover:bg-gray-300 duration-200 p-4'><Link href={!option.link ? "#" : option.link}>{option.option}</Link></li>
            ))}
            
            
        </ul>
      
        
    </div>
  )
}

export default Dropdown