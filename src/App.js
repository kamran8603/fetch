import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./App.css";
import GotoCart from "./GotoCart";
import Cart from "./Cart";
import Fetch from "./Fetch";
import Something from "./Something";
import Great from "./Great";
import ControlledCarousel from "./ControlledCarousel";
import Carouselll from "./Crouselll";
import Slider from "./Slider";
import { useState } from "react";
import Some from "./Some";

function App() {
  const url="https://jsonplaceholder.typicode.com/comments"
  const [value, setValue]= useState([])
  function fetchinfo(){
    fetch(url)
    .then((res)=>res.json())
    .then((resp)=>{
      setValue(resp)

    })
  }
  
  const slides = [
    'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvEfJzPktY6DZ4vKdLl-vbilPeMl89zNUXPvKuJgR5Q&s',
    'https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg'
  ];
  return (
    <div className="App">
      <Router>
        <div className="Appp">
          <div className="components">
            <div style={{display: "flex", justifyContent: "space-around"}}>
            <Link className="Home" to="/">
              Home
            </Link>

            <Link to="/about">About Us</Link>

            <Link to="/contact">Contact Us</Link>
            <Link to="/go to cart">Cart</Link>
            <Link to="/Cart">Cart</Link>
            <Link to="fetch">Fetch</Link>
            <Link to="Something">Something</Link>
            <Link to="Great">Great</Link>
            <Link to="compo">ControlledCarousel</Link>
            <Link to="crousel">Crouselll</Link>
            <Link to="slider">Slider</Link>
            <Link to="some">Some</Link>
          
            </div>
            
          </div>

          <div className="all">
            <Routes>
              
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
              <Route exact path="/go to cart" element={<GotoCart />}></Route>
              <Route exact path="/cart" element={<Cart />}></Route>
              <Route exact path="/fetch" element={<Fetch />}></Route>
              <Route exact path="/Something" element={<Something />}></Route>
              <Route exact path="/great" element={<Great />}></Route>
              <Route exact path="/compo" element={<ControlledCarousel data={fetchinfo} />} ></Route>
              <Route exact path="/crousel" element={<Carouselll slides={slides} />} />
              <Route exact path="/slider" element={<Slider />} ></Route>
              <Route exact path="/some" element={<Some />} ></Route>

            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
