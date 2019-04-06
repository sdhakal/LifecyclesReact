import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom";

//COMPONENTS
import Home from "./components/home";
import Posts from "./components/posts";
import Profile from "./components/profile";
import PostItem from "./components/post_item";
import Life from "./components/lifecycles";
import Conditional from "./components/conditional";
import User from "./components/user";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavLink
            exact
            to="/"
            activeStyle={{ color: "red" }}
            activeClassName="selected"
          >
            Home
          </NavLink>
          <br />
          <NavLink to="/posts">Posts</NavLink>
          <br />
          <NavLink
            to={{
              pathname: "/profile"
            }}
          >
            Profile
          </NavLink>
          <br />
          <NavLink to="/life">Life</NavLink>
          <br />
          <NavLink to="/conditional">Conditional</NavLink>
          <br />
          <NavLink to="/user">User</NavLink>
          <br />
          <hr />
        </header>
        <Switch>
          <Route path="/posts" exact component={Posts} />
          <Route path="/posts/:id/:username" component={PostItem} />
          <Route path="/profile" component={Profile} />
          <Route path="/life" component={Life} />
          <Route path="/conditional" component={Conditional} />
          <Route path="/user" component={User} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
