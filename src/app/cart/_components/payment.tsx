import Image from 'next/image'
import React from 'react'

type Props = {
    paymentMethod: string,
    setPaymentMethod: (e:string) => void
}

const Payment:React.FC<Props> = ({paymentMethod, setPaymentMethod}) => {

    
  return (
    <div className='mt-20'>
        <h2 className='text-2xl mb-5'>Выберите способ оплаты</h2>
        <div className='flex flex-col md:flex-row gap-18 md:items-center'>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                    <input 
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        checked={paymentMethod === "office"} 
                        type="radio" 
                        value="office" 
                        name="payment" 
                        id="office" 
                        className='accent-blue-500'
                    />
                    <label htmlFor="office">Оплата в  офисе продаж</label>
                </div>
                <div className='flex gap-2'>
                    <input 
                        onChange={(e) => setPaymentMethod(e.target.value)} 
                        type="radio" 
                        name="payment" 
                        id="online" 
                        value="online" 
                        className='accent-blue-500'
                    />
                    <label htmlFor="online">Онлайн оплата</label>
                </div>
                <div className='flex gap-2'>
                    <input 
                        onChange={(e) => setPaymentMethod(e.target.value)} 
                        type="radio" 
                        name="payment" 
                        id="courier" 
                        value="courier"
                        className='accent-blue-500'
                    />
                    <label htmlFor="courier">Оплата при доставке курьеру</label>
                </div>
            </div>
            <div className='flex items-center p-2 gap-4 bg-[#F4F4F4]'>
                <Image src="" alt='' width={50} height={30}/>
                <Image src="" alt='' width={50} height={30}/>
                <Image src="" alt='' width={50} height={30}/>
                <Image src="" alt='' width={50} height={30}/>
                <Image src="" alt='' width={50} height={30}/>
            </div>
        </div>
    </div>       
  )
}

export default Payment