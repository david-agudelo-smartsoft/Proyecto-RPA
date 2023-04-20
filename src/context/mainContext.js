import { useState, createContext, useContext, useEffect } from 'react'
import { getClientsRequests, postClientsRequest, getClientRequests, updateClientRequests } from '../API/ClientApi'

const maincontext = createContext()

export const useContent = () => {
    const context = useContext(maincontext)
    return context
}

export const MainProvider = ({ children }) => {

    const [contents, setContents] = useState([])

    // Clientes
    const getClients = async () => {
        const res = await getClientsRequests()
        setContents(res.data)
    }

    const postClients = async (client) => {
        const res = await postClientsRequest(client)
        setContents([...contents, res.data])
    }

    const getClientById = async (id) => {
        try {
            const res = await getClientRequests(id);
            console.log(res.data)
            return res.data;
            
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getClients()
    }, [])

    // Agentes
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

    return <maincontext.Provider value={{
        contents,
        getClients,
        postClients,
        getClientById,
        updateClient,
    }}>
        {children}
    </maincontext.Provider>
    
}