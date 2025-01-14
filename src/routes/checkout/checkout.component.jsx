import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import {
    selectCartItems,
    selectCartItemsTotal,
} from "../../store/cart/cart.selectors";
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartItemsTotal);

    return (
        <div className={"checkout-container"}>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => {
                const { id } = cartItem;
                return <CheckoutItem key={id} cartItem={cartItem} />;
            })}
            <span className={"total"}>Total: ${cartTotal}</span>
            <PaymentForm />
        </div>
    );
};

export default Checkout;
