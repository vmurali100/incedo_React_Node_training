import React,{Component} from 'react';
import ThemeButton from './ThemeButton';

class ThemeToolBar extends Component
{
    render()
    {
        console.log("inside ThemeToolBar"+this.props);
        return <>
               <ThemeButton onClick={this.props.changeTheme}>
                   ChangeThem
               </ThemeButton>
               </>
    };
};

export default ThemeToolBar;