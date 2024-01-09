import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {axiosClient} from "../../utils/axiosClient"

export const getProductDetails = createAsyncThunk("fetchProductDetails", async (body) => {
    const result = await axiosClient.put("/product", body);
    return result;
})


export const getAllProducts = createAsyncThunk("fetchAllProducts", async () => {
   
    console.log("we rinside collection slice");
    const result = await axiosClient.get("/home/getAllProducts");
    console.log("this is allproducts data", result.data);
    return result.data;

})



const productDetailSlice = createSlice({
    name: "productDetails",
    initialState: {
        isLoading: false,
        productData: '',
        allProductsData: [],
        isError: false
    },

    extraReducers: (builder) => {
        builder.addCase(getProductDetails.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(getProductDetails.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productData = action.payload;
        })

        builder.addCase(getProductDetails.rejected, (state, action) => {
            console.log("error", action.payload);
            state.isError = true;
            
        })




        builder.addCase(getAllProducts.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allProductsData = action.payload;
        })

        builder.addCase(getAllProducts.rejected, (state, action) => {
            console.log("error", action.payload);
            state.isError = true;
            
        })


        
    }
})

export default productDetailSlice.reducer;