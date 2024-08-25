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
          <h1>"We understand"</h1>
          <form onSubmit={handleSubmit} style={{display: "flex",flexDirection:"column", width:"450px"}}>
            <label>Name</label>
            <input type="text" value={name} onChange={updateName}></input>
            <label>Breed</label>
            <input type="text" value={breed} onChange={updateBreed}></input>
            <label>Breed Type</label>
            <input type="text" value={breedType} onChange={updateBreedType}></input>
            <label>Origin of Country</label>
            <input type="text" value={origin} onChange={updateOrigin}></input>
            <label>Popularity (1-10)</label>
            <input type="text" value={popularity} onChange={updatePopularity}></input>
            <label>Temperament</label>
            <input type="text" value={temperament} onChange={updateTemperament}></input>
            <label>Hypoallergenic (Yes or No)</label>
            <input type="text" value={hypoallergenic} onChange={updateHypoallergenic}></input>
            <label>Intelligence  (1-100)</label>
            <input type="text" value={intelligence} onChange={updateIntelligence}></input>
            <label>Adopted Status </label>
            <input type="text" value={isAdopted} onChange={updateIsAdopted}></input>
            <label>Picture of Pet</label>
            <input type="text" value={photo} onChange={updatePhoto}></input>
            <input type="submit"></input>
          </form>
        </div>
      )
    }
    
    export default Give
