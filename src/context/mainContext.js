import { useState, createContext, useContext, useEffect } from 'react'
import { getClientsRequests, postClientsRequest } from '../API/ClientApi'

const maincontext = createContext()

export const useContent = () => {
    const context = useContext(maincontext)
    return context
}

export const MainProvider = ({ children }) => {

    const [contents, setContents] = useState([])

    const getClients = async () => {
        const res = await getClientsRequests()
        setContents(res.data)
    }

    const postClients = async (client) => {
        const res = await postClientsRequest(client)
        setContents([...contents, res.data])
    }
    useEffect(() => {
        getClients()
    }, [])

    return <maincontext.Provider value={{
        contents,
        getClients,
        postClients
    }}>
        {children}
    </maincontext.Provider>
}