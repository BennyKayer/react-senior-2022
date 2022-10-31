import { Routes, Route } from "react-router-dom";

import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./store/user/user.action";
import Spinner from "./components/spinner/spinner.component";

import { GlobalStyle } from "./global.styles";

const Shop = lazy(() => import("./routes/shop/shop.component"));
const Authentication = lazy(() =>
    import("./routes/authentication/authentication.component")
);
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
const Home = lazy(() => import("./routes/home/home.component"));
const Navigation = lazy(() =>
    import("./routes/navigation/navigation.component")
);

const App = () => {
    const dispatch = useDispatch();

    // Permanently open listener
    // call once and it will run callback on every authStateChange
    // whether signIn or signOut
    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch]);

    return (
        <Suspense fallback={<Spinner />}>
            <GlobalStyle />
            <Routes>
                <Route path={"/"} element={<Navigation />}>
                    <Route index={true} element={<Home />} />
                    <Route path={"shop/*"} element={<Shop />} />
                    <Route path={"auth"} element={<Authentication />} />
                    <Route path={"checkout"} element={<Checkout />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default App;
