import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {axiosClient} from "../../utils/axiosClient"


export const getCollectionData = createAsyncThunk("fetchCollectionData", async (body) => {
   
        console.log("we rinside collection slice", body);
        const result = await axiosClient.put("/category/collection", body);
    console.log("this is collection data", result.data);
    return result.data;
   
})




const collectionSlice = createSlice({
    name: "collection",
    initialState: {
        isLoading: false,
        collectionData: [],
        isError: false
    }
    ,

    extraReducers: (builder) => {
        builder.addCase(getCollectionData.pending, (state, action) => {
            state.isLoading = true;
        } )

        builder.addCase(getCollectionData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.collectionData = action.payload;

        })

        builder.addCase(getCollectionData.rejected, (state, action) => {
            console.log("error", action.payload);
            state.isError = true;
        })
    }
})

export default collectionSlice.reducer;