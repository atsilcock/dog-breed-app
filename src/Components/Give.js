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

    function updatePopularity(event){
        setPopularity(event.target.event)
    }

    function updateTemperament(event){
        setTemperament(event.target.value)
    }

    function updateHypoallergenic(event){
        setHypoallergenic(event.target.value)
    }

    function updateIntelligence(event){
        setIntelligence(event.target.value)
    }

    function updateIsAdopted(event){
        setIsAdopted(event.target.value)
    }

    function updatePhoto(event){
        setPhoto(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()

        fetch("http://localhost:4000/dogBreeds", {
            method: "POST", 
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name: name, 
                breed: breed, 
                breedType: breedType, 
                origin: origin, 
                popularity: popularity, 
                temperament: temperament, 
                hypoallergenic: hypoallergenic, 
                intelligence: intelligence, 
                isAdopted: isAdopted, 
                photo: photo
            })
        })
        .then(response => response.json())
    }

  return (
    <div>
      
    </div>
  )
}

export default Give
