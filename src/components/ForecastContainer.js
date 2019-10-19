import React from 'react';
import ForecastItem from './ForecastItem';


function ForecastContainer({weatherForecast}) {


    return (
      <div className="forecast-container">
        {weatherForecast.map(forecast => (
          <ForecastItem forecast={forecast} key={forecast.Date} />
        ))}
      </div>
    )
}

export default ForecastContainer

