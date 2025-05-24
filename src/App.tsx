import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme";
import { RouterProvider } from "react-router";
import { Router } from "./Routes";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={Router} />
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
