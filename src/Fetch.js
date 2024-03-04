import React, { useEffect, useState } from 'react'

function Fetch() {
    const [value, setValue]= useState([])

    function fetchinfo(){
        fetch("https://dummyjson.com/products")
        .then((res)=>res.json())
        .then((resp)=>{
            setValue(resp.products)
            console.log(resp.products)
        })
    }
    useEffect(()=>{
        fetchinfo()
    }, [])
  return (
    <div>
  this is how we fetch 
  {
    value.map((item)=>(
        <div>
            <img src={item.thumbnail} />
            <h1>{item.title}</h1>
            </div>
    ))
  }

    </div>
  )
}

export default Fetch