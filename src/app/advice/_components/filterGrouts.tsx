'use client';
import React from 'react'
import { AdviceType } from '../page';

type Props = {
  advices: AdviceType[],
  setSelected: (id: number) => void,
  selected: number
}

const FiltersGrouts:React.FC<Props> = ({ advices, setSelected, selected}) => {


  return (
    <div className='flex flex-col gap-5 pb-5 md:mb-10 md:mt-10'>
        <>
          <div className='flex items-center gap-3'>
          </div>
          {advices.map((advice, index) => (
            <span
            key={advice?.id}
            onClick={() => setSelected(advice.id - 1)}
            className={`${index === selected ? "bold text-red-500 border-b" : ""} cursor-pointer`}
            >{advice?.title}</span>
          ))}
          

        </>
      </div>
  )
}

export default FiltersGrouts