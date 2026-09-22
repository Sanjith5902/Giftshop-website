import { useParams,useNavigate } from "react-router";
import products from "../shoppingpage/product";
import Button from "react-bootstrap/Button";
import './viewproduct.css';
function ProductDetails({ addToCart }) {
     
  const navigate = useNavigate();
    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return (
            <>
                <h4>no product found</h4>
            </>
        )
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