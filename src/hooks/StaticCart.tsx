import { createContext } from "react";

interface DataProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const StatiCart = createContext("")

export const DataProvider = ({children}:DataProviderProps) => {
    return (
        <StatiCart.Provider value={""}>
            { children }
        </StatiCart.Provider>
    )
}   