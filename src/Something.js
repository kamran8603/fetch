import React, { useEffect, useState } from "react";

function Something() {
  const [value, setValue] = useState([]);
  function fetchinfo() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((resp) => {
        setValue(resp.products);
        console.log(resp.products);
      });
  }
  useEffect(() => {
    setTimeout(()=>{
        fetchinfo()
    },5000)
    
  }, []);
  return (
    <div>
      Something
      {value.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default Something;
