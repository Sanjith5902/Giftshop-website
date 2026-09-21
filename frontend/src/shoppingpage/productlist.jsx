
import { useState } from "react";
import products from "../shoppingpage/product";
import "./shopping.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductList() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  let visibleProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  if (searchText.trim() !== "") {
    visibleProducts = visibleProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchText.toLowerCase()) ||
        p.category.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  if (sort === "price-low") {
    visibleProducts = [...visibleProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "price-high") {
    visibleProducts = [...visibleProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  const handleSearch = () => {
    setSearchText(search);
  };

  return (
    <div className="shop">

      <header className="shop-header">
        <h1>Gift Catalogue</h1>

        <p>
          {visibleProducts.length} gifts
          {category !== "All" ? ` in ${category}` : ""}
        </p>
      </header>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search gifts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button onClick={handleSearch}>
          Search
        </Button>
      </div>

      {/* Controls */}
      <div className="shop-controls">

        {/* Categories */}
        <div className="category">
          {categories.map((cat) => (
            <button
              key={cat}
              className={
                category === cat
                  ? "pill pill-active"
                  : "pill"
              }
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort */}
        <select
          className="sort-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Sort: Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>

      </div>

      {/* Products */}
      {visibleProducts.length === 0 ? (
        <div className="empty-state">
          <p>No gifts found.</p>
        </div>
      ) : (
        <div className="row">

          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="col-lg-3 col-md-6"
            >
              <Card
                style={{ width: "18rem" }}
                className="product-card"
              >

                <Card.Img
                  variant="top"
                  src={product.image}
                />

                <Card.Body>

                  <Card.Title>
                    {product.name}
                  </Card.Title>

                  <Card.Text>
                    Price: ₹{product.price}
                  </Card.Text>

                  <Button className="me-2 cartadd">
                    Add To Cart
                  </Button>

                  <Button
                    className="view"
                    variant="primary"
                  >
                    View
                  </Button>

                </Card.Body>

              </Card>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default ProductList;



