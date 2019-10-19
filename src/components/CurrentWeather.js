import React from 'react';

function CurrentWeather({city,temp}) {
  return (
    <div className="current-weather">
       <p className="city">{city}</p>
       <p className="temp">{temp} &#176;</p> 
    </div>
  );
}

export default CurrentWeather;
