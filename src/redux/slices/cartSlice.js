import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartData: []
    },

    reducers: {
        addToCart: (state, action) => {
            const product = action.payload.data
            console.log("this is action payload", product);
            const curItem = {
                name: product.name,
                key: product._id,
                price: product.price,
                image: product.image.url
            };

            console.log("this is current item", curItem);
            
            const index = state.cartData.findIndex(item => item.key === curItem.key);
            console.log("this the index", index);
            if(index === -1) {
                state.cartData.push({...curItem, quantity: 1})
                console.log("we have added new item");
            } else {
                state.cartData[index].quantity += 1;
                console.log("we have added old item");
            }
        },


        removeFromCart: (state, action) => {
            const curKey = action.payload?.data?.key || action.payload.key;

            const index = state.cartData.findIndex(
                (item) => item.key === curKey
            );

            if(index === -1) return;
            if(state.cartData[index].quantity === 1) {
                state.cartData = state.cartData.filter(
                    item => item.key !== curKey
                )
            } else {
                state.cartData[index].quantity -= 1;
            }
        },

    //an action to remove item
        resetCart: (state, action) => {
            state.cartData = []
        }
            
            
    }
    
})

export default cartSlice.reducer;
export const {addToCart, removeFromCart, resetCart} = cartSlice.actions;