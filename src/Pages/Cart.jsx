import React, { Component } from 'react'
import CartItem from '../components/CartItem'
import { Button } from '@material-ui/core';
import * as ProductsApi from '../api/products'

export default class Cart extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        ProductsApi.getAll().then(data => this.setState({ products: data }))
    }

    render () {
        return (
            <div>
                <h1>Products</h1>

                <div className="row">
                    {this.state.products.map(product => {
                        return (
                            <div className={'col-4'}>
                                <CartItem {...product} />
                            </div>
                        )
                    })}
                    <h3>
                        Totale: 2500$
                    </h3>
                    <Button style={{margin: "15px"}} color="primary" variant="contained" size="medium" fullWidth><h5>play</h5></Button>
                </div>
            </div>
        )
    }
}