import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map((director, index) => (
          <div key={index}>
            <h3> {director.name}</h3>
            <p>Movies: {director.movies.join("")}</p>
          </div>
        )
      )}
    </div>
  );
}

export default Directors
