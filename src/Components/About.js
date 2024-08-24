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
      
    </div>
  )
}

export default About
