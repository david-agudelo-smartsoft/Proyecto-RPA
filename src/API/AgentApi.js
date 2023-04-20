import axios from 'axios'

export const getAgentsRequests = async () => await axios.get('http://localhost:4000/agent')
export const postAgentsRequest = async (agent) => await axios.post('http://localhost:4000/agent', agent)