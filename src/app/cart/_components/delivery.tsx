import { LocationEdit } from 'lucide-react'
import React from 'react'

type Props = {
    setDelivery: (e:string) => void,
    setAddressDelivery: (e:string) => void
    delivery: string
}

const Delivery:React.FC<Props> = ({setDelivery, setAddressDelivery, delivery}) => {
  return (
    <div className='mt-20'>
        <h2 className='text-2xl mb-5'>Информация о доставке</h2>
        <div className='flex gap-20 items-center'>
            <div className='flex flex-col gap-1 flex-1/4'>
                <div className='flex gap-2'>
                    <input
                    onChange={(e) => setDelivery(e.target.value)}
                    type="radio" name="delivery" id="delivery" value="delivery" className='accent-blue-500'/>
                    <label htmlFor="delivery">Доставка со склада на ваш объект</label>
                </div>
                <div className='flex gap-2'>
                    <input
                    onChange={(e) => setDelivery(e.target.value)}
                    type="radio" name="delivery" id="pickup" value="pickup" className='accent-blue-500'/>
                    <label htmlFor="pickup">Самовывоз со склада</label>
                </div>
            </div>
            <div className='flex items-center p-2 gap-4 bg-[#F4F4F4]'>
                {delivery === "delivery" ? (
                    <div className='w-[504px] h-[36px] bg-white text-[0.8rem] relative'>
                    <input onChange={(e) => setAddressDelivery(e.target.value)} type="text" placeholder='Укажите адрес доставки' className='w-[100%] h-[100%] pl-2 focus:outline-none'/>
                    <LocationEdit className='absolute right-2 top-[calc(50%-10px)]' width={20} height={20}/>
                </div>
                ) : (
                    ""
                )}
                <div className='flex flex-col text-[0.8rem]'>
                    <span>Доставка по Урус-Мартану - бесплатно</span>
                    <span>Доставка за пределы Урус-Мартана - 20 рублей/км</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delivery