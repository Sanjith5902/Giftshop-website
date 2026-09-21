import { useState, useEffect } from "react";
import './testimonial.css';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
function Ratingslider() {
    const slider = [
        {
            image: person1,
            name: "Ananya R",
            title: "Loved the collection! The product looked exactly like the pictures, and the service was excellent.",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            image: person2,
            name: "Rahul K",
            title: "I ordered a birthday gift for my friend, and it was perfect. Great products at reasonable prices. Will shop again!",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            image: person3,
            name: "Priya S",
            title: "Really beautiful gifts and excellent quality. The delivery was quick, and the packaging was lovely. Definitely recommended!",
            rating: "⭐⭐⭐⭐⭐"
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
        return ((act + x + slider.length) % slider.length)
    }
    
    return (
        <div className="main-review">
            <div className="header-review">
            <h1>“Every Gift Tells a Story, and Here’s What <br></br>Our Happy Customers Have to Say”</h1>
            <div className="line"></div>
            </div>

            <div className="slider-review">
                <button className="bttn1" onClick={prev}> ❮</button>
                <div className="review-side">
                    <img src={slider[current(-1)].image} />
                    <h2>{slider[current(-1)].title}</h2>
                    <p>{slider[current(-1)].name}</p>
                    <h6>{slider[current(-1)].rating}</h6>
                </div>
                
                <div className="review-center"> 
                    <img src={slider[act].image} />
                    <h2>{slider[act].title}</h2>
                    <p>{slider[act].name}</p>
                    <h6>{slider[act].rating}</h6>
                </div>

                
                <div className="review-side">
                    <img src={slider[current(+1)].image} />
                    <h2>{slider[current(+1)].title}</h2>
                    <p>{slider[current(+1)].name}</p>
                    <h6>{slider[current(+1)].rating}</h6>
                </div>
                <button className="bttn1" onClick={next}> ❯</button>
            </div>

        </div>
    )
}
export default Ratingslider;
