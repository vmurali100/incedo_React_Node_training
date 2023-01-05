import {configureStore} from '@reduxjs/toolkit';
import { useState } from 'react';

export const store  = configureStore({
    reducer: {
        users: userSlice,
    },
})