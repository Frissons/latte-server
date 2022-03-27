import axios from 'axios';

const API_URL = 'https://matti-nhs.herokuapp.com/api/candidates/';


//Instructions to Get information/data to the backend 
const getCandidate = async () => {
  // const config = {
  //   headers: {
  //     authorization: `Bearer ${token}`
  //   }
  // }
  const response = await axios.get(API_URL+'all')
  return response.data
}

//Instruction to Create candidates to backend
const createCandidate = async (candidateData, token) => {
  const config = {
      headers: {
          authorization: `Bearer ${token}`
      }
  }
  const response = await axios.post(API_URL, candidateData, config)
  return response.data
}

const candidateService = {
  getCandidate,
  createCandidate
}

export default candidateService