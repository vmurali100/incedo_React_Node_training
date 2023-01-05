import React from 'react';
import { BrowserRouter,Link,Router } from 'react-router-dom';
import{Route,Routes} from "react-router";
class RoutingDemo extends React.Component{
    render(){
        return <div>
            <h1>Routing Demo</h1>
            <BrowserRouter>
            <ul className='nav nav-tabs'>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    }
}
export default RoutingDemo;

class About extends React.Component{
    render(){
        return <div>
            <h1>About Component</h1>
        </div>
    }
}
class Contact extends React.Component{
    render(){
        return <div>
            <h1>Contact Component</h1>
        </div>
    }
}
class Login extends React.Component{
    render(){
        return <div>
            <h1>Login Component</h1>
        </div>
    }
}
class Home extends React.Component{
    render(){
        return <div>
            <h1>Home Component</h1>
        </div>
    }
}