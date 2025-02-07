"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Define the structure of a cart item
interface CartItem {
  productId: number;
  items: number;
}

// Define the structure of the context
interface AppContextType {
  cart: CartItem[];
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  updateItemQuantity: (productId: number, quantity: number) => void;
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create the provider component
export function AppProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([
    {
      productId: 1,
      items: 1,
    },
    {
      productId: 2,
      items: 3,
    },
  ]);

  // Function to add a product to the cart
  const addToCart = (productId: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.productId === productId
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.productId === productId
            ? { ...item, items: item.items + 1 }
            : item
        );
      } else {
        return [...prevCart, { productId, items: 1 }];
      }
    });
  };

  const updateItemQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return; // Prevent negative numbers

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productId === productId ? { ...item, items: quantity } : item
      )
    );
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.productId !== productId)
    );
  };

  return (
    <AppContext.Provider
      value={{ cart, addToCart, removeFromCart, updateItemQuantity }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to use the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
