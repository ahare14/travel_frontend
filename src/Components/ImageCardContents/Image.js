import React from 'react'

export default function Image(props){


  return (
    <div className="card-content">
      <img src={props.pics.img_url}></img>
      <p>{props.pics.description}</p>

    </div>
  )
}