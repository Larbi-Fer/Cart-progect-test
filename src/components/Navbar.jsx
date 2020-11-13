import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import CardIcon from './Carticon';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav navbar-left">
                    <li role="presentation"><NavLink to="/">Home</NavLink></li>
                    <li role="presentation"><NavLink to="/products">Products</NavLink></li>
                    <li role="presentation"><NavLink to="/cart">Cart</NavLink></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li role="presentation"><CardIcon /></li>
                </ul>
            </nav>
        )
    }
}