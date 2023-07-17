import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Star Wars EVERYTHING</h1>

      {/* <link to = {"/"}>Home</link> */}
        
      <Routes>
        <Route path="/" element = {<p>Home</p>}></Route>
        <Route path = "/Latin" element ={<p>XYZ</p>}></Route>
      </Routes>
    </div>
  );
}

export default App;
