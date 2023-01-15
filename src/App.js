import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';

function App() {
  return (
      <div>
        <h1>C'est l'app JS</h1>
        <Router>
          <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='/create' element ={<Add/>}/>
            <Route path='/Edit' element ={<Edit/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
