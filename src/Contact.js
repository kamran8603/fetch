import React, { useEffect, useState } from 'react'

function Contact() {
  const [data, setData]= useState({products: []})
  function bcd(){
    fetch("https://dummyjson.com/products")
    .then((res)=>res.json())
    .then((resp)=>{
      setData(resp)
    })
  }
  useEffect(()=>{
    bcd()
  },[])
  return (
    <div>
      this is contact
      {
        data.products.map((item)=>(
          <div>
            <h1>{item.title}</h1>
            </div>
        ))
      }
    </div>
  )
}

export default Contact