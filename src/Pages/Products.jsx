import React, { Component } from 'react'
import Product from '../components/ProductItem'
import * as ProductsApi from '../api/products'

export default class Products extends Component {

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
                                <Product {...product} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}