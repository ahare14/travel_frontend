import React, { Component } from 'react'
import FavoriteContainer from './FavoriteContainer'
import NavBar from '../NavBar'
import Geocode from "react-geocode";
import { thisExpression } from '@babel/types';

Geocode.setApiKey('AIzaSyB31ElkAZ5mYl1cG0bPjdhzd8EtFY6rplg')

export default class FavoritesPage extends Component {

  constructor () {
    super () 
    this.state = {
      favoriteArray: []
    }
  }

  // renderThePromise = () => {
  //   this.props.allFavorites.map(favorite => {
  //     const x = favorite.picture.latitude.toString()
  //     const y = favorite.picture.longitude.toString()
  //     Geocode.fromLatLng(x,y).then(response => response.results[0].formatted_address ).then(result => { return result})
  //   })
  // }


  // filterFavorites = () => {
  //   const array = []
  //   this.props.allFavorites.map(favorite => {
  //     const x = favorite.picture.latitude.toString()
  //     const y = favorite.picture.longitude.toString()
  //     return Geocode.fromLatLng(x, y).then(response => {
  //         const address = response.results[0].formatted_address;
  //         return address
  //       }
  //     ).then( address => {
  //       const favObj = {
  //         address: address,
  //         img: favorite.picture.img_url,
  //         des: favorite.picture.description
  //       }
       
  //       array.push(favObj)
  //       })
  //     })
  //     return array
  // }

  render () {
    console.log(this.props.compiledFav)
    return (
      <React.Fragment>
        <header>
          <NavBar />
        </header>
        <main className="favorites">
          <FavoriteContainer compiledFavs={this.props.compiledFavs} allFavorites={this.props.allFavorites} delete={this.props.delete}/> 
        </main>
      </React.Fragment>
    )
  }
}