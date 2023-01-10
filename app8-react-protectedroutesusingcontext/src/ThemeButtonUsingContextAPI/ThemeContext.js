import React,{Component} from 'react';


export const themes = {
    light:
    {
        foreground:'#000000',
        background:'#eeeeee'
    },
    dark:
    {
       foreground:'#ffffff',
       background:'#222222'
    },
};


//created a themeContext and passing themes.dark object as default value.
export const ThemeContext = React.createContext(themes.dark);