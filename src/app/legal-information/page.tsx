'use client';
import config from '@/utils/config'
import Link from 'next/link'
import React from 'react'


const LegalInformation = () => {

    const handleOpen = () => {  
        window.open(`${config.BASE_URL}/api/pdf/1/preview/`, '_blank')
    }
    return (
        <div className='md:w-[1370px] mx-auto mt-20 px-12'>
            <div className='flex flex-col gap-4 '>
                <h2 className='text-3xl'>Контактная информация</h2>
                <div className='flex flex-col md:flex-row gap-4 text-xl'>
                    <span>Полное наименование компании: </span>
                    <span className='text-red-500'>Компания ......</span>
                </div>
                <div className='flex flex-row gap-4 text-xl'>
                    <span>ИНН: </span>
                    <span className='text-red-500'>000000000000</span>
                </div>
                <div className='flex flex-row gap-4 text-xl'>
                    <span>e-mail: </span>
                    <span className='text-red-500'>aaa.oooo@mail.ru</span>
                </div>
                <div className='flex flex-col md:flex-row gap-4 text-xl'>
                    <span>Адрес:</span>
                    <span className='text-red-500'>переулок А.Шерипова, д. 6, Чеченская Республика, р-н Урус-Мартановский, город Урус-Мартан</span>
                </div>
                <div className='flex flex-row gap-4 text-xl'>
                    <span>Телефон:</span>
                    <Link href="https://wa.me/79990019494">+7 000 000-00-00</Link>
                </div>
                <div className='flex flex-col md:flex-row gap-4 text-xl'>
                    <span>Режим работы:</span>
                    <span className='text-red-500'>ежедневно с 9:00 до 20:00</span>
                </div>
                <div className='flex flex-col md:flex-row gap-4 text-xl'>
                    <span>Номер счёта:</span>
                    <span className='text-red-500'>00000000000000000000</span>
                </div>
                <div className='flex flex-col md:flex-row gap-4 text-xl'>
                    <span>ОГРН/ОГРНИП:</span>
                    <span className='text-red-500'>000000000000000</span>
                </div>
                <div className='flex flex-col md:flex-row gap-4 text-xl'>
                    <span>Банк:</span>
                    <span className='text-red-500'>банка соленых огурцов</span>
                </div>
                <div className='flex flex-col md:flex-row gap-4 text-xl'>
                    <span>БИК:</span>
                    <span className='text-red-500'>000000000</span>
                </div>
                <div className='flex flex-col md:flex-row gap-4 text-xl'>
                    <span>Публичная оферта:</span>
                    <Link href={`${config.BASE_URL}/api/pdf/${1}/download`} className='text-red-500'>скачать</Link>
                    <button onClick={() => handleOpen()} className='text-red-500 cursor-pointer'>посмотреть</button>
                </div>
            </div>
        </div>
    )
}

export default LegalInformation