import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import city from './api/data-city.js'
import activity from './api/data-city-activities.js'
import users from './api/data-usuario.js'
import datosEventos from './api/data-hoteles-eventos';
import dataAdmin from './api/data-admin';
import datosHoteles from './api/data-hoteles';
function App() {
=======
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



>>>>>>> 246ad4e2bd3f11e17c1da7a580152ad87f15e796
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
