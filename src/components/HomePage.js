import React, { Component } from 'react';
import Search from './Search';
import { getCurrentWeather,getWeatherForecast } from '../API';
import CurrentWeather from './CurrentWeather';
import ForecastContainer from './ForecastContainer';
import FavortiesController from './FavoritesController';
import {Spinner} from '../images/spinner.gif';
import { connect } from 'react-redux';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {currentWeather: null, weatherForecast:[], isLoading:false};
        this.changeCurrentLocation = this.changeCurrentLocation.bind(this);
    }

    changeCurrentLocation() {
        const location = this.props.location;
        this.showLoading();
        //re-render current weather component
        const promise1 = getCurrentWeather(location.locationKey);
        promise1
        .then(res => {
            this.setState({
                currentWeather: res,
                city: location.cityName,
                currentLocationKey: location.locationKey
            });
        });
        //re-render 5 day weather forecast
        const promise2 = getWeatherForecast(location.locationKey);
        promise2
        .then(res => {
            this.setState({
                weatherForecast: res.DailyForecasts
            });
        });

        Promise.all([promise1,promise2])
        .then(()=> this.hideLoading());
    }

    componentDidMount() {
        if (this.props.location != null && this.props.location.locationKey != null) {
          this.changeCurrentLocation();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if(prevProps.location.locationKey !== this.props.location.locationKey) {
        this.changeCurrentLocation();
      }
    }

    showLoading() {
        this.setState({isLoading: true});
    }

    hideLoading() {
        this.setState({isLoading: false});
    }



    render() {
        const isLoading = this.state.isLoading;
        let currentCityElement, loadingElement;

        if (this.state.currentWeather != null) {
            currentCityElement = <CurrentWeather temp={this.state.currentWeather[0].Temperature.Metric.Value} city={this.props.location.cityName} />
        }

        if(isLoading) {
            loadingElement = <div>{Spinner}</div>;
        }

        return (
            <div className="home-page">
                {!isLoading && <Search key={this.props.location.locationKey}/>}
                {loadingElement}
                {currentCityElement}
                <FavortiesController locationKey={this.props.location.locationKey} cityName={this.props.location.cityName}/>
                <ForecastContainer weatherForecast={this.state.weatherForecast}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  location: state.location
})

export default connect(mapStateToProps,null)(HomePage)