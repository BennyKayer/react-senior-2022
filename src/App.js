import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
    const dispatch = useDispatch();

    // Permanently open listener
    // call once and it will run callback on every authStateChange
    // whether signIn or signOut
    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch]);

    return (
        <Routes>
            <Route path={"/"} element={<Navigation />}>
                <Route index={true} element={<Home />} />
                <Route path={"shop/*"} element={<Shop />} />
                <Route path={"auth"} element={<Authentication />} />
                <Route path={"checkout"} element={<Checkout />} />
            </Route>
        </Routes>
    );
};

export default App;
