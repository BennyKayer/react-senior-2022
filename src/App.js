import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component'
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Navigation />}>
                <Route index={true} element={<Home />} />
            </Route>
        </Routes>
    );
};

export default App;
