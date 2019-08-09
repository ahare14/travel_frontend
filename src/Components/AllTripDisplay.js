import React, { Component } from 'react'
import NavBar from "./NavBar";
import TripContainer from './AltCardDisplay/TripContainer';
import MapContainer from './MapComponents/MapContainer';
import Geocode from "react-geocode";
import AddTripButton from './PostNewTrips/AddTripButton'


Geocode.setApiKey('AIzaSyCJwIQJhwFabrSJmjbJdsXoJtRh92-TW0E')


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
      favorites: []
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

  updatedPicState = (newPic) => {
    this.setState(state => {
      state.pictures = [...this.state.pictures, newPic]
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
          <div className="hompage-container">
            <div className='trip-container'>
              <TripContainer 
                addToFavorites={this.props.addToFavorites}
                trips={this.props.trips} 
                pics={this.props.pics} 
                selectTrip={this.selectTrip}
                updateFrom={this.updateForm}
                setTripId={this.setTripId}
                geoCode={this.addPhotoToState}
                addPhoto={this.addPhotoToTrip} />
            </div>
            <div className='map-container'>
              <MapContainer 
                locations={this.props.locations} 
                location={ this.state.location.lat === 0.0
                  ? {lat: this.props.coords[0], lng: this.props.coords[1]}
                  : this.state.location} />
            </div>
          </div>
        </main>
      </React.Fragment>
    )
  }
}
