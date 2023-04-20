import axios from 'axios'

export const getClientsRequests = async () => await axios.get('http://localhost:4000/client')
export const postClientsRequest = async (client) => await axios.post('http://localhost:4000/client', client)
export const getClientRequests = async (id) => await axios.get('http://localhost:4000/client/' + id);