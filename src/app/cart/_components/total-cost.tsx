import React from 'react'

type Props = {
  totalPrice: number
}

const TotalCost:React.FC<Props> = ({totalPrice}) => {
  return (
    <div className='flex gap-3 text-2xl mt-20'>
        <h2 className='text-gray-400'>Итоговая стоимость без доставки: </h2>
        <span>{totalPrice} руб.</span>
    </div>
  )
}

export default TotalCost