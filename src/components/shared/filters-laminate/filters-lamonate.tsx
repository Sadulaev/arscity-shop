import React, { useState } from 'react'
import { TileFields } from '@/types/typeLaminate'
import CheckboxLaminate from '@/components/ui/checkbox-laminate'
import { FilterCategory } from '../../../../store/FiltersLaminate'


type FilterLaminateProps = {
    thicknessFilter?: TileFields[]
    title: string,
    value: FilterCategory
}


const CheckBoxListLaminate:React.FC<FilterLaminateProps> = ({thicknessFilter, title, value}) => {

  const [show, setShow] = useState(false)

  if (!thicknessFilter) return null
  
  return (
    <div>
      <h2 className='mb-4 text-[1.5rem]'>{title}</h2>
      <div className='flex flex-col gap-2'>
        {thicknessFilter.length > 5 ? (
          <>
            <div className={`${show ? "" : "h-[110px] overflow-hidden"}`}>
              {thicknessFilter?.map((thickness) => (
                <CheckboxLaminate key={thickness.id} text={thickness.name} id={thickness.id} category={value}/>
              ))}
            </div>
            <span onClick={() => setShow(!show)} className='cursor-pointer text-blue-500 hover:text-red-500'>{!show ? "Показать еще" : "Скрыть"}</span>
          </>
        ) : (
          <>
            {thicknessFilter.map((thickness) => (
              <CheckboxLaminate key={thickness.id} text={thickness.name} id={thickness.id} category={value}/>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default CheckBoxListLaminate