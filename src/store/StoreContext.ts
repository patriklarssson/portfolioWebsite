import React, { useContext } from "react";
import { createStore, Store } from "./Store";

export const useStore = (): Store => {
	return useContext(StoreContext)
}

export const StoreContext = React.createContext(createStore())