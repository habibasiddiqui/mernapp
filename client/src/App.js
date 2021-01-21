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
import DeletePost from "./components/posts/DeletePost";
import Products from "./components/products/Products";
import AddProduct from "./components/products/AddProduct";
import SingleProduct from "./components/products/SingleProduct";

function App() {
  return (
    <Router>
      <div>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Add />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/single-user/:id">
            <SingleUser />
          </Route>


          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/add-post">
            <AddPost />
          </Route>
          <Route path="/single-post/:id">
            <SinglePost />
          </Route>



          <Route path="/products">
            <Products />
          </Route>
          <Route path="/add-product">
            <AddProduct />
          </Route>
          <Route path="/single-product/:id">
            <SingleProduct/>
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
