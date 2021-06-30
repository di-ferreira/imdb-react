import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from "../pages/Main";
import MovieDetails from "../pages/MovieDetails";


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/movie" component={MovieDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
