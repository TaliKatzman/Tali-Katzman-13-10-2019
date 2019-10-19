import React from 'react';
import { connect } from 'react-redux';
import FavoritesItem from './FavoritesItem';
import { setLocation, setViewHome } from '../actions';

function FavoritesPage({favoritesArr, onFavoriteSelect}) {

  return (
    <div className="favoritesPage">
      {favoritesArr.map((obj) => {
        return <FavoritesItem locationKey={obj.locationKey} cityName={obj.cityName} clickHandler={onFavoriteSelect} />
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  favoritesArr: state.favorites
})
const mapDispatchToProps = dispatch => ({
  onFavoriteSelect: (loc) => {
    dispatch(setLocation(loc.locationKey, loc.cityName));
    dispatch(setViewHome());
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(FavoritesPage)
