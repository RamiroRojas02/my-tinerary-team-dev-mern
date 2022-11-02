import logo from './logo.svg';
import './App.css';
import datosEventos from './api/data-hoteles-eventos';
import dataAdmin from './api/data-admin';
import datosHoteles from './api/data-hoteles';
import city from './api/data-city.js'
import activity from './api/data-city-activities.js'
import users from './api/data-usuario.js'

  
function App() {
  console.log(datosEventos)
  console.log(dataAdmin)
  console.log(datosHoteles)
  console.log(city);
  console.log(activity);
  console.log(users);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
