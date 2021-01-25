import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Add from "./components/users/Add";
import Users from "./components/users/Users";
import Header from "./components/Header";
import SingleUser from "./components/users/SingleUser";
import Home from "./components/Home";
import Posts from "./components/posts/Posts";
import AddPost from "./components/posts/AddPost";
import SinglePost from "./components/posts/SinglePost";
import EditPost from "./components/posts/EditPost";
import SinglePostHome from "./components/posts/SinglePostHome";
import Signin from "./components/authorization/Signin";
import Signup from "./components/authorization/Signup";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          {/* User */}
          <Route path="/register">
            <Add />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/single-user/:id">
            <SingleUser />
          </Route>
          
          {/* Post */}
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/add-post">
            <AddPost />
          </Route>
          <Route path="/single-post/:id">
            <SinglePost />
          </Route>
          <Route path="/edit-post/:id">
            <EditPost />
          </Route>
          <Route path="/single-post-home/:id">
            <SinglePostHome />
          </Route>

          {/* auth */}
          <Route path='/signin'>
            <Signin />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
