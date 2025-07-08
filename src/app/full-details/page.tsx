import { MoveRight } from 'lucide-react'
import React from 'react'

type Props = {}

const FullDetails = (props: Props) => {
  return (
    <div className="h-[100%] md:min-h-screen md:h-[170vh]">
            <div className="w-screen bg-linear-to-b pt-30 from-[#D2D2D2] to-white md:h-[200px] -mt-20 items-center  -z-1">
            </div>
                <div className="flex flex-col md:w-[1370px] px-12 mx-auto">
                    <div className="flex items-center gap-3 text-gray-400">
                        <span>Главная</span>
                        <MoveRight
                            color="#ee1b1b"
                            strokeWidth={1}
                        />
                        <span>Полные сведения</span>
                    </div>
                    <h2 className="text-3xl my-10">
                        Детальная информация о нашей компании
                    </h2>
                    <div className="flex flex-col leading-8 gap-10 text-justify">
                        
                    </div>
                </div>
            
        </div>
  )
}

export default FullDetails