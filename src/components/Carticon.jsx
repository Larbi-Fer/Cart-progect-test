import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Carticon.css'

function CartIcon(props){
    return (
        <div id="cart-icon">
            <Link to="/cart">
                <i className="glyphicon glyphicon-shopping-cart"></i>
                <span className="badge badge-danger">{props.totalQuantity}</span>
            </Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        totalQuantity: state.cart.reduce((total, item) => total + item.quantity, 0)
    }
}

export default connect(mapStateToProps)(CartIcon)