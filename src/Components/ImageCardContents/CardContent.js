import React from 'react'
import Image from './Image'

export default function CardContent(props){
  
  const displayPics = props.pics.map(pic => {
    return (
      <Image pics={pic} />
    )
  })
  
  return (
    <div className="card-content">
      <icon>Favorite Icon</icon>
      <icon>Like Icon</icon>
      {displayPics}
      <div className="card-attributes">
        <h3>{props.trip.title}</h3>
      </div>
    </div>
  )
}