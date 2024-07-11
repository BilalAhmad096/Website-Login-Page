import React, { createContext, useReducer } from 'react'
import combinedReducer, { initialState } from '../reducer/index'

const GlobalContext = createContext({})

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(combinedReducer, initialState)
  return <GlobalContext.Provider value={{ globalState: state, dispatch }}>{children}</GlobalContext.Provider>
}

export { GlobalContext, StateProvider }
