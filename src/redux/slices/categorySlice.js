import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {axiosClient} from "../../utils/axiosClient"




export const getCategoryData = createAsyncThunk("fetchCategoryData", async() => {
    const result = await axiosClient.get("/category");
    console.log("this is result in categoryslice",result.data);
    return result.data;
})


export const getBestSellerData = createAsyncThunk("fetchBestSellerData", async() => {
    const result = await axiosClient.get("/home/bestSeller");
    console.log("this is result in getBestSellerData",result.data);
    return result.data;
})


export const getNewArrivalData = createAsyncThunk("fetchNewArrivalData", async() => {
    const result = await axiosClient.get("/home/newArrival");
    console.log("this is result in new Arrival",result.data);
    return result.data;
})




const categorySlice = createSlice({
    name: "category",
    initialState: {
        isLoading: false,
        categoryData: [],
        bestSellerData: [],
        newArrivalData: [],
        isError: false
    },

    extraReducers: (builder) => {
        builder.addCase(getCategoryData.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(getCategoryData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categoryData = action.payload;
        })

        builder.addCase(getCategoryData.rejected, (state, action) => {
            console.log("error", action.payload);
            state.isError = true;
        })

        
        builder.addCase(getBestSellerData.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(getBestSellerData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.bestSellerData = action.payload;
        })

        builder.addCase(getBestSellerData.rejected, (state, action) => {
            console.log("error", action.payload);
            state.isError = true;
        })


        builder.addCase(getNewArrivalData.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(getNewArrivalData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.newArrivalData = action.payload;
        })

        builder.addCase(getNewArrivalData.rejected, (state, action) => {
            console.log("error", action.payload);
            state.isError = true;
        })
    }
});

export default categorySlice.reducer;