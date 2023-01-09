import React from "react";

const UseContext = React.createContext();

export const UseContextProvider = UseContext.Provider; // Works as Wrapper to supply the Data
export const UseContextConsumer = UseContext.Consumer;
