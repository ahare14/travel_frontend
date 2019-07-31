import React, { Component } from 'react'
import NavBar from "./NavBar";
import TripContainer from './AltCardDisplay/TripContainer';
import MapContainer from './MapComponents/MapContainer';
import Geocode from "react-geocode";
import AddTripButton from './PostNewTrips/AddTripButton'


Geocode.setApiKey('AIzaSyB31ElkAZ5mYl1cG0bPjdhzd8EtFY6rplg')


export default class AllTripDisplay extends Component {

  constructor () {
    super ()
    this.state = {
      userId: 1,
      tripTitle: '',
      activeTrip: null,
      location: {
        lat: 0.0,
        lng: 0.0
      },
      tripId: 0,
      title: '',
      description: '',
      place: '',
      img: '',
      openDialogBox: false
    }
  }

  selectTrip = (lat, lng) => {
    const latitude = +lat
    const longitude = +lng
    this.setState(state => {
      state.location.lat = latitude
      state.location.lng = longitude
      return state
    })
  }

  updateForm = event => {
    const key = event.target.name
    const value = event.target.value 
    this.setState(state => {
      state[key] = value
      return state
    })
  }

  setTripId = trip => {
    const id = trip
    this.setState(state => {
      state.tripId = id
      return id
    })
  }


  addPhotoToState = () => {
    const address = this.state.place
    const latLng = []
    return Geocode.fromAddress(address).then(response => {
      const coordinates = response.results[0].geometry.location
      latLng.push(coordinates)
      console.log('hey', coordinates)
      return coordinates
    })
    .then(coordinates => this.setState(state => {
      state.location.lat = coordinates.lat;
      state.location.lng = coordinates.lng
      return state
    }))
    .then(response => this.addPhotoToTrip())
    // .then(response => this.props.updatePicArray(response))
  }

  addPhotoToTrip = () => {
    const apiBody = {
      picture: {
        trip_id: this.state.tripId,
        img_url: this.state.img,
        description: this.state.description,
        latitude: this.state.location.lat,
        longitude: this.state.location.lng
      }
    }
    this.props.postPhoto(apiBody)
    // this.setState( state => {
    //   state.title = ''
    //   state.description = ''
    //   state.img = ''
    //   state.tripId = 0.0
    //   state.location.lat = 0.0
    //   state.location.lng = 0.0
    //   return state
    // })
    return apiBody
  }

  addTrip = () => {
    const apiBody = {
      trip : {
        user_id: this.state.userId,
        title: this.state.tripTitle
      }
    }
    this.props.postTrip(apiBody)
    this.setState( state => {
      state.tripTitle = ''
      return state
    })
  }

  render () {
    return (
      <React.Fragment>
        <header>
          <NavBar />
        </header>
        <main>
          <AddTripButton updateForm={this.updateForm} addTrip={this.addTrip}/>
          <div className='trip-container'>
            <TripContainer 
              trips={this.props.trips} 
              pics={this.props.pics} 
              selectTrip={this.selectTrip}
              updateFrom={this.updateForm}
              setTripId={this.setTripId}
              geoCode={this.addPhotoToState}
              addPhoto={this.addPhotoToTrip} />
          </div>
          <div className='map-container'>
            <MapContainer locations={this.props.locations} 
            location={ this.state.location.lat === 0.0
              ? {lat: 39.7392, lng: -104.9903}
              : this.state.location} />
          </div>
        </main>
      </React.Fragment>
    )
  }
}
