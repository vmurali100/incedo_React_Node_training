import {configureStore} from '@reduxjs/toolkit';
import React, { useState } from 'react';
export const store  = configureStore({
    reducer: {
       users: userSlice,
    },
})