import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";

const Navigation = () => {
    const { currUser } = useContext(UserContext);

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
                    <Link className={"nav-link"} to={"/auth"}>
                        {currUser ? "SIGN OUT" : "SIGN IN"}
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
