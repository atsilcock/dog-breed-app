import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import Adopt from './Components/Adopt';
import Give from './Components/Give';

function App() {
  const[breeds, setBreeds] = useState([])
  console.log(breeds)

  

useEffect(()=>{
  fetch("http://localhost:3000/dogBreeds")
  .then(response => response.json())
  .then(data => setBreeds(data))
  .catch(error => console.error("Not fetching information"))
},[])


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adopt" element={<Adopt breeds={breeds}/>} />
        <Route path="/give" element={<Give />} />
      </Routes>
    </Router>
  );
}

export default App;
