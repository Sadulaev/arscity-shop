// 'use client';
// import Image from "next/image"
// import React, { useEffect, useState } from "react"
// import { X } from "lucide-react"
// import { ProductType, useCartStore } from "../../../../store/CartStore"


// type CartItemType = {
//     id?: number,
//     object_id: number,
//     product: ProductType,
//     quantity: number,
//     content_type_display: string,
// }

// const CartItem: React.FC<CartItemType> = ({id, quantity: initialQuantity, object_id, product, content_type_display }) => {
//     const img = `http://127.0.0.1:8000${product?.image1}`
//     const { addToCart, removeFromCart } = useCartStore()


//     const [quantity, setQuantity] = useState(initialQuantity)


//     useEffect(() => {
//         addToCart(content_type_display, object_id, quantity)
//     }, [quantity])

//     const increment = () => setQuantity(prev => prev + 1)
//     const decrement = () => setQuantity(prev => Math.max(1, prev - 1))

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const val = parseInt(e.target.value)
//         if (!isNaN(val) && val > 0) {
//             setQuantity(val)
//         }
//     }

//     if (!product) return null

//     return (
//         <div className="relative w-screen md:w-[1370px] md:h-[160px] mx-auto px-12">
//             <div className="flex gap-13 overflow-hidden">
//                 <div className="flex flex-col">
//                     <h2 className="md:hidden ">{product.name}</h2>
//                     <div className="min-w-[150px] h-[100px] md:w-[212px] md:h-[160px] bg-[#F6F6F6] flex items-center justify-center">
//                     <Image
//                         src={img}
//                         alt="cart-image"
//                         width={212}
//                         height={160}
//                         className=""
//                     />
//                 </div>
//                 </div>
                
//                 <div className="flex flex-col h-[160px] justify-between">
//                     <h2 className="hidden md:block text-[2rem]">{product.name}</h2>
//                     <div className="flex gap-10">
//                         <span><span className="text-gray-400">Производитель:</span> {product.country}</span>
//                         <span><span className="text-gray-400">Коллекция: </span>{product.collection}</span>
//                         <span><span className="text-gray-400">Артикул: </span>5758753287542</span>
//                     </div>
//                     <div className="flex items-center gap-5">
//                         <div className="flex items-center gap-5 h-12">
//                             <div className="flex justify-between px-3 py-1 text-[1rem] bg-[#E9E9E9] w-40">
//                                 <button className="w-10 cursor-pointer bg-white" onClick={decrement}>-</button>
//                                 <input
//                                     type="number"
//                                     value={quantity}
//                                     onChange={handleInputChange}
//                                     className="focus:outline-none w-20 text-center"
//                                     min={1}
//                                 />
//                                 <button className="w-10 cursor-pointer bg-white" onClick={increment}>+</button>
//                             </div>
//                             <div className="text-[1rem] flex justify-between px-3 py-1 bg-[#E9E9E9] w-12">
//                                 <button className="w-[100%] bg-white">м²</button>
//                             </div>
//                         </div>
//                         <div className="flex flex-col text-[0.8rem]">
//                             <span>Цена за м2:</span>
//                             <span>{product.price} рублей</span>
//                         </div>
//                         <div className="ml-12">
//                             <span>Итоговая цена: </span>
//                             <span>{Math.round(quantity * product.price)} рублей</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="h-[1px] w-[100%] bg-red-300 mt-10"></div>
//             <button onClick={() => id !== undefined && removeFromCart(id)} className="absolute top-2 right-2 cursor-pointer"><X /></button>
//         </div>
//     )
// }

// export default CartItem

'use client';
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { X } from "lucide-react"
import { ProductType, useCartStore } from "../../../../store/CartStore"

type CartItemType = {
    id?: number,
    object_id: number,
    product: ProductType,
    quantity: number,
    content_type_display: string,
}

const CartItem: React.FC<CartItemType> = ({id, quantity: initialQuantity, object_id, product, content_type_display }) => {
    const img = `http://127.0.0.1:8000${product?.image1}`
    const { addToCart, removeFromCart } = useCartStore()

    const [quantity, setQuantity] = useState(initialQuantity)

    useEffect(() => {
        addToCart(content_type_display, object_id, quantity)
    }, [quantity])

    const increment = () => setQuantity(prev => prev + 1)
    const decrement = () => setQuantity(prev => Math.max(1, prev - 1))

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value)
        if (!isNaN(val) && val > 0) {
            setQuantity(val)
        }
    }

    if (!product) return null

    return (
        <div className="relative w-full max-w-[1370px] mx-auto px-4 sm:px-12 py-4 border-b border-red-300">
            <div className="flex flex-col md:flex-row gap-4 md:gap-13">
                
                <div className="w-full md:w-[212px] md:h-[160px] md:bg-[#F6F6F6] flex items-center justify-center">
                    <Image
                        src={img}
                        alt="cart-image"
                        width={212}
                        height={160}
                        className="object-contain"
                    />
                </div>

                <div className="flex flex-col justify-between w-full">
                    
                    <h2 className="text-xl sm:text-2xl font-semibold">{product.name}</h2>
                    
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 text-sm sm:text-base mt-2">
                        <span><span className="text-gray-400">Производитель:</span> {product.country}</span>
                        <span><span className="text-gray-400">Коллекция:</span> {product.collection}</span>
                        <span><span className="text-gray-400">Артикул:</span> 5758753287542</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
                        
                        <div className="flex items-center gap-3 h-12">
                            <div className="flex justify-between items-center px-3 py-1 text-sm bg-[#E9E9E9] w-36 sm:w-40">
                                <button className="w-8 sm:w-10 cursor-pointer bg-white" onClick={decrement}>-</button>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={handleInputChange}
                                    className="focus:outline-none w-16 text-center"
                                    min={1}
                                />
                                <button className="w-8 sm:w-10 cursor-pointer bg-white" onClick={increment}>+</button>
                            </div>
                            <div className="text-sm flex justify-center items-center px-3 py-1 bg-[#E9E9E9] w-10 sm:w-12">
                                <button className="w-full bg-white">м²</button>
                            </div>
                        </div>

                        <div className="flex flex-col text-xs sm:text-sm">
                            <span>Цена за м²:</span>
                            <span>{product.price} рублей</span>
                        </div>

                        <div className="mt-2 sm:mt-0">
                            <span>Итоговая цена: </span>
                            <span>{Math.round(quantity * product.price)} рублей</span>
                        </div>
                    </div>
                </div>
            </div>

            <button 
                onClick={() => id !== undefined && removeFromCart(id)} 
                className="absolute top-2 right-2 cursor-pointer"
            >
                <X size={20} />
            </button>
        </div>
    )
}

export default CartItem