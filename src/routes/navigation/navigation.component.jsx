import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";

const Navigation = () => {
    const { currUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
    };

    return (
        <Fragment>
            <div className={"navigation"}>
                <Link className={"logo-container"} to={"/"}>
                    <CrwnLogo className={"logo"} />
                </Link>
                <div className={"nav-links-container"}>
                    <Link className={"nav-link"} to="/shop">
                        SHOP
                    </Link>

                    {currUser ? (
                        <span onClick={signOutHandler} className="nav-link">
                            SIGN OUT
                        </span>
                    ) : (
                        <Link className={"nav-link"} to={"/auth"}>
                            {currUser ? "SIGN OUT" : "SIGN IN"}
                        </Link>
                    )}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
