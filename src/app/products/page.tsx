import Filters from '@/components/shared/filters-tile'
import React from 'react'

type Props = {}

const Products = (props: Props) => {
  return (
    <div className='flex gap-5 w-[1370px] h-[1000px] mx-auto mt-10 px-12 pt-5'>
        <div>
            <Filters/>
        </div>
        <div>Products</div>
    </div>
  )
}

export default Products