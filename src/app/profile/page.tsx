'use client';
import { MoveRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Order from './_components/order'
import axios from 'axios'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export type OrdersTypeItemProduct = {
    id: number,
    name: string,
    price: number,
}

export type OrdersTypeItem = {
    id: number,
    product: OrdersTypeItemProduct
    quantity: number
}

export type OrdersType = {
    id: number,
    created_at: string,
    status: string,
    payment_receipt_url: string, 
    first_name: string,
    last_name: string,
    patronymic: string,
    phone: string,
    email: string,
    comment:string,
    delivery_method: string,
    delivery_address: string,
    payment_method: string,
    total_price: string,
    items:OrdersTypeItem[]
}   




const Profile = () => {

    const [auth, setAuth] = useState(false)
    const router = useRouter()
    const [orders, setOrders] = useState<OrdersType[]>([])
    useEffect(() => {
        const isAuth = async () => {
            try {
                const token = localStorage.getItem('access_token');
                if (!token) {
                    router.push('/auth/register');
                    return;
                }

                const response = await axios.get("http://127.0.0.1:8000/api/user/me/", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.status === 200) {
                    setAuth(true);
                console.log(response);
                
                } else {
                    router.push('/auth/register');
                }
            } catch (error) {
                console.error(error);
                router.push('/auth/register');
            }
        };

        isAuth();
    }, [router]);

    useEffect(() => {
        const fetchOrder = async() => {
            try{
                const response = await axios.get("http://127.0.0.1:8000/api/order/orders/", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                        'Content-Type': 'application/json',
                    }
                })
                setOrders(response.data)
                console.log("response.data", response.data);
                
            } catch(error) {
                console.log(error);
            }
        }
        fetchOrder()
        
    }, [])

    if (!auth) return <div>Loadig...</div>

    return (
       <>
            <div className='w-screen bg-linear-to-b -mt-30 from-[#D2D2D2] to-white h-[200px]  items-center  -z-1'>
            </div>
            <div className='flex flex-col w-[1370px] px-12 mx-auto'>
                <div className='flex items-center gap-3 text-gray-400'>
                    <span>Главная</span>
                    <MoveRight color="#ee1b1b" strokeWidth={1} />
                    <span>Профиль</span>   
                </div>
                <h2 className='text-3xl my-10'>Линый кабинет</h2>
                <div className='flex items-center gap-10 mb-4'>
                    <span className='border border-solid border-red-400 px-4 py-2 bg-red-500 text-white'>МОИ ЗАКАЗЫ</span>
                    <Link href="/favorites">МОИ ИЗБРАННЫЕ (31)</Link>
                </div>
                <div className='w-full h-[1px] bg-red-400 mb-10'></div>
                <div>
                    {orders.length > 0 ? (
                        orders.map((order) => (
                            <>
                                <Order key={order.id} order={order}/>
                                <div className='h-[1px] bg-red-500'></div>
                            </>
                        ))
                    ) : (   
                        <div>У вас нет пока заказов</div>
                    )}
                    
                </div>
            </div>
        </>
   
        
    )
}

export default Profile