import React from 'react';

const CountryListShimmer = () => {
  
  // const shimmerData = Array.from({ length: 15 }, (_, index) => index);   // first way

  return (
    <div className='countries-container'>
      {Array.from({length:15}).map((_,index) => (
        <div key={index} className='country-card cardshimmer'>
         
        </div>
      ))}
    </div>
  );
};

export default CountryListShimmer;
