import React, {useState} from 'react'
import PetCard from './PetCard'

const About  = ({ breeds }) => {
  const[search, setSearch] = useState("")
  console.log(search)
  

  function handleSearch (event){
    setSearch(event.target.value)
  }
  
  const filterBreeds = breeds.filter((breed) => {
    return breed.origin.toLowerCase().includes(search.toLowerCase())
  })
  
  
const mappedBreeds = filterBreeds.map((breed) => <PetCard key={breed.id} breed={breed}/>)
  

  return (
    <div>
      <h1>Let's Find the Pet You want to Adopt</h1>
      <h2>Search by Country: USA, Canada, Germany, United Kingdom(UK), France</h2>
      <label>
        Search by Country
      </label>
      <input type="text" value={search} onChange={handleSearch}></input>
      <ul>
      {mappedBreeds}
      </ul>
    </div>
  )
}

export default About 
