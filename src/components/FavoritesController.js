import React from 'react';
import { connect } from 'react-redux';
import {removeFavorite,addFavorite} from '../actions';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function FavortiesController({locationKey,add,remove,favoritesArr}) {
  const filteredFavs = favoritesArr.filter((obj)=> {
    return obj.locationKey === locationKey
  });
  const isFavorited = filteredFavs.length > 0;

  return (
    <div className="favorites-controller">
        {isFavorited? <FaHeart onClick={remove}/>: <FaRegHeart onClick={add}/>}
        {isFavorited? <div onClick={remove} className="btn btn-remove">Remove From Favorites</div>: <div onClick={add} className="btn btn-add">Add to Favorites</div>}
    </div>
  );
}

const mapStateToProps = (state,ownProps) => ({
  favoritesArr: state.favorites,
  ...ownProps
})

const mapDispatchToProps = (dispatch,ownProps) => ({
  add: () => dispatch(addFavorite(ownProps.locationKey, ownProps.cityName)),
  remove: () => dispatch(removeFavorite(ownProps.locationKey))
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(FavortiesController)
