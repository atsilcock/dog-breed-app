import React from 'react'
import "../App.css"

const PetCard = ({ breed }) => {
    const [button, setButton] = useState(breed.isAdopted)

function handleButton(){
    setButton(!button)
    fetch(`http://localhost:4000/dogBreeds/${breed.id}`,{
        method: "PATCH", 
        headers:{
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            isAdopted: true
        })
    })
    .then(response => response.json())
}
  return (
    <div>
      <img src={breed.photo} alt={breed.name} className="pet-image"></img>
      <ul>
        <li>
            Name: {breed.name}
            Breed: {breed.breed}
            Breed Type: {breed.breedType}
            Origin of Country: {breed.origin}
            How Popular is {breed.Name}? (1-10): {breed.popularity}
            Temperament: <li>{breed.temperament}</li>
            Hypoallergenic: {breed.hypoallergenic}
            Intelligence (1-100): {breed.intelligence}
        </li>
      </ul>
      <button onClick={handleButton}>{button ? "Adopted" : "Not Adopted"} </button>
    </div>
  )
}

export default PetCard
