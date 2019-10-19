import React from 'react';
import { connect } from 'react-redux';
import {setViewHome,setViewFavorites} from '../actions';
import {VIEW_TYPES} from '../constants';

function ToggleViewController(props) {

    const activeView = props.activeView;
    const displayHome = props.displayHome;
    const displayFavorites = props.displayFavorites;
    return (
        <div className="toggle-container">
            <span onClick={displayHome} className={`btn ${activeView === VIEW_TYPES.HOME ? "btn--active" : ""}`}>Home</span>
            <span onClick={displayFavorites} className={`btn ${activeView === VIEW_TYPES.FAVORITES ? "btn--active" : ""}`}>Favorites</span>
        </div>
    );
}

const mapStateToProps = state => ({
    activeView: state.view
})

const mapDispatchToProps = dispatch => ({
    displayHome: () => dispatch(setViewHome()),
    displayFavorites: () => dispatch(setViewFavorites())
})


export default connect(
    mapStateToProps, mapDispatchToProps
)(ToggleViewController)
