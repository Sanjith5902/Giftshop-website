import { useState,useEffect } from "react";
import './banner.css';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
function Bannerslider() {
  const slider = [
    {
      image: banner1,
      title: "Buy 1 Get 2"
    },
    {
      image: banner2,
      title: "offer upto 50% for bulk orders"
    },
    {
      image: banner3,
      title: "discount for coupons"
    }
  ];
  const [act, setact] = useState(0);
  const prev = () => {
    setact((act - 1 + slider.length) % slider.length)
  }
  const next = () => {
    setact((act + 1) % slider.length)
  }
  const current = (x) => {
    return((act + x + slider.length) % slider.length)
  }
useEffect(()=>{
  const timer = setInterval(()=>{next();},3000);
  return ()=>{clearInterval(timer);};
},[act]);
  return (
    <div className="main-banner">
      
      <div className="slider-main">
        <div className="slider-side">
          <img src={slider[current(-1)].image} />
        </div>
        <button className="bttn" onClick={prev}> ❮</button>
        <div className="slider-center">
          <img src={slider[act].image} />
          <div className="slider-contents">
          <h2>{slider[act].title}</h2>
          <button className="btn btn-primary bton">Shop Now</button>
          </div>
        </div>
        <button className="bttn" onClick={next}> ❯</button>
        <div className="slider-side">
          <img src={slider[current(+1)].image} />
        </div>

      </div>
      



    </div>
  )
}
export default Bannerslider;
