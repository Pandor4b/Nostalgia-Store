import type { CartItem } from "./CartItem";

export interface Order {
  id: string; 
  items: CartItem[];
  date: string; 
  total: number;
}
