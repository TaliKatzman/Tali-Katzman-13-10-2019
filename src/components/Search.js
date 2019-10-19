import React, { Component } from 'react';
import { getAutoComplete } from '../API';
import debounce from 'debounce';
import { setLocation } from '../actions';
import {connect} from 'react-redux';

class Search extends Component {
  constructor(props) {
    super(props);
    this.debouncedOnSearchChange = debounce(this.onSearchChange, 500);

    this.state = { userInput: '', suggestions: [] }
  }

  onSelectSuggestion(suggestion) {
    const newLocation = {
      cityName: `${suggestion.LocalizedName}, ${suggestion.Country.LocalizedName}`,
      locationKey: suggestion.Key
    };
    this.props.changeLocation(newLocation);
  }

  onSearchChange(userInput) {
    this.setState({ userInput: userInput }, () => {
      getAutoComplete(this.state.userInput)
      .then(res => {
        this.setState({
          suggestions: res.slice(0, 5)
        })
      });
    })
  }

  render() {
    return (
      <div className="search">
        <div className="search-container">
        <input onChange={(e) => this.debouncedOnSearchChange(e.target.value)} type="text" name="text" placeholder="Search City..." autoComplete="off" />
        {this.state.suggestions.map((suggestion)=>{
          return <div className="suggestionItem" key={suggestion.Key} onClick={() => this.onSelectSuggestion(suggestion)}>{`${suggestion.LocalizedName}, ${suggestion.Country.LocalizedName}`}</div>
        })}
      </div>  
      </div>
    )

  }
}

const mapDispatchToProps = (dispatch) => ({
  changeLocation: (loc) => dispatch(setLocation(loc.locationKey, loc.cityName))
})

export default connect(null, mapDispatchToProps)(Search)
