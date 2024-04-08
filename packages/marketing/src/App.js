import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Pricing from "./components/Pricing";
import Album from "./components/Landing";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
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
