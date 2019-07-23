import React from 'react'
import Image from './Image'

export default function CardContent(props){

  
  const displayPics = props.pics.map(pic => {
    if (pic.trip.id === props.trip.id)
    return (
      <Image pics={pic}  />
    )
  })

  return (
    <div className="card">
      <div className="card-content">
        <icon>Favorite Icon</icon>
        <icon>Like Icon</icon>
        {displayPics}
        <div className="card-attributes">
          <h3>{props.trip.title}</h3>
        </div>
    </div>
    </div>
  )
}