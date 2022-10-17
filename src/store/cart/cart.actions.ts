import { CartItem, CART_ACTION_TYPES } from "./cart.types";
import { createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { CategoryItem } from "../categories/category.types";

type AddCartItem = (
    cartItems: CartItem[],
    productToAdd: CategoryItem
) => CartItem[];
const addCartItem: AddCartItem = (cartItems, productToAdd) => {
    const existingItem = cartItems.find((item) => item.id === productToAdd.id);
    if (existingItem) {
        return cartItems.map((item) =>
            item.id === productToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    } else {
        return [...cartItems, { ...productToAdd, quantity: 1 }];
    }
};

type RemoveCartItem = (
    cartItems: CartItem[],
    cartItemToRemove: CartItem
) => CartItem[];
const removeCartItem: RemoveCartItem = (cartItems, cartItemToRemove) => {
    const existingItem = cartItems.find(
        (item) => item.id === cartItemToRemove.id
    );

    if (existingItem && existingItem.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== cartItemToRemove.id
        );
    }
    return cartItems.map((item) =>
        item.id === cartItemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
    );
};

const clearCartItem: RemoveCartItem = (cartItems, cartItemToRemove) => {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
};

export type SetIsCartOpen = ActionWithPayload<
    CART_ACTION_TYPES.SET_IS_CART_OPEN,
    boolean
>;
export const setIsCartOpen = withMatcher(
    (boolean: boolean): SetIsCartOpen =>
        createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export type SetCartItems = ActionWithPayload<
    CART_ACTION_TYPES.SET_CART_ITEMS,
    CartItem[]
>;
export const setCartItems = withMatcher(
    (cartItems: CartItem[]): SetCartItems =>
        createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
    cartItems: CartItem[],
    productToAdd: CategoryItem
) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems);
};

export const removeItemFromCart = (
    cartItems: CartItem[],
    cartItemToRemove: CartItem
) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems);
};

export const clearItemFromCart = (
    cartItems: CartItem[],
    cartItemToRemove: CartItem
) => {
    const newCartItems = clearCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems);
};
