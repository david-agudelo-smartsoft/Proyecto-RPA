import {useState, createContext, useContext} from 'react'

const maincontext = createContext()

export const useContent = () =>{
    const context = useContext(maincontext)
    return context
}

export const MainProvider = ({children}) => {

    const [contents, setContents] = useState([])

    console.log(contents)

    return <maincontext.Provider value={{
        contents,
        setContents
    }}>
        {children}
    </maincontext.Provider>
}