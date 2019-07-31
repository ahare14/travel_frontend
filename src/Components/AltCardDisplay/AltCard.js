import React, { Component } from 'react'
import GridLayout from './GridLayout'


export default class AltCard extends Component {

  filterPicsForTrips = () => {
    return this.props.pics.filter(pic => {
      return  pic.trip.id === this.props.trip.id
    })
  }

  render(){
    return (
      <React.Fragment >
        <div className='card-grid'>
          <GridLayout 
            filteredPics={this.filterPicsForTrips()} 
            selectTrip={this.props.selectTrip} 
            addToFavorites={this.props.addToFavorites} />
        </div>
      </React.Fragment>
    )
  }
}
