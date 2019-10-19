import {URLS,API_KEY} from './constants';

export const getCurrentWeather = (locationKey) => {
    const url = `${URLS.API_CURRENT_WEATHER}${locationKey}?apikey=${API_KEY}`
    return fetch(url)
    .then(data=>data.json())
}

export const getAutoComplete = (input) => {
    const url = `${URLS.API_AUTOCOMPLETE}?q=${input}&apikey=${API_KEY}`
    return fetch(url)
    .then(data=>data.json())
}

export const getWeatherForecast = (locationKey) => {
    const url = `${URLS.API_FORECAST}${locationKey}?apikey=${API_KEY}&metric=true`
    return fetch(url)
    .then(data=>data.json())
}