import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import ProductList from "./components/products/ProductList";
import Product from "./components/products/Product";
import ProductDetails from "./components/products/ProductDetails";
import Cart from "./components/cart/Cart";
import PageNotFound from "./components/layout/PageNotFound";
import ProductProvider from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details/:id" component={ProductDetails} />
          <Route path="/product" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </ProductProvider>
  );
}

export default App;
