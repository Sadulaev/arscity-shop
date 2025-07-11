'use client';
import axios from 'axios';
import { MoveRight } from 'lucide-react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Login = () => {

    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log(email, password);
    const loginFunction = async(e:React.FormEvent) => {
      e.preventDefault()
      try{
        const response = await axios.post("http://127.0.0.1:8000/api/auth/jwt/create", {
          email: email,
          password: password
        })
        console.log(email, password, response.data);
        localStorage.setItem('access_token', response.data.access)
        console.log(email, password, response.data);
        
        router?.push('/profile')
        alert('Вы успешно авторизовались!')
      } catch (error){
        console.log(email, password);
        alert('Ошибка авторизации!')
        console.log(error);
      }
    }

    return (
      <div className='flex flex-col gap-10 w-screen md:w-[1380px] md:min-h-screen mx-auto mt-20 px-12'>
        <div className='flex gap-5'>
            <span>Главная</span>
            <MoveRight/>
            <span>Авторизация</span>
        </div>
        <h2 className='text-3xl'>Авторизация</h2>
        <div className='flex flex-col w-[100%] gap-5 md:w-1/2 mx-auto p-2 md:p-4 custom-shadow bg-cyan-50-100'>
          <h2>Пожалуйста введите логин(email) и пароль</h2>
          <form onSubmit={loginFunction} action="" className='flex flex-col gap-5 md:gap-10'>
              <div className='flex flex-col gap-2 md:flex-row md:items-center md:gap-6'>
                  <label className='w-[80px]' htmlFor="email">E-mail*</label>
                  <input onChange={(e) => setEmail(e.target.value)} id='email' className='bg-gray-300 p-2 focus:outline-none'  type="email" placeholder=''/>
              </div>
              <div className='flex flex-col gap-2 md:flex-row md:items-center md:gap-6'>
                  <label className='w-[80px]' htmlFor="password">Пароль*</label>
                  <input onChange={(e) => setPassword(e.target.value)} id='password' className='bg-gray-300 focus:outline-none p-2' type="password" placeholder=''/>
              </div>
              <button className=' py-3 bg-red-500 text-white font-bold uppercase hover:scale-[1.03] transition-all duration-200'>Авторизоваться</button>
          </form>
          <span>Если вы еще не зарегистрированы, пройдите, пожалуйста, <Link className='text-blue-500' href="/auth/register">регистрацию!</Link></span>
        </div>
      </div>
    )
}

export default Login