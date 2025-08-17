

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { mmkvStorage } from './storage';

interface CartItem {
  _id: string | number;
  item: any;
  count: number;
}

interface CartStore {
  cart: CartItem[];
  addItem: (item: any) => void;
  removeItem: (id: string | number) => void;
  clearCart: () => void;
  getItemCount: (id: string | number) => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addItem: item => {
        const currentCart = get().cart;
      },
      clearCart: () => set({ cart: [] }),
      removeItem: () => {},
      getItemCount: id => {
        const currentItem = get().cart.find(cartItem => cartItem._id === id);
        return currentItem ? currentItem?.count : 0;
      },
      getTotalPrice: () => {
        return get().cart.reduce(
          (total, cartItem) => total + cartItem.item.price * cartItem.count,
          0,
        );
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => mmkvStorage),
    },
  ),
);
