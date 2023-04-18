import { useState, createContext } from 'react';
import { getClientsRequest } from '../API/Client';

const mainContext = createContext()

export const useMain = () =>{
    const context = useState(mainContext)
    return context
}

export const MainProvaider = ({ children }) => {
    const [main, setMain] = useState([])

    const getClients = async () =>{
        const res = await getClientsRequest()
        console.log(res)
    }

    return <mainContext.Provider value={{
        main,
    }}>
        {children}
    </mainContext.Provider>
}