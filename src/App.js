import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// layouts
import LandingPageLayout from "./layouts/LandingPage";

// pages
import HomePage from "./pages/HomePage";
import Admin from "./pages/admin/admin";

const App = () => {
  return (
    <Switch>
      {/* <Route path="/">
        <LandingPageLayout heading="Hiền mua bàn phím đi alo">
          <HomePage />
        </LandingPageLayout>
        <Route path="/home" component={HomePage} />
      </Route> */}
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={Admin} />
          <LandingPageLayout heading="Hiền mua bàn phím đi alo">
            <Route path="" component={Admin} />
            <Route path="/home" component={HomePage} />
          </LandingPageLayout>
        </Switch>
      </BrowserRouter>
    </Switch>
  );
};

export default App;
