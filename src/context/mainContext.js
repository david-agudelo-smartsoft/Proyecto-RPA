import { useState, createContext, useContext, useEffect } from 'react'
import { getClientsRequests } from '../API/ClientApi'


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
    useEffect(() => {
        getClients()
    }, [])

    return <maincontext.Provider value={{
        contents,
        setContents,
        getClients
    }}>
        {children}
    </maincontext.Provider>
}