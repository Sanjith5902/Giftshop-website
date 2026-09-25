import { useParams,useNavigate } from "react-router";
import products from "../shoppingpage/product";
import trend from "../homepage/trending";
import Button from "react-bootstrap/Button";
import './viewproduct.css';
import { useState,useContext } from "react";
import {shopContext} from "../context";
function ProductDetails() {
  const { addToCart } = useContext(shopContext);
  const navigate = useNavigate();
     const { type, id } = useParams();
   let product;

    if (type === "trending") {

        product = trend.find(
            (p) => p.id === Number(id)
        );

    } else if (type === "product") {

        product = products.find(
            (p) => p.id === Number(id)
        );
    }

    if (!product) {
        return <h4>No product found</h4>;
    }

    const handleAddToCart = () => {

        addToCart(product);

        navigate("/cart");
    };
    return (
        <div className="view_container">
            <img className="image_view" src={product.image} />

            <div className="details_view">

                <h2>{product.name}</h2>
                <p className="rating">
                    ⭐ {product.rating} / 5
                </p>

                <p className="detail-product">{product.details}</p>
                <h4 className="viewprice">product price:</h4>
                <h4 className="view_p">₹{product.price}</h4>
                <Button onClick={handleAddToCart} className="view_bbton">add to cart</Button>
            </div>
        </div>
    );
}
export default ProductDetails;