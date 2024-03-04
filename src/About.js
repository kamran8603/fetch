import React, { useEffect, useState } from 'react'

function About() {
  const [value, setValue]= useState([])
  function abc(){
    fetch("https://fakestoreapi.com/products/")
    .then((res)=>res.json())
    .then((resp)=>{
      setValue(resp)
      console.log(resp)
    })
  }
  useEffect(()=>{
    abc()
  },[])
  return (
    <div>
      {
       value.map((item)=>(
        <div>
          <h1>{item.title}</h1>
          <img src={item.image} />
          <h3>$ {item.price}</h3>
          <h3>{item.category}</h3>
          <p>{item.description}</p>
          <h4>{item.rating.rate}</h4>
          </div>
       ))
      }
    </div>
  )
}

export default About