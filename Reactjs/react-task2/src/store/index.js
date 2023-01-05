import {configureStore} from '@reduxjs/toolkit';
import { useState } from 'react';
import usersSlice from './usersSlice';

export const store  = configureStore({
    reducer: {
        users: usersSlice,
    },
})