import React, { Component } from 'react'
import CartItem from '../components/CartItem'
import { Button } from '@material-ui/core';
// import * as ProductsApi from '../api/products'
import { connect } from 'react-redux';
import { clearCart } from '../store/actions/actions';

class Cart extends Component {

    placeOrder = () => {
        // send the request to the server
        // clear cart
        this.props.clearCart()
    }

    render () {
        return (
            <div>
                <h1>Products</h1>

                {this.props.products.length === 0 ? <div style={{textAlign: 'center'}}><h2>No Products in cart</h2></div> : (
                    <div>
                        <div className="row">
                            {this.props.products.map((item, index) => {
                                return (
                                    <div className={'col-4'} key={item.product.id}>
                                        <CartItem {...item.product} quantity={item.quantity} index={index} />
                                    </div>
                                )
                            })}
                        </div>
                        <h3>
                            Totale: <b>{this.props.total}$</b>
                        </h3>
                        <Button onClick={this.placeOrder} style={{margin: "15px"}} color="primary" variant="contained" size="medium" fullWidth><h5>Place order</h5></Button>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
        products: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearCart: () => dispatch(clearCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)