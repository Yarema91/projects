import React from "react";
import { BrowserRouter, HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./features/Navbar";
import Footer from "./features/project/Footer";
import { useAuth } from "./hooks/useAuth";
import HomePage from "./pages/HomePage";


const CardPage = React.lazy(() => import("./pages/CardPage"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));

const App = () => {
    // const {} = useAppSelector(state => state.productReducer.products);
    const { token, login, logout } = useAuth();

    if (!token) {
        return (
            <HashRouter>
                <Navbar />
                <Switch>
                    <Route exact
                        path="/" component={HomePage}
                    />
                    <React.Suspense fallback={<h1>Loading posts...</h1>}>
    
                        <Route path="/card/:id" component={CardPage}
                        />
                        {/* <Redirect path="/" to="/error" exact
                         /> */}
                        <Route path="/error" component={ErrorPage}
                        />
                    </React.Suspense>
    
                </Switch>
                <Footer />
            </HashRouter>
        )
    }
    return (
        <HashRouter>
                <Navbar />
                <Switch>
                    <Route exact
                        path="/" component={HomePage}
                    />
                    <React.Suspense fallback={<h1>Loading posts...</h1>}>
    
                        <Route path="/card/:id" component={CardPage}
                        />
                        {/* <Redirect path="/" to="/error" exact
                         /> */}
                        <Route path="/error" component={ErrorPage}
                        />
                    </React.Suspense>
    
                </Switch>
                <Footer />
            </HashRouter>


    );
    
}

export default App
