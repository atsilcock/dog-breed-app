import React, {useState} from 'react'

const Give = () => {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [breedType, setBreedType] = useState("")
    const [origin, setOrigin] = useState("")
    const [popularity, setPopularity] = useState("")
    const [temperament, setTemperament] = useState("")
    const [hypoallergenic, setHypoallergenic] = useState("")
    const [intelligence, setIntelligence] = useState("")
    const [isAdopted, setIsAdopted] = useState("")
    const [photo, setPhoto] = useState("")

    function updateName(event){
        setName(event.target.value)
    }

    function updateBreed(event){
        setBreed(event.target.name)
    }

    function updateBreedType(event){
        setBreedType(event.target.name)
    }

    function updateOrigin(event){
        setOrigin(event.target.value)
    }

  return (
    <div>
      
    </div>
  )
}

export default Give
