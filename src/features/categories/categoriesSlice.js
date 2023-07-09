import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

    export const getCatigories = createAsyncThunk(
        "categories/getCatigories",
         async (_, thunkAPI) => {
    try{
        const res = await axios(`${BASE_URL}/categories`)
        return res.data
    } catch(err){
        console.log(err);
        return thunkAPI.rejectWithValue(err)
    }
    }

    )



 const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        list: [],
        isLoading: false
    },
    extraReducers: (builder) => {
            builder.addCase(getCatigories.pending, (state) => {
                state.isLoading = true
            });
            builder.addCase(getCatigories.fulfilled, (state, { payload }) => {
                state.list = payload;
                state.isLoading = false
            });
            builder.addCase(getCatigories.rejected, (state) => {
                state.isLoading = false
            });
    }
 })

 export default categoriesSlice.reducer