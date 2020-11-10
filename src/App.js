import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Products from './Pages/Products';
import Cart from './Pages/Cart';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/products" exut component={Products} />
          <Route path="/cart" component={Cart} />
        </div>
      </Router>
    );
  }
}

export default App;
