import React, { Component } from 'react'

import Image from './Image'
import ImageLightBox from './ImageLightBox';


export default class CardContent extends Component{
 
  filterPicsForTrips = () => {
    return this.props.pics.filter(pic => {
      return pic.trip.id === this.props.trip.id
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="card" style={{display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop: '30px'}} >
          <h3>{this.props.trip.title}</h3>
          <ImageLightBox filteredPics={this.filterPicsForTrips()}/>
         </div>
     
      </React.Fragment>
    )
  }
}

{/* <Image filteredPics={this.filterPicsForTrips()} /> */}
