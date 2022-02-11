import React from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./features/HomePage";
import CardPage from "./features/CardPage";
import Navbar from "./features/Navbar";
import Footer from "./features/project/Footer";
// import { useAppSelector } from "./hooks/redux";


const App = () => {
    // const {} = useAppSelector(state => state.productReducer.products);

    return (
        <HashRouter>
            <Navbar />
            <Switch>
                <Route exact
                    path="/" component={HomePage}
                />
                <Route path="/card/:id"
                    component={CardPage}
                />
            </Switch>
            <Footer />
        </HashRouter>
    )
}

export default App
