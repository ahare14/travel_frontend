import React, { Component } from 'react'
import FavoriteContainer from './FavoriteContainer'
import NavBar from '../NavBar'
import Geocode from "react-geocode";
import Swal from 'sweetalert2'
import { thisExpression } from '@babel/types';

Geocode.setApiKey('AIzaSyCJwIQJhwFabrSJmjbJdsXoJtRh92-TW0E')

export default class FavoritesPage extends Component {

  constructor () {
    super () 
    this.state = {
      location: [],
      address: '',
      openWindow: false
    }
  }

  handleClick = (event) => {
    const value = event
    this.setState(state => {
      state.location = value
      return state
    })
    const x = value.lat.toString()
    const y = value.lng.toString()
    this.addAddressToState(x,y)
    setTimeout(()=>{this.openAlert()}, 500)
  }

  openAlert = () => {
    Swal.fire({
      title: 'Info',
      text: `Location: ${this.state.address}`,
      confirmButtonText: 'Cool'
    })
  }

  addAddressToState = (x,y) => {
    return Geocode.fromLatLng(x, y).then(response => {
      const coordinates = response.results[0].formatted_address
      return coordinates
    })
    .then(coordinates => this.setState(state => {
      state.address = coordinates
      return state
    }))
  }

  render () {
    console.log(this.props.compiledFav)
    return (
      <React.Fragment>
        <header>
          <NavBar />
        </header>
        <main className="favorites">
          <FavoriteContainer 
            compiledFavs={this.props.compiledFavs} 
            allFavorites={this.props.allFavorites} 
            delete={this.props.delete}
            handleClick={this.handleClick}/> 
        </main>
      </React.Fragment>
    )
  }
}