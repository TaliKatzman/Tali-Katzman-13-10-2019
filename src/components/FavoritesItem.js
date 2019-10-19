import React, { Component } from 'react';
import { getCurrentWeather } from '../API';
import CurrentWeather from './CurrentWeather';

class FavoritesItem extends Component {
  constructor(props) {
    super(props);
    this.state = { currentWeather: null }
  }




  componentDidMount() {
    getCurrentWeather(this.props.locationKey)
      .then(res => {
        this.setState({
          currentWeather: res,
        });
      });
  }

  render() {
    let tempElement = '';

    if (this.state.currentWeather != null) {
      tempElement = <CurrentWeather temp={this.state.currentWeather[0].Temperature.Metric.Value} city={this.props.cityName} />
    }
    const onClick = () => this.props.clickHandler({cityName: this.props.cityName, locationKey: this.props.locationKey});
    
    return (
      <div className="favoritesItem" onClick={onClick}>
        {tempElement}
      </div>
    )
  }

}

export default FavoritesItem;