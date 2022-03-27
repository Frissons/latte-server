import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import candidateService from './candidateService';

const initialState = {
    candidates: [],
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

// Read/All method  candidate/s public
export const getCandidates = createAsyncThunk(
    'candidate/viewall', async(_, thunkAPI) => {
        try {
            //const token = thunkAPI.getState().auth.user.token;
            return await candidateService.getCandidate()
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
    } 
)

export  const candidateSlice = createSlice({
    name: 'candidate',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        //state during registration
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

        //state during fetching data
        .addCase(getCandidates.pending, (state) => {
            state.isLoading= true
        })
        .addCase(getCandidates.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.candidates = action.payload
        })
        .addCase(getCandidates.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})
export const {reset} = candidateSlice.actions;
export default candidateSlice.reducer;