import axios from 'axios'

export const getBotsRequests = async () => await axios.get('http://localhost:4000/bot')
export const postBotsRequest = async (bot) => await axios.post('http://localhost:4000/bot', bot)
export const getBotRequests = async (id) => await axios.get('http://localhost:4000/bot/' + id);
export const updateBotRequests = async (id, newBot) => await axios.put('http://localhost:4000/bot/' + id, newBot);