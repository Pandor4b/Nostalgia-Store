import type { CartItem } from "../interfaces/CartItem";
import type { Order } from "../interfaces/Order";

export function addToCartUtil(prevItems: CartItem[], product: Omit<CartItem, "quantity">, setLastAddedItem: (item: CartItem) => void, setShowModal: (show: boolean) => void): CartItem[] {
  const existingItem = prevItems.find((item) => item.id === product.id);
  if (existingItem) {
    return prevItems.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  const newItem = { ...product, quantity: 1 };
  setLastAddedItem(newItem);
  setShowModal(true);
  return [...prevItems, newItem];
}

export function updateQuantityUtil(prevItems: CartItem[], productId: number, quantity: number): CartItem[] {
  return prevItems.map((item) =>
    item.id === productId ? { ...item, quantity } : item
  );
}

export function removeFromCartUtil(prevItems: CartItem[], productId: number): CartItem[] {
  return prevItems.filter((item) => item.id !== productId);
}

export function calculateCartTotal(cartItems: CartItem[]): number {
  return cartItems.reduce((sum, item) => {
    const price = typeof item.price === "string" ? parseFloat(item.price.replace(",", ".")) : Number(item.price);
    return sum + price * item.quantity;
  }, 0);
}

export function generateOrderId(): string {
  return Date.now().toString();
}

export function checkoutUtil(cartItems: CartItem[]): Order {
  return {
    id: generateOrderId(),
    items: cartItems,
    date: new Date().toISOString(),
    total: calculateCartTotal(cartItems),
  };
}
