import React,{Component} from 'react';
import { useContext } from 'react';


export const UsersContext = React.createContext();

export const UsersContextProvider = UsersContext.Provider;
export const UsersContextConsumer = UsersContext.Consumer;

export const UseCustomContext = ()=>  useContext(UsersContext);

