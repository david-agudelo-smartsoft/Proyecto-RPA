import { useState, createContext, useContext, useEffect } from 'react'
import { getBotsRequests, postBotsRequest, getBotRequests, updateBotRequests } from '../API/BotApi'

const maincontextBots = createContext()

export const useContentBot = () => {
    const context = useContext(maincontextBots)
    return context
}

export const MainProviderBot = ({ children }) => {

    const [contents, setContents] = useState([])

    // Bots
    const getBots = async () => {
        const res = await getBotsRequests()
        setContents(res.data)
    }

    const postBots = async (bot) => {
        const res = await postBotsRequest(bot)
        setContents([...contents, res.data])
    }

    const getBotById = async (id) => {
        try {
            const res = await getBotRequests(id);
            return res.data;

        } catch (error) {
            console.error(error);
        }
    };

    const updateBot = async (id, bot) => {
        const res = await updateBotRequests(id, bot)
        setContents(contents.map((bot => bot._id === id ? res.data : bot)))
    }
    useEffect(() => {
        getBots()
    }, [])

    return <maincontextBots.Provider value={{
        contents,
        getBots,
        postBots,
        getBotById,
        updateBot
    }}>
        {children}
    </maincontextBots.Provider>
    
}