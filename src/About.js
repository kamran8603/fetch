import React, { useEffect, useState } from 'react';

function About() {
  const [value, setValue] = useState([]);
  const [item, setItem] = useState(false);
  
  const productsUrl = "https://fakestoreapi.com/products/";
  const commentsUrl = "https://jsonplaceholder.typicode.com/comments";
  
  function fetchItems(url) {
    setItem(true);
    fetch(url)
      .then((res) => res.json())
      .then((resp) => {
        setValue(resp);
        console.log(resp);
      })
     
  }

  useEffect(() => {
    fetchItems(productsUrl); 
  }, []);
  
  return (
    <div>
      <button onClick={() => fetchItems(commentsUrl)}>Fetch Comments</button>
      <button onClick={() => fetchItems(productsUrl)}>Fetch Products</button>
      {item && (
        <div>
          {value.map((item) => (
            <div key={item.id}>
              <h1>{item.email || item.title}</h1>
              <img src={item.image} alt='' />
              <h3>$ {item.price}</h3>
              <h3>{item.category}</h3>
              <p>{item.description}</p>
              <h4>{item.rating?.rate}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default About;
