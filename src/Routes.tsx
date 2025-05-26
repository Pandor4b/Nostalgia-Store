import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";
import OrderHistory from "./pages/OrderHistory";
import Favorites from "./pages/Favorites";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/cart",
    element: <ShoppingCart />,
  },
  {
    path: "/orders",
    element: <OrderHistory />,
  },
  {
    path:"/favorites",
    element: <Favorites/>
  }
]);
