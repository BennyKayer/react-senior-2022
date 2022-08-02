import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,
    cartItems: [],
    setCartItems: () => null,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItems,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
