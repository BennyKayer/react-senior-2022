import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (reducer) => reducer.isCartOpen
);

export const selectCartItems = createSelector(
    [selectCartReducer],
    (reducer) => {
        return reducer.cartItems;
    }
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );
    }
);
