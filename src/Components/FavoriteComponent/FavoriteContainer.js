import React from 'react'
import FavoriteCard from './FavoriteCard'
import Geocode from "react-geocode";

Geocode.setApiKey('AIzaSyB31ElkAZ5mYl1cG0bPjdhzd8EtFY6rplg')

export default function FavoriteContainer (props) {



  const displayFavorites = props.allFavorites.map(favorite => {
    const lat = favorite.picture.latitude
    const lng = favorite.picture.longitude
    // const address = props.reverseGeocode(lat,lng)
    return (
      <FavoriteCard key={favorite.id} favorite={favorite} address={() => props.reverseGeocode(lat,lng)} />
    )
  })

  return (
    <div className="favorite-container">
      {displayFavorites}
    </div>
  )
}