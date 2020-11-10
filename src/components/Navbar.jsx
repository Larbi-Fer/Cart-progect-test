import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav">
                    <li role="presentation"><NavLink activeClassName="active" to="/">Home</NavLink></li>
                    <li role="presentation"><NavLink activeClassName="active" to="/products">Products</NavLink></li>
                    <li role="presentation"><NavLink activeClassName="active" to="/cart">Cart</NavLink></li>
                </ul>
            </nav>
        )
    }
}