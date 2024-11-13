import { Children, createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  // cart items
  const [carts, setCarts] = useState(0);

  const handleToCart = () => {
    setCarts((prev) => prev + 1);
  };

  const cartInfo = {
    carts,
    handleToCart,
  };

  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
