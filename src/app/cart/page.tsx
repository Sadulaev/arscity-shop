'use client';
import { useCartStore } from '../../../store/CartStore'
import CartItem from './_components/cart-item'
import TotalCost from './_components/total-cost'
import Delivery from './_components/delivery'
import Payment from './_components/payment'
import ContactDetails from './_components/contact_details'
import { Heart, MoveRight } from 'lucide-react'

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import axios from 'axios';
import EmptyCart from './_components/empty-cart';


const Cart = () => {
  const { cartList, totalPrice, fetchCart, fetchTotalPrice } = useCartStore()
  const [delivery, setDelivery] = useState("")
  const [addressDelivery, setAddressDelivery] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [surname, setSurname] = useState("")
  const [firstName, setFirstName] = useState("")
  const [patronymic, setPatronymic] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")
  const [privacyPolicy, setPrivacyPolicy] = useState(false)


  

  console.log(cartList);
  

  const submitOrder = async () => {
    try {
      const token = localStorage.getItem('access_token');

      const response = await axios.post(
        'http://127.0.0.1:8000/api/order/orders/create/',
        {
            first_name: firstName,
            last_name: surname,
            middle_name: patronymic,
            phone: phone,
            email: email,
            comment: comment,
            delivery_method: delivery,
            payment_method: paymentMethod,
            address: addressDelivery,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Заказ оформлен:', response.data);
      alert('Заказ успешно оформлен!');
    } catch (error) {
      console.error('Ошибка оформления заказа:', error);
      alert('Произошла ошибка при оформлении заказа');
    }
  };


  useEffect(() => {
    fetchCart()
    fetchTotalPrice()
  }, [totalPrice])


  if (cartList.length === 0) return <EmptyCart/>

  return (
    <div className='flex flex-col gap-5 min-h-screen mb-30'>
      {/* Шапка */}
      <div className='w-screen bg-linear-to-b pt-30 from-[#D2D2D2] to-white h-[200px] -mt-20 flex items-center'>
        <div className='flex justify-between w-[1370px] mx-auto px-12'>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3 text-gray-400'>
              <span>Главная</span>
              <MoveRight color="#ee1b1b" strokeWidth={1} />
              <span>Карзина</span>   
            </div>
          </div>
          <button className='flex gap-3 items-center border border-gray-400 py-4 px-15 uppercase hover:bg-red-500 hover:text-white hover:border-none transition-all duration-200 z-50'>
            <Heart/>
            <span>ДОБАВИТЬ в избранное</span>
          </button>
        </div>
      </div>


    
      <div className='w-[1370px] mx-auto px-12 mb-5'>
        <h2 className='text-2xl'>Карзина заказа</h2>
      </div>

      <div className='flex flex-col gap-20'>
        {cartList.map(cart => (
          <CartItem key={cart.object_id} {...cart} />
        ))}
      </div>

      <div className='flex flex-col w-[1370px] mx-auto px-12'>
        <TotalCost totalPrice={totalPrice} />
        <Delivery setDelivery={setDelivery} setAddressDelivery={setAddressDelivery} delivery={delivery} />
        <Payment setPaymentMethod={setPaymentMethod}/>
        <ContactDetails setSurname={setSurname} setFirstName={setFirstName} setPatronymic={setPatronymic} setPhone={setPhone} setEmail={setEmail} setComment={setComment}/>
        <div className='flex gap-3 items-center'>
            <input onChange={(e) => setPrivacyPolicy(!privacyPolicy)} type="checkbox" />
            <span>согласен с <Link href="" className='text-blue-600'>политикой конфиденциальности</Link></span>
        </div>
        <div className='flex items-end justify-between'>
          <TotalCost totalPrice={totalPrice} />
          <button 
          onClick={() => submitOrder()} 
          className={`${!privacyPolicy ? 'pointer-events-none' : 'cursor-pointer'} px-20 py-3 bg-red-500 text-white uppercase font-bold`}>
            оформить заказ
          </button>
        </div>
      </div>
       
    </div>
  )
}

export default Cart