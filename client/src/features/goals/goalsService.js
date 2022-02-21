import axios from 'axios';

const API_URL = '/api/goals/';

//create new goal
const createGoal = async (goalData, token) => {
const config ={
    headers: {
        authorization: `Bearer ${token}`
        }
    }
}