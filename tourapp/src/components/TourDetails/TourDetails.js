import React from 'react';
import { useParams } from 'react-router-dom';

const TourDetails = () => {
  const { id } = useParams();
 
  return (
    <div>

<img src="image"/>

      <h1>{city}</h1>
      <p>City ID: {id}</p>

    </div>
  );
};
export default TourDetails;