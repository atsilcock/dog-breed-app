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
      
    </div>
  )
}

export default PetCard
