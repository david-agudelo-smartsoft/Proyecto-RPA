import axios from 'axios'

export const getAgentsRequests = async () => await axios.get('http://localhost:4000/agent')
export const postAgentsRequest = async (agent) => await axios.post('http://localhost:4000/agent', agent)
export const getAgentRequests = async (id) => await axios.get('http://localhost:4000/agent/' + id);
export const updateAgentRequests = async (id, newAgent) => await axios.put('http://localhost:4000/agent/' + id, newAgent);