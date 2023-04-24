import { useState, createContext, useContext, useEffect } from 'react'
import { getTasksRequests } from '../API/TaskApi'

const maincontextTask = createContext()

export const useContentTask = () => {
    const contextTask = useContext(maincontextTask)
    return contextTask
}

export const TaskProvider = ({ children }) => {

    const [contentsTask, setContentsTask] = useState([])

    // Tareas
    const getTasks = async () => {
        const res = await getTasksRequests()
        setContentsTask(res.data.slice(0, 10))
    }

    useEffect(() => {
        getTasks()
    }, [])

    return <maincontextTask.Provider value={{
        contentsTask,
        getTasks
    }}>
        {children}
    </maincontextTask.Provider>

}