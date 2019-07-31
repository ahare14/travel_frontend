import React, { Component } from 'react'
import FavoriteContainer from './FavoriteContainer'
import NavBar from '../NavBar'

import Geocode from "react-geocode";

Geocode.setApiKey('AIzaSyB31ElkAZ5mYl1cG0bPjdhzd8EtFY6rplg')

export default class FavoritesPage extends Component {

  constructor () {
    super ()
    this.state = {
      address: ''
    }
  }

  filterFavorites = () => {
    return this.props.allFavorites.filter(favorite => {
      return  favorite.user.id === this.props.currentUser
    })
  }

  reverseGeocode = (lat, lng) => {
    return Geocode.fromLatLng(lat, lng)
      .then(response => {
        const address = response.results[0].formatted_address;
        return address
      },
      error => {
        console.error(error);
      }
    )
    .then(address => this.setState({address: address}))
  }
  
  render () {
    return (
      <React.Fragment>
        <header>
          <NavBar />
        </header>
        <main className="favorites">
          <FavoriteContainer 
            allFavorites={this.filterFavorites()}
            reverseGeocode={this.reverseGeocode}/> 
        </main>
      </React.Fragment>
    )
  }
}