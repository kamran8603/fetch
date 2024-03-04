import React, { useState } from 'react'

function Slider() {
    const imges=[
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
    const [data, setData]= useState(0);
    const nextSlide=()=>{
        setData((prevIndex) => (prevIndex + 1) % imges.length);
    }
    const prev=()=>{
        setData((prevIndex) => (prevIndex - 1 + imges.length) % imges.length);
    }
   
  return (
    <div>
        
        <button onClick={nextSlide}>Next</button>
        <img style={{height:"340px", width:"340px " }} src={imges[data]} alt="slide" />
        <button onClick={prev}>Prev</button>
    </div>
  )
}

export default Slider