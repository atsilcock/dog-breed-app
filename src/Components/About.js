import React, {useState} from 'react'
import PetCard from './PetCard'

const About = ({ breeds }) => {
    const[search, setSearch] = useState("")
  console.log(search)

  function handleSearch(event){
    setSearch(event.target.value)
  }

   const filterBreeds = breeds.filter((breed) => {
    return breeds.origin.toLowerCase().includes(search.toLowerCase)
   })
   console.log(filterBreeds)

   const mappedBreeds = filterBreeds.map((breed) => <PetCard key={breed.id} breed={breed} />)

  return (
    <div>
      <h1>Let's find the Pet You would like to Adopt</h1>
      <h2>Search by Country: USA, Canada, Germany, United Kingdom(UK), France</h2>
      <lable>
        Search by Country
      </lable>
      <input type="text" value={search} onChange={handleSearch}></input>
      <ul>
        {mappedBreeds}
      </ul>
    </div>
  )
}

export default About
