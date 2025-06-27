import React from "react"


export const SceletonCard = () => {



  return(
    <div className='w-[281px] h-[539px] flex flex-col gap-[30px] justify-between p-3 bg-gray-200 rounded-[2px] hover:bg-gray-400 hover:text-white transition-all delay-100'>
        <div className='flex items-center justify-between'>
            <span></span>
        </div>
        <span></span>
    </div>
  )
}