import { createStore } from 'redux';
import cartReduer from './reducers'

const initialState = {
    cart: [
        {
            product: {
                "id": 1,
                "name": "mobile",
                "price": 200,
                "image": "/img/mobile1.jpg",
                "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident necessitatibus recusandae debitis omnis cupiditate similique nesciunt ullam at! Eligendi officiis quia commodi aut natus assumenda vel molestias, voluptate illo modi."
            },
            quantity: 2
        },
        {
            product: {
                "id": 2,
                "name": "ios",
                "price": 250,
                "image": "/img/mobile2.jpg",
                "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident necessitatibus recusandae debitis omnis cupiditate similique nesciunt ullam at! Eligendi officiis quia commodi aut natus assumenda vel molestias, voluptate illo modi."
            },
            quantity: 1
        }
    ]
}

function reducers(state) {
    return state
}

const store = createStore(cartReduer, initialState)

export default store