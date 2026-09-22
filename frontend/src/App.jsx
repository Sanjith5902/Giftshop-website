
import NavScrollExample from './nav.jsx'
import Footerbase from './footer.jsx';
import { useState } from "react";
import { Routes, Route } from "react-router";
import Home from './homepage/home.jsx'
import ProductList from './shoppingpage/productlist.jsx'
import About from './about/about.jsx'
import Contact from './contact/contact.jsx'
import ProductDetails from './shoppingpage/viewproduct.jsx'
import AddToCart from './shoppingpage/addtocart.jsx'
import './App.css'
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    setCart((previousCart) => {

      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {

        return previousCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );

      }

      return [
        ...previousCart,
        {
          ...product,
          quantity: 1
        }
      ];

    });
  };

  const increaseQuantity = (id) => {

    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );

  };

  const decreaseQuantity = (id) => {

    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  };

  const removeFromCart = (id) => {

    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );

  };

  return (
    <div className="App">
      <NavScrollExample />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<ProductList addToCart={addToCart}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />}/>
<Route
        path="/cart"
        element={
          <AddToCart
            cart={cart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
          />
        }
      />
      </Routes>
      <Footerbase/>
    </div>
    
  );

}

export default App
