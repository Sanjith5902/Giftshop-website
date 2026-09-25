import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./addtocart.css";
import { useState,useContext } from "react";
import { shopContext } from "../context";

function AddToCart() {
 const {cart,increaseQuantity,decreaseQuantity,removeFromCart} = useContext(shopContext);
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">

      <h2 className="cart-heading">
        My Cart
      </h2>

      {cart.length === 0 ? (

        <div className="empty-cart">
          <h4>Your cart is empty</h4>
        </div>

      ) : (

        <div className="cart-content">

          <div className="cart-products">

            {cart.map((item) => (

              <Card
                className="cart-card"
                key={item.id}
              >

                <div className="cart-product-row">

                  <Card.Img
                    src={item.image}
                    className="cart-image"
                  />

                  <Card.Body>

                    <Card.Title>
                      {item.name}
                    </Card.Title>

                    <Card.Text>
                      ₹{item.price}
                    </Card.Text>

                    <div className="quantity">

                      <Button
                        variant="secondary"
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        -
                      </Button>

                      <span>
                        {item.quantity}
                      </span>

                      <Button
                        variant="secondary"
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        +
                      </Button>

                    </div>

                    <Button
                      variant="danger"
                      className="remove-button"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      Remove
                    </Button>

                  </Card.Body>

                </div>

              </Card>

            ))}

          </div>


          <Card className="summary-card">

            <Card.Body>

              <Card.Title>
                Order Summary
              </Card.Title>

              <hr />

              <div className="summary-row">

                <span>
                  Number of Items
                </span>

                <strong>
                  {totalItems}
                </strong>

              </div>

              <div className="summary-row">

                <span>
                  Total Amount
                </span>

                <strong>
                  ₹{totalAmount}
                </strong>

              </div>

              <hr />

              <div className="summary-total">

                <span>
                  Total: 
                </span>

                <strong>
                  ₹{totalAmount}
                </strong>

              </div>

              <Button
                variant="success"
                className="pay-button"
              >
                Proceed to Pay
              </Button>

            </Card.Body>

          </Card>

        </div>

      )}

    </div>
  );
}

export default AddToCart;