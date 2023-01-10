import React,{Component} from 'react';
import {ThemeContext} from './ThemeContext';

class ThemeButton extends Component
{
    static contextType = ThemeContext;
    render()
    {
        let props = this.props;
        console.log("Inside ThemeButton"+this.props+this.context.background+this.context.foreground);
        return (<button {...props} style={{backgroundColor:this.context.background,color:this.context.foreground}} />)
    };
};

export default ThemeButton;