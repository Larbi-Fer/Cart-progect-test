import React from 'react'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/DeleteRounded'

import '../main.css'

export default function Product(props) {
    return (
        <div className="col-sm-6 col-md-3">
            <div className="thumbnail">
            <img src={props.image} alt="..."/>
            <div className="caption">
                <h3>{props.name}</h3>
                <p>Price {props.price}$</p>
                <p>Quantity: 1</p>
                <p>Totale: <span>{props.price}$</span></p>
                <br/>
                <p>
                    <Link to={`#`} >
                        <Button spacing={3} variant='outlined' size="large" color="secondary" >
                            <DeleteIcon />&nbsp;
                            Delete
                        </Button>
                    </Link>
                </p>
            </div>
            </div>
        </div>
    )
}