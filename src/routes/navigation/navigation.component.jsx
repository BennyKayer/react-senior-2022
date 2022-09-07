import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import {
    NavigationContainer,
    LogoContainer,
    NavLink,
    NavLinks,
} from "./navigation.styles.jsx";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector.js";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const { isCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
    };

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to={"/"}>
                    <CrwnLogo className={"logo"} />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">SHOP</NavLink>

                    {currentUser ? (
                        <NavLink onClick={signOutHandler} as={"span"}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to={"/auth"}>
                            {currentUser ? "SIGN OUT" : "SIGN IN"}
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
