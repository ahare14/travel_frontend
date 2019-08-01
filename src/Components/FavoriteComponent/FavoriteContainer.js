import React from 'react'
import FavoriteCard from './FavoriteCard'


export default function FavoriteContainer (props) {


  const displayFavorites = props.compiledFavs.map(favorite => {
    return (
      <FavoriteCard key={favorite.id} favorite={favorite} delete={props.delete} handleClick={props.handleClick} />
    )
  })

  return (
    <div className="favorite-container">
      {displayFavorites}
    </div>
  )
}
