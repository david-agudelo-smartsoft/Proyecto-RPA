import axios from 'axios'

export const getClientsRequests = async () => await axios.get('http://localhost:4000/client')