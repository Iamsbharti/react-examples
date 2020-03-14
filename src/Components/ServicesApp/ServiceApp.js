import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import ServiceList from "./services/ServiceList";
import ServiceDetails from "./services/ServiceDetails";
import { Route, Switch } from "react-router-dom";

function ServiceApp() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={ServiceList} />
        <Route path="/services/:serviceId" component={ServiceDetails} />
      </Switch>
    </div>
  );
}
export default ServiceApp;
