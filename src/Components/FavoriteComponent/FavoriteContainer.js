import React from 'react'
import FavoriteCard from './FavoriteCard'


export default function FavoriteContainer (props) {
  // console.log('i am broken', props)

  // const displayFavorites = props.allFavorites.map(favorite => {
  //   return (
  //     <FavoriteCard key={favorite.id} favorite={favorite} delete={props.delete} />
  //   )
  // })

  const displayFavorites = props.compiledFavs.map(favorite => {
    console.log('current working', favorite)
    return (
      <FavoriteCard key={favorite.id} favorite={favorite} delete={props.delete} />
    )
  })

  return (
    <div className="favorite-container">
      {displayFavorites}
    </div>
  )
}