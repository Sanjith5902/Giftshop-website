import './trending.css'
import { useState,useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import trend from '../homepage/trending'
import { shopContext } from "../context";
import { Routes, Route,useNavigate } from "react-router";

function Trendingslider() {
  const navigate = useNavigate();
const { addToCart } = useContext(shopContext);
const handleAddToCart = (trend) => {
  addToCart(trend);
  navigate("/cart");
};

  return (
    
    <div className='trend'>
        <h1 className='trend2'>Trending Gifts</h1>
        <p></p>
    <div className="row">
      {trend.map((item) => (
        <div key={item.id} className="col-lg-3 col-md-6" style={{ marginBottom: "20px" }}>
          <Card style={{ width: "18rem", height: "100%" }} className='trend-card'>
            
            <Card.Img variant="top" src={item.image} />

            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Price: ₨{item.price}</Card.Text>

              <Button className="me-2 cartadd" onClick={() => handleAddToCart(item)}>Add To Cart</Button>
              <Button onClick={()=>navigate(`/product/trending/${item.id}`)} className="view" variant="primary">View</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Trendingslider;