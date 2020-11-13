import React from 'react'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/DeleteRounded'
import { connect } from 'react-redux';

import { removeFromCart } from '../store/actions/actions'
import '../main.css'

function Product(props) {
    return (
        <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
            <img src={props.image} alt="..."/>
            <div className="caption">
                <h3>{props.name}</h3>
                <p>Price {props.price}$</p>
                <p>Quantity: {props.quantity}</p>
                <b><p>Totale: {props.quantity * props.price}$</p></b>
                <br/>
                <p>
                    <Button onClick={() => props.removeFromCart(props.index)} spacing={3} variant='outlined' size="large" color="secondary" >
                        <DeleteIcon />&nbsp;
                        Delete
                    </Button>
                </p>
            </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (index) => dispatch(removeFromCart(index))
    }
}

export default connect(null, mapDispatchToProps)(Product)