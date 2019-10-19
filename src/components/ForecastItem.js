import React from 'react';

function ForecastItem({forecast}) {

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let d = new Date(forecast.Date);
  let dayName = days[d.getDay()];

  const temp = forecast.Temperature.Minimum.Value;

  return (
    <div className="forecastItem">
      <div className="name">{dayName}</div>
      <div className="temp">{temp} &#176;</div>
    </div>
  );
}

export default ForecastItem;
