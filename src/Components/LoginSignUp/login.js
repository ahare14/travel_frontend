import React, { Component } from 'react'

export default class login extends Component {

  constructor () {
    super ()
    this.state = {
      password: '',
      username: ''
    }
  }

  handleChange = event => {
    const key = event.target.name
    const value = event.target.value
    this.setState(state => {
      state[key] = value
      return state
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const username = this.state.username
    const password = this.state.password
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: 'application/json'
      },
      body: JSON.stringify({
        "user": {
          "username": username,
          "password": password
        }
      })
    }).then(response => response.json())
    .then(response => {
      const token = response.jwt
      const userId = response.user.id
      localStorage.setItem('jwt token', token)
      localStorage.setItem('userId', userId)
    })
  }
  
  
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type='text' name='username' onChange={this.handleChange}></input>
          <label>Password</label>
          <input type='password' name='password' onChange={this.handleChange}></input>
          <input type='submit' value="Login"></input>
        </form>
      </div>
    )
  }
}