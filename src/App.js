import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// pages
import Home from './Pages/Home';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import { Provider } from 'react-redux'
import store from './store/store'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" component={Product} />
          <Route path="/cart" component={Cart} />
        </div>
      </Router>
    );
  }
}

function AppWithStore() {
  return <Provider store={store}><App/></Provider>
}

export default AppWithStore;