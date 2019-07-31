import React, { Component } from 'react'
import Geocode from "react-geocode";
import NavBar from '../NavBar'
import InputField from './InputField'

Geocode.setApiKey('AIzaSyB31ElkAZ5mYl1cG0bPjdhzd8EtFY6rplg')


export default class PostTripForm extends Component {

  constructor () {
    super ()
    this.state = {
      selectedFile: null,
      title: '',
      description: '',
      location: '',
      latitude: 0.0,
      longitude: 0.0
    }
  }


  updateForm = event => {
    const key = event.target.name
    const value = event.target.value 
    this.setState(state => {
      state[key] = value
      return state
    })
    // this.setLocationCoordinates()
  }

  addTripToState = (event) => {
    event.preventDefault()
    const address = this.state.location
    const latLng = []
    return Geocode.fromAddress(address).then(response => {
      const coordinates = response.results[0].geometry.location
      latLng.push(coordinates)
      this.setState(state => {
        state.latitude = coordinates.lat;
        state.longitude = coordinates.lng
        return state
      })
    })
  }

  addTripToBackEnd = () => {
    const apiBody = {
      picture: {
        trip_id: 1,
        img_url: this.state.selectedFile,
        decription: this.state.description,
        latitude: this.state.latitude,
        longitude: this.state.longitude
      }
    }
    this.props.postTrip(apiBody)
    this.setState( state => {
      state.selectedFile = null
      state.title = ''
      state.description = ''
      state.location = ''
      return state
    })
  }


  render () {
    return (
      <div className="post-page">
        <header>
          <NavBar />
        </header>
        <main>
          <div className="post-trip-container" >
            <InputField />
          </div>
        </main>
      </div>
    )
  }
}

            // <form onSubmit={this.addTripToState}>
            //   <input name="title" type='text' placeholder='title' onChange={this.updateForm}></input>
            //   <input name="selectedFile" type='file' onChange={this.fileSelectedHandler}></input>
            //     <button onClick={this.fileUploadHandler}>Upload File</button>
            //   <input name="description" type='text' placeholder='desription' onChange={this.updateForm}></input>
            //   <input name="location" type='text' placeholder='location' onChange={this.updateForm}></input>
            //   <input type='submit'></input>
            // </form>

