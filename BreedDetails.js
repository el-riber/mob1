// src/BreedDetails.js

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchDogBreedById } from './api';

function BreedDetails({ breedId }) {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['breedDetails', breedId],
    queryFn: () => fetchDogBreedById(breedId)
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Debugging output to understand the structure of the data
  console.log(data);

  return (
    <div>
      <h2>{data?.data?.attributes?.name}</h2>
      <p>{data?.data?.attributes?.description}</p>
      <ul>
        {data?.data?.attributes?.attributes?.map((attr, index) => (
          <li key={index}>{attr}</li>
        )) ?? <li>No attributes available</li>}
      </ul>
    </div>
  );
}

export default BreedDetails;


