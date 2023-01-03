import React from 'react'

const UseContext = React.createContext()

export const UseContextProvider= UseContext.Provider;
export const UseContextConsumber = UseContext.Consumer;