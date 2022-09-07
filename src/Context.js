import { createContext, useState } from "react";

export const Context = createContext()

export const Global = ({children}) => {

    const [counter, set] = useState(0)

    const changeCounter =() =>{
        set(counter + 1)
    }

    return(
        <Context.Provider value={{
            counter, changeCounter
        }}>
            {children}
        </Context.Provider>
    )

}