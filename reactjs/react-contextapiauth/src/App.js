import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'; 
import Home from './components/Home';
import Login from './components/Login';
import AuthProvider from './components/AuthProvider';
import Features from './components/Features';
function App() {
  return (
    <div className="App">
         

         <AuthProvider>

         <Router>

                   <Routes>
                            <Route path='/' element={ <Home  />} />
                            <Route path='/login' element={ <Login/>} />
                            <Route path='/features' element={  <Features /> } />
 
                            
                   </Routes>

         </Router>
         </AuthProvider>

         
               
    </div>
  );
}

export default App;
