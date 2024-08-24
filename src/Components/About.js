import React, {useState} from 'react'
import Petcard from './PetCard'

const About = ({ breeds }) => {
    const[search, setSearch] = useState("")
  console.log(search)

  function handleSearch(event){
    setSearch(event.target.value)
  }

  

  return (
    <div>
      
    </div>
  )
}

export default About
