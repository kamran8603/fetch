import { useCart } from "react-use-cart";
import { useState } from "react";
import "./App.css";

function Some() {
  const [data, setData] = useState({ products: [] });
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://dummyjson.com/products";
  const { addItem } = useCart();

  function fetchinfo(){
    setIsLoading(true);
    fetch(url)
    .then((res)=>res.json())
    .then((resp)=>{
        setData(resp)
        console.log(resp)
    })
  }

  return (
    <div className="">
      <button onClick={fetchinfo}>Fetch Data</button>
      <div className="">
        <div>
          {data.products.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.thumbnail} className="card-img" alt="product" />
              <h3 className="">{item.title}</h3>
              <p className="">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Some;
