import logo from './logo.svg';
import './App.css';
import FormComponent from './Components/FormComponent';
import TableComponent from './Components/TableComponent';
import RegistrationForm from './Components/RegistrationForm'
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div className="App">
    {/* <Provider store={store}>
       <FormComponent />
       <hr/>
       <TableComponent />
    </Provider> */}
    <RegistrationForm />
    </div>
  );
}

export default App;
