import axios from 'axios';

const API_URL = '/api/goals/';

//get goal to backend
const getGoals = async (token) => {
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

//Post goal to backend
const createGoal = async (goalData, token) => {
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, goalData, config)
    return response.data
}


//Delete user goal to backend
const deleteGoal = async (goalId, token) => {
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + goalId, config)
    return response.data
}

const goalService = {
    createGoal,
    getGoals,
    deleteGoal
}

export default goalService

