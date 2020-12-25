import React from "react";
import SearchForm from "../search-form/search-form";
import Structure from '../structure/structure';
import UserCardSpace from "../user-card-space/user-card-space";
import logo from '../../assets/image 2.png';
import UserDetailsComponent from "../user-details/user-details";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const ContentComponent = () => {
  return (
    <div>
      <Router>

        <Switch>
          <Route exact path="/">
            <SearchForm />
            <Structure />
            <UserCardSpace />
          </Route>
          <Route path="/details">
            <UserDetailsComponent />
          </Route>
        </Switch>

      </Router>
    </div>
  );
};
export default ContentComponent;
