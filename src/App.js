import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Search from './components/Search';
import Characters from './components/Characters';
import Planets from './components/Planets';

function App() {
  return (
    <div className="App">

      <h1>Star Wars EVERYTHING</h1>
      <br></br>

      <>
      <Search/>
      

      <Routes>
        <Route path="/characters/:characterid" element = {<Characters/>}></Route>
        <Route path = "/Characters" element ={<p>Characters</p>}></Route>
        
      </Routes>
      </>
    </div>
  );
}

export default App;
