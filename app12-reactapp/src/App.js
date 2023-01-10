import logo from './logo.svg';
import './App.css';
import RegistrationForm from './Components/projectform';
import {Provider} from 'react-redux';
import {store} from './ReduxToolKit/store';
import ProjectTable from './Components/projectTable';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <RegistrationForm />
      <hr/>
      <ProjectTable />
      </Provider>
    </div>
  );
}

export default App;
