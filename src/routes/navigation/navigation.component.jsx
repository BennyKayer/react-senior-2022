import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import {
    NavigationContainer,
    LogoContainer,
    NavLink,
    NavLinks,
} from "./navigation.styles";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";

import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selectors";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();

    const signOutHandler = () => {
        dispatch(signOutStart());
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
