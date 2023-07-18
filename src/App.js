import './App.css';
import {Routes, Route} from 'react-router-dom'
import Search from './components/Search';
import Characters from './components/Characters';
import Planets from './components/Planets';
import Error from './components/Error';


function App() {
  return (
    <div className="App">

      <h1>Star Wars EVERYTHING</h1>
      <br></br>

      <>
      <Search/>
      
      <Routes>
        <Route path="/characters/:characterid" element = {<Characters/>}></Route>
        <Route path = "/planets/:planetid" element ={<Planets/>}></Route>
        <Route path='/error' element = {<Error/>} ></Route>
      </Routes>
      </>
    </div>
  );
}

export default App;
