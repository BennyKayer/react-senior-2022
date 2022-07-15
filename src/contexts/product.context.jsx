import { createContext, useEffect, useState } from "react";
import PRODUCTS from "../shop-data.json";

export const ProductContext = createContext({
    products: [],
    setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const value = { products, setProducts };

    useEffect(() => {
        setProducts(PRODUCTS);
    }, []);

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};
