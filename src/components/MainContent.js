import React from 'react';
import { connect } from 'react-redux';
import {VIEW_TYPES} from '../constants';
import HomePage from './HomePage';
import FavoritesPage from './FavoritesPage';

function MainContent(props) {
    const currentView = props.currentView;

  return (
    <div className="main">
    <div className="hero-image"></div>
        {currentView === VIEW_TYPES.HOME && <HomePage />}

        {currentView === VIEW_TYPES.FAVORITES && <FavoritesPage/>}   
    </div>
  );
}

const mapStateToProps = state => ({
    currentView: state.view
})

export default connect(
    mapStateToProps, null
)(MainContent)
