import React from 'react';
import { Switch, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductsPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/Sign-UpPage"
import ProductDetails from "./pages/ProductDetails"
import Navigation from "./components/Navigation"
import Profilepage from "./pages/ProfilePage"
import ShoppingCart from './pages/ShoppingCart';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
        <Switch>
          <Route 
            exact path="/"
            component={HomePage} 
          />
          <Route
            path="/productsPage"
            component={ProductPage}
          />
          <Route
            path="/login"
            component={LoginPage}
          />
          <Route
            path="/signup"
            component={SignUpPage}
          />
          <Route
            path="/moreDetails/:id"
            component={ProductDetails}
          />
          <Route
            path="/profilePage"
            component={Profilepage}
          />
          <Route
            path="/cartCheckout"
            component={ShoppingCart}
          />
          <Route
            path="/payment"
            component={PaymentPage}
          />
        </Switch>
    </div>
  );
}

export default App;
