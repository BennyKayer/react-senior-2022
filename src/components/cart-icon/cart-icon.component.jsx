import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
    const { setIsCartOpen, isCartOpen, cartItemsCount } =
        useContext(CartContext);

    const onClick = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className={"cart-icon-container"} onClick={onClick}>
            <ShoppingIcon className={"shopping-icon"} />
            <span className={"item-count"}>{cartItemsCount}</span>
        </div>
    );
};

export default CartIcon;
