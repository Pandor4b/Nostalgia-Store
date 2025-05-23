import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Home />
        )
    }
]);