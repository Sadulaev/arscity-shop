'use client';
import axios from 'axios';
import { MoveRight } from 'lucide-react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react'

const Login = () => {

    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const loginFunction = useCallback(async(e:React.FormEvent) => {
      e.preventDefault()
      try{
        const response = await axios.post("http://127.0.0.1:8000/api/auth/jwt/create", {
          email: email,
          password: password
        })
        localStorage.setItem('access_token', response.data.access)
        router?.push('/profile')
        alert('Вы успешно авторизовались!')
      } catch (error){
        alert('Ошибка авторизации!')
        console.log(error);
      }
    }, [])

    return (
      <div className='flex flex-col gap-10 w-[1380px] min-h-screen mx-auto mt-20 px-12'>
        <div className='flex gap-5'>
            <span>Главная</span>
            <MoveRight/>
            <span>Авторизация</span>
        </div>
        <h2 className='text-3xl'>Авторизация</h2>
        <div className='flex flex-col gap-5 w-1/2 mx-auto p-4 custom-shadow bg-cyan-50-100'>
          <h2>Пожалуйста введите ваш логин(email) и пароль</h2>
          <form onSubmit={loginFunction} action="" className='flex flex-col gap-10'>
              <div className='flex items center gap-6'>
                  <label className='w-[80px]' htmlFor="email">E-mail*</label>
                  <input onChange={(e) => setEmail(e.target.value)} id='email' className='bg-gray-300 p-2 focus:outline-none'  type="email" placeholder=''/>
              </div>
              <div className='flex items center gap-6'>
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