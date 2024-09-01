import React, { useState } from 'react';
import PetCard from './PetCard';

const Adopt = ({ breeds, search, handleSearch, setBreeds }) => {
  const [isAdopted, setIsAdopted] = useState(false);

  function handleFilterChange(event) {
    setIsAdopted(event.target.value === 'Adopted');
  }

  const filteredBreeds = breeds.filter((breed) => {
    if (isAdopted) {
      return breed.isAdopted === true;
    } else {
      return breed.isAdopted === false;
    }
  })

  // console.log(filteredBreeds)

  const mappedBreeds = filteredBreeds.map((breed) => (
    <PetCard key={breed.id} breed={breed} setBreeds={setBreeds} />
  ));

  return (
    <div>
      <h1>Let's Find the Pet You Want to Adopt</h1>
      <input type="text" value={search} onChange={handleSearch} placeholder="search by origin"></input>
      <select value={isAdopted ? 'Adopted' : 'Not Adopted'} onChange={handleFilterChange}>
        <option value="Adopted">Adopted</option>
        <option value="Not Adopted">Not Adopted</option>
      </select>
      <ul>{mappedBreeds}</ul>
    </div>
  );
};

export default Adopt;
