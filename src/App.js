import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom"
import { useDispatch } from "react-redux"

import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductsPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/Sign-UpPage"
import ProductDetails from "./pages/ProductDetails"
import Navigation from "./components/Navigation"
import Profilepage from "./pages/ProfilePage"
import ShoppingCart from './pages/ShoppingCart';
import CheckoutPage from "./pages/CheckoutPage"
import { validateUser } from "./store/User/actions"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js"
import "./App.css"

const stripePromise = loadStripe("pk_test_51HGVaXE1l9Lb6wo5PB3AAwHvhJxQvN3AHSNc9KOijpgpcB44vjw5IgF1MX09Rl5T1WFHQe7HtQS3UP0oNkNFJMiz00zLZRunTA")

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(validateUser())
  }, [dispatch])

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
          <Elements stripe={stripePromise}>
          <Route
            path="/cartCheckout"
            component={ShoppingCart}
          />
          <Route
            path="/purchase"
            component={CheckoutPage}
          />
          </Elements>
        </Switch>
    </div>
  );
}

export default App;
