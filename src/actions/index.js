export const actionTypes = {
    SET_VIEW_HOME: 'SET_VIEW_HOME',
    SET_VIEW_FAVORITES: 'SET_VIEW_FAVORITES',
    ADD_FAVORITE: 'ADD_FAVORITE',
    REMOVE_FAVORITE: 'REMOVE_FAVORITE',
    SET_LOCATION : 'SET_LOCATION'
}

export const setViewHome = () => ({
    type: actionTypes.SET_VIEW_HOME
})

export const setViewFavorites = () => ({
    type: actionTypes.SET_VIEW_FAVORITES
})

export const addFavorite = (locationKey,cityName) => ({
    type: actionTypes.ADD_FAVORITE,
    locationKey:locationKey,
    cityName:cityName
    
})

export const removeFavorite = (locationKey) => ({
    type: actionTypes.REMOVE_FAVORITE,
    locationKey:locationKey
})

export const setLocation = (locationKey,cityName) => ({
    type: actionTypes.SET_LOCATION,
    locationKey:locationKey,
    cityName:cityName
})