import React from "react";
import { Route, Switch } from "react-router-dom";
import Pages from "./pages";

function App() {
  // return <Pages.SearchBooks />;
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Pages.SearchBooks} />
      </Switch>
    </div>
  );
}

export default App;
