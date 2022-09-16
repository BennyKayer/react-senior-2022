import {
    CartIconContainer,
    ItemCount,
    ShoppingIcon,
} from "./cart-icon.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.actions";
import {
    selectIsCartOpen,
    selectCartItemsCount,
} from "../../store/cart/cart.selectors.js";

const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartItemsCount);

    const onClick = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    };

    return (
        <CartIconContainer onClick={onClick}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
