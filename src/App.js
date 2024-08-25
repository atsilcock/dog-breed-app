import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import About from './Components/About';
import Give from './Components/Give';

function App() {
  const[breeds, setBreeds] = useState([])

  

useEffect(()=>{
  fetch("http://localhost:4000/dogBreeds")
  .then(response => response.json())
  .then(data => setBreeds(data))
  .catch(error => console.error("Not fetching information"))
},[])


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About breeds={breeds}/>} />
        <Route path="/give" element={<Give />} />
      </Routes>
    </Router>
  );
}

export default App;
