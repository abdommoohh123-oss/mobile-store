import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import CartProvider from "./context/CartContext";
import SearchProvider from "./context/SearchContext";
import WishlistProvider from "./context/WishlistContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <SearchProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </SearchProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);