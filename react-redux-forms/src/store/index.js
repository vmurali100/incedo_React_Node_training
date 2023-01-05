import { configureStore } from '@reduxjs/toolkit';
import  developerSlice  from './DeveloperSlice';
export const store = configureStore({
    reducer:{
        developers:developerSlice
    },
});
