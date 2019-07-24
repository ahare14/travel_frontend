import React from 'react'
import AltCard from './AltCard'
// import { display } from '@material-ui/system';

export default function TripContainer(props) {

  const displayPost = props.trips.map((trip, index) => {
    return (
      <AltCard key={index} trip={trip} pics={props.pics} />
    )
  })

 



  return (
    <React.Fragment>
       {displayPost}
    </React.Fragment>
  )
}