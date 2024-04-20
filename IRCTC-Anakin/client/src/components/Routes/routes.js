import React from "react";
import { Route, Switch } from "react-router-dom";
import Trains from "../Trains/Trains";
import Login from "../User/Login";
import Logout from "../User/Logout";
import Signup from "../User/Signup";
import Admin from "../Admin/Admin";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Trains} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/profile" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
