import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";

const selectCartReducer = (state: any): CartState => state.cart;

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (reducer): CartState["isCartOpen"] => reducer.isCartOpen
);

export const selectCartItems = createSelector(
    [selectCartReducer],
    (reducer): CartState["cartItems"] => {
        return reducer.cartItems;
    }
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce<number>(
            (total, cartItem) => total + cartItem.quantity,
            0
        )
);

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce<number>(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );
    }
);
