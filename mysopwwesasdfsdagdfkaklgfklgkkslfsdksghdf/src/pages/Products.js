import React, { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/products", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setProducts(res.data))
      .catch((err) => alert("Unauthorized"));
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-semibold text-center mb-5">🛍️ Products List</h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.ProductID} className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">{p.ProductName}</h3>
              <p className="text-gray-600">💲 {p.Price.toFixed(2)}</p>
              <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
