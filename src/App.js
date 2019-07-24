import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import SignIn from './Components/LoginSignUp/SignIn'
import SignUp from './Components/LoginSignUp/SignUp'
import AllTripDisplay from './Components/AllTripDisplay'
// import HomePage from './Components/HomePage'
// import Lightbox from "react-lightbox-component";
import './App.css';

const tripAPI = 'https://travel-backend-14.herokuapp.com/trips'
const userAPI = 'https://travel-backend-14.herokuapp.com/users'
const picAPI = 'https://travel-backend-14.herokuapp.com/pictures'



class App extends Component {
  constructor () {
    super ()
    this.state = {
      users: [],
      trips: [],
      pictures: [],
      locations: [],
    }
  }

  componentDidMount() {
    this.getPics(picAPI)
    this.getLocation(picAPI)
    this.getTrips(tripAPI)
    this.getUsers(userAPI)
  }
  
  getTrips(url) {
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({
        trips: result
      }))
      .catch(error => console.error('errors', error))
  }
 
  getUsers(url) {
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({
        users: result
      }))
      .catch(error => console.error('errors', error))
  }
 
  getPics(url) {
    fetch(url)
      .then(response => response.json())
      // .then(result => console.log(result))
      .then(result => this.setState({
        pictures: result
      }))
      .catch(error => console.error('errors', error))
  }

  getLocation(url) {
    fetch(url)
      .then(response => response.json())
      .then(result => this.locationCompiler(result))
      .catch(error => console.error('errors', error))
  }

  locationCompiler = (result) => {
    const locationArray = result.reduce((array, picture) => {
      const picObj = {
        location: {lat: picture.latitude, lng: picture.longitude},
        id: picture.id,
        trip: {id: picture.trip.id, title: picture.trip.title}
      }
      array.push(picObj)
      return array
    }, [])
    this.setState({
      locations: locationArray
    })
  }
 
  

  render () {
    // console.log('app level', this.state.pictures)
    return (
      <Router>
        <div>
          <Route path='/signin' exact component={SignIn}/>
          <Route path='/signup' component={SignUp} />
          <Route path='/homepage' 
            render={ 
              props => <AllTripDisplay {...props}
              trips={this.state.trips}
              pics={this.state.pictures}/>
            }
          />
        </div>
      </Router>
    )
  }
}

export default App;

{/* <Route path='/homepage' 
  render={ props => 
    <HomePage {...props} 
    trips={this.state.trips} 
    pics={this.state.pictures} 
    /> 
  } 
/> */}