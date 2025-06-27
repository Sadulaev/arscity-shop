'use client';
import React, { useState } from 'react'
import { SkirtingBoardTYpe } from '../page'
import { X } from 'lucide-react';

type Props = {
  handleChange: (e:React.ChangeEvent<HTMLInputElement>, index: number) => void,
  resetFilters: () => void,
  selectedSkirtingBoards: string[]
}

const FiltersSkirtingBoard:React.FC<Props> = ({handleChange, resetFilters,selectedSkirtingBoards}) => {

  const skirtingBoardVariety = [
    {
      id: 0,
      title: "МДФ",
      value: "mdf"
    },
    {
      id: 1,
      title: "Алюминевый",
      value: "aluminum"
    },
    {
      id: 2,
      title: "Дюрополимер",
      value: "duropolymer"
    },
    {
      id: 3,
      title: "Ламинированный",
      value: "laminated"
    },
    {
      id: 4,
      title: "Шпонированный",
      value: "veneered"
    }
  ]
  return (
    <div className='flex flex-col gap-5 pb-5 mb-10 mt-10'>
        <>
          <div className='flex items-center gap-3'>
            <span>Фильтры</span>
            <div onClick={() => resetFilters()} className='flex items-center gap-2 cursor-pointer'>
              <span>Сбросить</span>
              <X size={16} color='red'/>
            </div>
          </div>
          {skirtingBoardVariety.map((variaty, index) => (
            <label
              key={variaty.value}
              htmlFor={variaty.value}
              className="flex gap-3 items-center transition-all delay-100"
            >
              <input
                className="hidden"
                id={variaty.value}
                value={variaty.value}
                onChange={(e) => handleChange(e, index)}
                type="checkbox"
              />
              <div
                className={`w-[20px] h-[20px] border rounded-[2px] ${
                  selectedSkirtingBoards.includes(variaty.value) ? "bg-red-700" : ""
                }`}
              ></div>
              <span
                className={`hover:text-red-700 transition-all delay-100 ${
                  selectedSkirtingBoards.includes(variaty.value) ? "text-red-700 font-bold" : "text-gray-700"
                }`}
              >
                {variaty.title}
              </span>
            </label>
          ))}
          

        </>
      </div>
  )
}

export default FiltersSkirtingBoard