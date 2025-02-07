"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface CartItem {
  productId: number;
  items: number;
}

interface AppContextType {
  cart: CartItem[];
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  updateItemQuantity: (productId: number, quantity: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const CART_STORAGE_KEY = "nvh_cart";

export function AppProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

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

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
