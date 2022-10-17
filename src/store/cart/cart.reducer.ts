import { AnyAction } from "redux";
import { setCartItems, setIsCartOpen } from "./cart.actions";
import { CartItem } from "./cart.types";

export type CartState = {
    readonly isCartOpen: boolean;
    readonly cartItems: CartItem[];
};

const CART_INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
};

type CartReducer = (state: CartState, action: AnyAction) => CartState;
export const cartReducer: CartReducer = (
    state = CART_INITIAL_STATE,
    action
) => {
    if (setCartItems.match(action)) {
        return { ...state, cartItems: action.payload };
    }
    if (setIsCartOpen.match(action)) {
        return { ...state, isCartOpen: action.payload };
    }
    return state;
};
