import React from 'react'
import { Button, TextField, Grid } from '@material-ui/core'

import { getById } from '../api/products'
import { addToCart } from '../store/actions/actions'
import { connect } from 'react-redux'

class Product  extends React.Component {

    state = {
        loading: true,
        Quatity: 1,
        product: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id
        getById(parseInt(id)).then(product => this.setState({ product, loading: false }))
    }

    handeleQuantity = (e) => {
        const value = e.target.value
        if (value < 1) return
        this.setState({ Quatity: value })
    }

    addToCart = product => {
        this.props.addToCart(product, parseInt(this.state.Quatity))
    }

    render() {
        if ( this.state.loading )
            return 'loading ..'
        const product = this.state.product
        const Quatity = this.state.Quatity
        return (
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={product.image} width='100%' />
                    </div>
                    <div className="col-sm-6">
                        <h1>{product.name}</h1>
                        <p>Price: {product.price}</p>
                        <p>{product.description}</p>
                        <br/><br/>

                        <input value={Quatity} onChange={this.handeleQuantity} min="1" className="form-control" type="number"/>
                        {/*<br/>
                        <p>Total: <span style={{fontWeight: "bold"}}>{Quatity * product.price}$</span></p>
                        <button className="btn btn-primary">Add to Cart</button> */}
                        {/* <TextField fontSize="18px" name="creator" variant="outlined" size="large" label="Quatity" fullWidth /> */}
                        <br/><br/>
                        <Button variant='contained' color='primary' size="large" onClick={() => this.addToCart(product)} >Add to Cart</Button>

                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (productInfo, quantity) => dispatch(addToCart(productInfo, quantity))
    }
}
export default connect(null, mapDispatchToProps)(Product)