import { create } from 'zustand'
import axios from 'axios'
import config from '@/utils/config';


export interface ProductType {
  id: number;
  name: string;
  image1?: string;
  price: number;
  country: string;
  collection?: string;
}


export interface CartResponseItem {
  id: number;
  object_id: number;
  quantity: number;
  content_type_display: string;
  content_type: string;
  product: ProductType;
}

interface CartListStore {
  cartList: CartResponseItem[];
  totalPrice: number;
  fetchCart: () => Promise<void>;
  fetchTotalPrice: () => Promise<void>;
  addToCart: (content_type: string, object_id: number, quantity: number) => Promise<void>;
  removeFromCart: (cartItemId: number) => Promise<void>;
  resetCart: () => void
}


export const useCartStore = create<CartListStore>((set) => ({
  cartList: [],
  totalPrice: 0,

  fetchCart: async () => {
    try {
      const response = await axios.get(`${config.BASE_URL}/api/order/cart/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      set({ cartList: response.data })
    } catch (error) {
      console.log(error)
    }
  },

  fetchTotalPrice: async () => {
    try {
      const response = await axios.get(`${config.BASE_URL}/api/order/cart/total/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      set({ totalPrice: response.data.total_price })
    } catch (error) {
      console.log(error)
    }
  },

  addToCart: async (content_type, object_id, quantity = 1) => {
    try {
      await axios.post(`${config.BASE_URL}/api/order/cart/`, {
        content_type,
        object_id,
        quantity
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });

      const [cartRes, totalRes] = await Promise.all([
        axios.get(`${config.BASE_URL}/api/order/cart/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        }),
        axios.get(`${config.BASE_URL}/api/order/cart/total/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        })
      ])

      set({
        cartList: cartRes.data,
        totalPrice: totalRes.data.total_price
      })

    } catch (error) {
      console.log(error)
    }
  },

  removeFromCart: async (cartItemId) => {
    try {
      await axios.delete(`${config.BASE_URL}/api/order/cart/${cartItemId}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        },
      })

      set((state) => ({
        cartList: state.cartList.filter(item => item.id !== cartItemId)
      }))

      const totalRes = await axios.get(`${config.BASE_URL}/api/order/cart/total/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      set({ totalPrice: totalRes.data.total_price })

    } catch (error) {
      console.log(error)
    }
  },
  resetCart: () => {
    set({cartList: [], totalPrice: 0})
  }
}))