import {createSlice , createAsyncThunk, isAsyncThunkAction} from '@reduxjs/toolkit';

const initialState = {
    goals: [],
    isSuccess: false,
    isLoading: false,
    isError: false,
    message: ''
}


//Create a new Goal
export const createGoal = createAsyncThunk('goals/create', async (goalData, ThunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await goalService.createGoal(goalData)
        
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




export const goalSlice = createSlice({
    name: 'goal',
    initialState, 
    reducers: {
        reset: (state) => initialState,
    }

})

export const {reset} = goalSlice.actions
export default goalSlice.reducer