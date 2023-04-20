import { useState, createContext, useContext, useEffect } from 'react'
import { getAgentsRequests, postAgentsRequest, getAgentRequests, updateAgentRequests } from '../API/AgentApi'

const maincontextAgents = createContext()

export const useContentAgent = () => {
    const context = useContext(maincontextAgents)
    return context
}

export const MainProviderAgent = ({ children }) => {

    const [contents, setContents] = useState([])

    // Agentes
    const getAgents = async () => {
        const res = await getAgentsRequests()
        setContents(res.data)
    }

    const postAgents = async (agent) => {
        const res = await postAgentsRequest(agent)
        setContents([...contents, res.data])
    }

    const getAgentById = async (id) => {
        try {
            const res = await getAgentRequests(id);
            return res.data;

        } catch (error) {
            console.error(error);
        }
    };

    const updateAgent = async (id, agent) => {
        const res = await updateAgentRequests(id, agent)
        setContents(contents.map((agent => agent._id === id ? res.data : agent)))
    }
    useEffect(() => {
        getAgents()
    }, [])

    return <maincontextAgents.Provider value={{
        contents,
        getAgents,
        postAgents,
        getAgentById,
        updateAgent
    }}>
        {children}
    </maincontextAgents.Provider>
    
}