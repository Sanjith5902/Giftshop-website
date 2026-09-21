
import NavScrollExample from './nav.jsx'
import Footerbase from './footer.jsx';
import { Routes, Route } from "react-router";
import Home from './homepage/home.jsx'
import ProductList from './shoppingpage/productlist.jsx'
import About from './about/about.jsx'
import './App.css'
function App() {

  return (
    <div className="App">
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<ProductList/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footerbase/>
    </div>
    
  );

}

export default App
