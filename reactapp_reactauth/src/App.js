import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Features } from './components/Features';
import { AuthProvider } from './components/Auth';
import { RequiredAuth } from './components/RequiredAuth';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/features" 
        element={
        <RequiredAuth>
          <Features/>
        </RequiredAuth>
        }
        />
      </Routes>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
