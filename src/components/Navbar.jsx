import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <ul className="nav nav-tabs">
                <li role="presentation" className="active"><a href="/">Home</a></li>
                <li role="presentation"><a href="/">Profile</a></li>
                <li role="presentation"><a href="/">Messages</a></li>
            </ul>
        )
    }
}