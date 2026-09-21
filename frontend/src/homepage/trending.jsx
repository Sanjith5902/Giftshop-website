import './trending.css'

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import trend1 from '../assets/trend1.jpg';
import trend2 from '../assets/trend2.jpg';
import trend3 from '../assets/trend3.jpg';
import trend4 from '../assets/trend4.jpg';
import trend5 from '../assets/trend5.jpg';
import trend6 from '../assets/trend6.jpg';
import trend7 from '../assets/trend7.jpg';
import trend8 from '../assets/trend8.jpg';
import trend9 from '../assets/trend9.jpg';
import trend10 from '../assets/trend10.jpg';

function Trendingslider() {
  const trend = [
    { id: 1, image: trend1, product: "Tea Cup", price: 524 },
    { id: 2, image: trend2, product: "Gift Hamper", price: 545 },
    { id: 3, image: trend3, product: "Scented Candle", price: 518 },
    { id: 4, image: trend4, product: "Teddy Bear", price: 535 },
    { id: 5, image: trend5, product: "Photo Frame", price: 522 },
    { id: 6, image: trend6, product: "Coffee Mug", price: 520 },
    { id: 7, image: trend7, product: "Flower Bouquet", price: 530 },
    { id: 8, image: trend8, product: "Keychain", price: 512 },
    { id: 9, image: trend9, product: "Chocolate Box", price: 528 },
    { id: 10, image: trend10, product: "Personalized Gift Box", price: 555 },
  ];

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
              <Card.Title>{item.product}</Card.Title>
              <Card.Text>Price: ₨{item.price}</Card.Text>

              <Button className="me-2 cartadd">Add To Cart</Button>
              <Button  className="view" variant="primary">View</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Trendingslider;