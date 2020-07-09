import React from 'react';
import errorImage from '../../images/error-image.png';

var img_props = {
  alt : "",
  onError : (e)=>{e.target.onerror = null; e.target.src=errorImage}
}

export default function Img(props) {
  img_props = {...img_props , ...props};
  return (
    <img {...img_props} alt={img_props.alt}/>
  )
}