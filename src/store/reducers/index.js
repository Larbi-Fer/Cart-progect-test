import { ADD_TO_CART } from "../actions/types"

export default function createReducer(state, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                cart: [
                    ...state.cart,
                    {
                        product: action.productsInfo,
                        quantity: action.quantity
                    }
                ]
            }
        default:
            return state
    }
}