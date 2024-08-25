import React,{useState} from 'react'
import "../App.css"

const PetCard = ({ breed }) => {
  const [button, setButton] = useState(breed.isAdopted)

function handleButton(){
  setButton(!button)
  fetch(`http://localhost:4000/dogBreeds/${breed.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type" : "application/json"
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
      Name: {breed.name} <br />
      Breed: {breed.breed} <br />
      Breed Type: {breed.breedType} <br />
      Origin of Country: {breed.origin} <br />
      </li>
    </ul>
    <button onClick={handleButton}>{button ? "Adopted" : "Not Adopted"}</button>
      
    </div>
  )
}

export default PetCard
