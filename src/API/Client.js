import axios from 'axios'

export const getClientsRequest = async () => await axios.get('http://localhost:4000/client') 