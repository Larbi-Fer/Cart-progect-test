import React from 'react'

export default function Product(props) {
    return (
        <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
            <img src={props.image} alt="..."/>
            <div class="caption">
                <h3>{props.name}</h3>
                <p>Price {props.price}$</p>
                <p><a href={`/products/${props.id}`} class="btn btn-primary" role="button">Details</a></p>
            </div>
            </div>
        </div>
    )
}