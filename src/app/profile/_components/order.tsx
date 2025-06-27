import React from 'react'
import { OrdersType } from '../page'

type OrderProps = {
    order: OrdersType
}

const Order = ({order}: OrderProps) => {
  return (
    <div className='flex justify-between items-center py-4'>
        <div className='flex flex-col gap-2'>
            <span>Заказ № {order.id}</span>
            {order.items.map((item) => (
                <p>{item.product.name}, {item.quantity} кв.м. - {item.product.price * item.quantity}</p>
            ))}
        </div>
        <div className='flex flex-col gap-3 text-[1rem]'>
            <div>
                <span>Итоговая цена: </span>
                <span className='text-red-500'>{order.total_price} руб.</span>
            </div>
            <div>
                <div>
                    <span>Оплата: </span>
                    <span className='text-red-500'>{order.payment_method === 'online' ? "Онлайн" : order.payment_method === 'office' ? "Оффис" : "Курьер"}</span>
                </div>
                <div>
                    <span>Статус заказа: </span>
                    <span className='text-red-500'>{order.status === 'pending' ? "Не оплачен" : "Оплачен"}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Order