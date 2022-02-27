import { configureStore } from '@reduxjs/toolkit';
import   authReducer from '../features/auth/authSlice';
import   goalReducer from '../features/goals/goalsSlice';
import candidateReducer from '../features/candidates/candidateSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    candidate: candidateReducer,
  },
});
