import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = (state.items).findIndex(item => item.product == productId)
            if (indexProductId >= 0) {
                state.items[indexProductId].quantity += quantity
            } else {
                state.items.push({ productId, quantity })
            }

        },
        changeQuentity(state, action) {
            const { productId, quentity } = action.payload;
            console.log(productId, quentity)
            const indexProductId = (state.items).findIndex(item => item.productId === productId)
            if (quentity > 0) {
                state.items[indexProductId].quentity = quentity;
            }
            else {
                delete state.items[indexProductId]
            }
        }
    }
})

export const { addToCart, changeQuentity } = cartSlice.actions;
export default cartSlice.reducer;
