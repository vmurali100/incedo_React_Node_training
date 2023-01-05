import logo from './logo.svg';
import './App.css';
import Employees from './components/Employees';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
    <Employees/>
    <hr/>
    <Products/>
    </div>
  );
}

export default App;