import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import candidateService from './candidateService';

const initialState = {
    votes: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create Candidate
export const  regCandidate = createAsyncThunk(
    'candidate/register',
    async (candiData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await candidateService.createGoal(candiData, token)
            
        } catch (error) {
            const message =
                (
                    error.response &&
                    error.response.data &&
                    error.response.data.message
                ) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    })



export  const candidateSlice = createSlice({
    name: 'candidate',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(regCandidate.pending, (state) => {
            state.isLoading = true
        })
        .addCase(regCandidate.fulfilled, (state, action) => {
            state.isLoading = true
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(regCandidate.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
    }
})
export const {reset} = candidateSlice.actions;
export default candidateSlice.reducer;