// Home.js
import { useCart } from "react-use-cart";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  const [data, setData] = useState({ products: [] });
  const url = "https://dummyjson.com/products";
  const { addItem } = useCart();



  function fetchinfo() {
    fetch(url)
      .then((res) => res.json())
      .then((resp) => {
        setData(resp);
        console.log(resp);
      });
  }

  useEffect(() => {
    fetchinfo();
  }, []);

  return (
    <div className=" ">
      
      <div className="">
        {data.products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.thumbnail} className="card-img" alt="product" />
            <div className="">
              <h3 className="">{item.title}</h3>
              <p className="">{item.description}</p>
              <div className="">
                <p className="">
                  <b>Brand:</b> {item.brand}
                </p>
                <p className="">
                  <b>Price:</b> ${item.price}
                </p>
              </div>
              <p className="">
                <b>Discount:</b> {item.discountPercentage}%
              </p>
              <p className="">
                <b>Category:</b> {item.category}
              </p>
              <div className="">
                <h4 className="">InStock {item.stock}</h4>
                <h4 className="">Rating {item.rating}</h4>
              </div>
              <div className="">
                <button onClick={() => addItem(item)}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
