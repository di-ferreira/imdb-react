import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Favorites from "../pages/Favorites";
import Main from "../pages/Main";
import MovieDetails from "../pages/MovieDetails";
import Search from "../pages/Search";

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/movie/:id" component={MovieDetails} />
                <Route path="/movie" component={Search} />
                <Route path="/favorites" component={Favorites} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
