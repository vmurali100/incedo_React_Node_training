import {applyMiddleware, createStore} from 'redux';
import  UserReducer  from './reducers/UserReducer';
import Thunk from 'redux-thunk';

export const store = createStore(UserReducer,applyMiddleware(Thunk)); 