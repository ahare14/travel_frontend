import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SignIn from './Components/LoginSignUp/SignIn'
import SignUp from './Components/LoginSignUp/SignUp'
import HomePage from './Components/HomePage'
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
    }
  }

  componentDidMount() {
    this.getTrips(tripAPI)
    this.getUsers(userAPI)
    this.getPics(picAPI)
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
      .then(result => this.setState({
        pictures: result
      }))
      .catch(error => console.error('errors', error))
  }
 
  

  render () {
    return (
      <Router>
        <div>
          <Route path='/signin' exact component={SignIn}/>
          <Route path='/signup' component={SignUp} />
          <Route path='/homepage' 
            render={ props => 
              <HomePage {...props} 
              trips={this.state.trips} 
              pics={this.state.pictures} 
              /> 
            } 
          />
        </div>
      </Router>
    )
  }
}

export default App;
