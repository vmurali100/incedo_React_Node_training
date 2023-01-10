import React,{Component} from 'react';
import ThemeToolBar from './ThemeToolBar';
import { themes } from './ThemeContext';
import { ThemeContext } from './ThemeContext';
import ThemeButton from './ThemeButton';

class ThemeAppJS extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
           theme:themes.light,
        };
        this.toggleTheme=()=>{
            this.setState({theme:this.state.theme === themes.dark ? themes.light : themes.dark});
        }
    }
    render()
    {
        return <>
               //In classComponents if we are wrapping provider why cant we send 
               //the theme and changeTheme both as context values. 
               <ThemeContext.Provider value={this.state.theme}>
                 <ThemeToolBar changeTheme={this.toggleTheme} />
               </ThemeContext.Provider>
               <hr/><hr/>
               <ThemeButton />
               </>
    };
};

export default ThemeAppJS;