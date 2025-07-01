import Link from 'next/link'
import React from 'react'

type Props = {
    setSurname: (e:string) => void
    setFirstName: (e:string) => void
    setPatronymic: (e:string) => void
    setPhone: (e:string) => void
    setEmail: (e:string) => void
    setComment: (e:string) => void
}

const ContactDetails:React.FC<Props> = ({setSurname, setFirstName, setPatronymic, setPhone, setEmail, setComment,}) => {
  return (
    <div className='mt-20'>
        <h2 className='text-2xl mb-5'>Укажите контактные данные</h2>
        <div className='flex flex-col'>
            <div className='flex flex-col md:w-1/3 gap-5 mb-10'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Фамилия*</label>
                    <input onChange={(e) => setSurname(e.target.value)} type="text" placeholder='Иванов' className='bg-[#E9E9E9]  h-11 px-2'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Имя*</label>
                    <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder='Иван' className='bg-[#E9E9E9]  h-11 px-2'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Отчество*</label>
                    <input onChange={(e) => setPatronymic(e.target.value)} type="text" placeholder='Иванович' className='bg-[#E9E9E9]  h-11 px-2'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Телефон*</label>
                    <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder='Телефон' className='bg-[#E9E9E9]  h-11 px-2'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">email*</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email' className='bg-[#E9E9E9]  h-11 px-2'/>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <span>Комментарий (при необходимости)</span>
                <textarea onChange={(e) => setComment(e.target.value)} name="" id="" cols={82} className='bg-[#E9E9E9] p-2 md:w-1/3'></textarea>
            </div>
            
        </div>
    </div>       
  )
}

export default ContactDetails