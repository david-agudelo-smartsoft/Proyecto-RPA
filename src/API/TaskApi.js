import axios from 'axios'

export const getTasksRequests = async () => await axios.get('http://localhost:4000/task?limit=10')
export const getTaskRequests = async (id) => await axios.get('http://localhost:4000/task/' + id);
export const updateTaskRequests = async (id, newTask) => await axios.put('http://localhost:4000/task/' + id, newTask);