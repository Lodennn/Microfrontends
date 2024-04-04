import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Pricing from "./components/Pricing";
import Album from "./components/Landing";
import { StylesProvider } from "@material-ui/core";

const App = () => {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Album} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
