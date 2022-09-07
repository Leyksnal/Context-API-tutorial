import { createContext, useState } from "react";

export const Context = createContext()

export const Global = ({children}) => {

    const [counter, set] = useState(0)

    const changeCounter =() =>{
        set(counter + 1)
    }
    const sub =() =>{
        set(counter - 1)
    }
    const reset =() =>{
        set(0)
    }

    return(
        <Context.Provider value={{
            counter, changeCounter, reset, sub
        }}>
            {children}
        </Context.Provider>
    )

}