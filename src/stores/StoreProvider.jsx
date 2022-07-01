import {createContext, useContext} from "react";
import {RootStore} from "./store";

const initStore = new RootStore()

export const Store = createContext(initStore)

export const StoreProvider = ({ children }) => {
    return (
        <Store.Provider value={initStore}>
            {children}
        </Store.Provider>
    )
}

export const useStore = () => useContext(Store)