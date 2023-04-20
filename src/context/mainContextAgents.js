import { useState, createContext, useContext, useEffect } from 'react'
import { getAgentsRequests, postAgentsRequest } from '../API/AgentApi'

const maincontextAgents = createContext()

export const useContentAgent = () => {
    const context = useContext(maincontextAgents)
    return context
}

export const MainProvider = ({ children }) => {

    const [contents, setContents] = useState([])

    const getAgents = async () => {
        const res = await getAgentsRequests()
        setContents(res.data)
    }

    const postAgents = async (agent) => {
        const res = await postAgentsRequest(agent)
        setContents([...contents, res.data])
    }
    useEffect(() => {
        getAgents()
    }, [])

    return <maincontextAgents.Provider value={{
        contents,
        getAgents,
        postAgents
    }}>
        {children}
    </maincontextAgents.Provider>
}