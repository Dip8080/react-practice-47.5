import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { addition, multiplicaton } from './Component/Calculator/Calculator';
import Person from './Component/Persons/Person';


function App() {
  return (
    <div className="App">
      <Header></Header>
     <p> multiplicaton :{multiplicaton(2,4)}</p>
     <h4>add : {addition(2,4)}</h4>
     <Person></Person>
    </div>
  );
}

export default App;
