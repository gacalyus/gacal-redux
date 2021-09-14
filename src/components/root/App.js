import React from "react";
import { Switch, Route } from "react-router-dom";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";
import CartDetail from "../cart/cartDetail";

function App() {
  return (
    <div>
      <Navi />
      <Switch>
        <Route path="/" exact component={DashBoard} />
        <Route path="/product" exact component={DashBoard} />
        <Route path="/cart" exact component={CartDetail} />
      </Switch>
    </div>
  );
}

export default App;
