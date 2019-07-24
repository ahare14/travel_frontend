// import React from 'react'
// import LeftArrow from '../SliderComponents/LeftArrow'
// import RightArrow from '../SliderComponents/RightArrow'

// export default function Image (props) {

//   const count = 0
//   const pictureArray = props.filteredPics

//   console.log(pictureArray)

//   const countIncrease = function() {
//     console.log('hello')
//     count +=1
//   }


//   return (
//     <React.Fragment>
//       {count !== 0 ? <LeftArrow countIncrease={countIncrease}/> : ''}
//       {props.filteredPics.map((pic, index) => {
//         if(index === count) {
//           return (
//             <div key={pic.id} style={{margin: '0 auto'}}>
//               <img src={pic.img_url} alt=''></img>
//               <div style={{width:'600px', margin: '24px auto', fontStyle: 'italic'}}>
//                 {pic.desription !== null ? pic.description : ''}
//               </div>
//             </div>
//           )
//         }
//       })}
//       {count !== (pictureArray.length - 1) ? <RightArrow /> : ''}
//     </React.Fragment>
//   )
// }
import React from 'react'
import Lightbox from "react-lightbox-component";

export default function Image (props) {
  

  const images = props.filteredPics.reduce((array, pic) => {
    const obj = {src: '', title: '', description: '' }
    obj.src = pic.img_url
    obj.title = 'image'
    obj.description = pic.description
    array.push(obj)
    console.log(array)
    return array
  },[])
 
  return (
    <div>
      <Lightbox 
        images={images}
        showImageModifies={true} 
        thumbnailWidth='150px' 
        thumbnailHeight='150px'/>
    </div>
  )
}



