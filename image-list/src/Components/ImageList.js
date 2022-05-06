import React from 'react'
import "./Images.css";

const ImageList = (props) => {

 const images = props.images.map((image) =>{
        return <img key={image.id} src={image.webformatURL} alt="photos" />

})
    
  return (
    <div className='container'>
<div className='gallery'>
     {images}

     </div>
    </div>
  )
}

export default ImageList