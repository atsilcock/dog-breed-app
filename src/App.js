import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import Adopt from './Components/Adopt';
import Give from './Components/Give';

function App() {
  const[breeds, setBreeds] = useState([])
  const [search, setSearch] = useState("")
  console.log(search)

  function handleSearch(event){
    event.preventDefault()
    setSearch(event.target.value)
  }

  const filterBreeds = breeds.filter(dog => {
    if(search){
      return dog.origin.toLowerCase().includes(search.toLowerCase())
    }else{
      return true
    }
  })

  console.log(filterBreeds)

useEffect(()=>{
  fetch("http://localhost:3000/dogBreeds")
  .then(response => response.json())
  .then(data => setBreeds(data))
  .catch(() => console.error("Not fetching information"))
},[])


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adopt" element={<Adopt search={search} handleSearch={handleSearch} breeds={filterBreeds} setBreeds={setBreeds}/>} />
        <Route path="/give" element={<Give breeds={breeds} setBreeds={setBreeds}/>} />
      </Routes>
    </Router>
  );
}

export default App;
