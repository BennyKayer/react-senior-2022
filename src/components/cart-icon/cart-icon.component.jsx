import {
    CartIconContainer,
    ItemCount,
    ShoppingIcon,
} from "./cart-icon.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
    const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);

    const onClick = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <CartIconContainer onClick={onClick}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
