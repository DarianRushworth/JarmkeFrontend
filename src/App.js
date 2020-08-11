import React from 'react';
import { Switch, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import Navigation from "./components/Navigation"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
        <Switch>
          <Route 
            exact path="/"
            component={HomePage} />
        </Switch>
    </div>
  );
}

export default App;
