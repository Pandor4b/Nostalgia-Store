import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import {
  addToCartUtil,
  updateQuantityUtil,
  removeFromCartUtil,
  checkoutUtil,
} from "./CartUtils";
import type { CartItem } from "../interfaces/CartItem";
import type { Order } from "../interfaces/Order";

interface CartContextType {
  cartItems: CartItem[];
  cartCount: number;
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  lastAddedItem: CartItem | null;
  orders: Order[];
  checkout: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });

  const [showModal, setShowModal] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState<CartItem | null>(null);
  const [orders, setOrders] = useState<Order[]>(() => {
    const stored = localStorage.getItem("orders");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    setCartItems((prevItems) =>
      addToCartUtil(prevItems, product, setLastAddedItem, setShowModal)
    );
    setLastAddedItem({ ...product, quantity: 1 });
    setShowModal(true);
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      updateQuantityUtil(prevItems, productId, quantity)
    );
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => removeFromCartUtil(prevItems, productId));
  };

  const checkout = () => {
    if (cartItems.length === 0) return;
    const order = checkoutUtil(cartItems);
    setOrders((prev) => [order, ...prev]);
    setCartItems([]);
    setShowModal(false);
    setLastAddedItem(null);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        updateQuantity,
        removeFromCart,
        showModal,
        setShowModal,
        lastAddedItem,
        orders,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
