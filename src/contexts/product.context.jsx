import { createContext, useEffect, useState } from "react";
import {
    addCollectionAndDocuments,
    getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";

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

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
        };
        getCategoriesMap();
    }, []);

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};
