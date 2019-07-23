import React from 'react'

export default function Image(props){
  console.log(props.pics)
  

  return (
    <div className="card-content">
      <img src={props.pics.image_url}></img>
      <p>{props.pics.description}</p>
     
    </div>
  )
}