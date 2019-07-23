import React from 'react'
import CardContent from './ImageCardContents/CardContent'
import Icon from '@material-ui/core/Icon';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ImageCard(props) {

  const displayPost = props.trips.map(trip => {
    return (
      <CardContent trip={trip} pics={props.pics}/>
    )
  })

  return (
    <div className="card">
      {displayPost}
    </div>

  )
}
