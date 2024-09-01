import React,{useState} from 'react'
import "../App.css"

const PetCard = ({ breed, setBreeds }) => {
  const [button, setButton] = useState(breed.isAdopted)

function handleButton(){
  setButton(!button)
  fetch(`http://localhost:3000/dogBreeds/${breed.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type" : "application/json"
    }, 
    body: JSON.stringify({
      isAdopted: !button
    })
  })
  .then(response => response.json())
  .then(updateBreed => {
    setButton(updateBreed.isAdopted)
  })
  .then(data => setBreeds([...breed, data]))
  
}


  return (
    <div>
     <img src={breed.photo} alt={breed.name} className="pet-image"></img>
    <ul>
      <h2> Name: {breed.name}</h2>
      <p> Breed: {breed.breed}</p>
      <p> Breed Type: {breed.breedType} </p>
      <p> Origin of Country: {breed.origin} </p>
      <p> How Popular is {breed.name} ? (1-10): {breed.popularity} </p>
      <p> Temperament: {breed.temperament}</p>
      <p>Hypoallergenic: {breed.hypoallergenic}</p>
      <p>Intelligence (1-100): {breed.intelligence}</p>
      
    </ul>
    <button onClick={handleButton}>{button ? "Adopted" : "Not Adopted"}</button>
  
      
    </div>
  )
}

export default PetCard
