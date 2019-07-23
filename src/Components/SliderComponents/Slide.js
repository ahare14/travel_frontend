import React from 'react'

const Slide = ({image}) => { 
  console.log(`url(${image})`)
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
  }
  return <div className="slide" style={styles}>
    <h1>hey</h1>
    </div>
  
}

export default Slide