// import { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
// import "./App.css";

// function Product() {
//   const [data, setData] = useState({ products: [] });
//   const url = "https://dummyjson.com/products";

//   function fetchinfo() {
//     fetch(url)
//       .then((res) => res.json())
//       .then((resp) => {
//         setData(resp);
//         console.log(resp);
//       });
//   }

//   useEffect(() => {
//     fetchinfo();
//   }, []);

//   return (
//     <div className="App">

//    <Link to="/Product">Go to Product</Link>
//       {data.products.map((item) => {
//         return (
//           <div className="border" key={item.id}>
//             <p></p>
//             <div className="img-box">
//               <img className="img" src={item.thumbnail} alt="product" />
//             </div>

//             <div className="description-box">
//               <h3>{item.title}</h3>

//               <p>{item.description}</p>
//               <div className="price-section">
//               <p>
//                 <b>Brand:</b> {item.brand}
//               </p>
//               <p>
//                 <b>Price:</b>
//                 {item.price}
//               </p>
//               </div>
//               <p>
//                 <b>Discount:</b>
//                 {item.discountPercentage}
//               </p>

//               <p>
//                 <b>Category: </b>
//                 {item.category}
//               </p>

//               <div className="rating ">
//                 <h4> InStock{item.stock}</h4>
//                 <h4>Rating {item.rating}</h4>
//               </div>
//             </div>

//             <button>click to see more</button>
//           </div>
//         );
//       })}

//     </div>
//   );
// }

// export default Product;
import { useCart } from "react-use-cart";
import React from "react";
import "./App.css";

function GotoCart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  if (isEmpty) return <p>Your cart is empty</p>;
  return (
    <div>
      <h1 className="cart-number">
        
        ({totalUniqueItems})
        </h1>
     
      <ul>
        {items.map((item) => (
          <li className="" key={item.id}>
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
              </div>
            </div>
            {item.quantity} x {item.brand} &mdash;
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>remove item from cart </button>
            <h1>{item.price}</h1>
          </li>

          
            
        ))}
      </ul>

      
    </div>
  );
}

export default GotoCart;
