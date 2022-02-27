import axios from 'axios';

const API_URL = '/api/candidates/';

// Get candidates
const getCandidate = async (token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`
    }
  }
  const response = await axios.get(API_URL, config)
  return response.data
}


const candidateService = {
  getCandidate,
}

export default candidateService