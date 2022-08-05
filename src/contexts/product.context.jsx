import { createContext, useEffect, useState } from "react";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
import SHOP_DATA from "../shop-data.js";

export const ProductContext = createContext({
    products: [],
    setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const value = { products, setProducts };

    // useEffect(() => {
    //     addCollectionAndDocuments("categories", SHOP_DATA);
    // }, []);

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};
