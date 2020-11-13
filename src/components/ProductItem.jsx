import React from 'react'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

import '../main.css'

export default function Product(props) {
    return (
        <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
            <img src={props.image} alt="..."/>
            <div class="caption">
                <h3>{props.name}</h3>
                <p>Price {props.price}$</p>
                <p>
                    <Link to={`/products/${props.id}`} >
                        <Button spacing={3} variant='outlined' size="large" color="primary" >
                            Details
                        </Button>
                    </Link>
                </p>
            </div>
            </div>
        </div>
    )
}