import React, { useEffect, useState } from "react";

const ShopCategory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="p-5">
      <div className="grid product-container gap-3">
        {products.map((product) => (
          <div
            id={product.id}
            key={product.id}
            className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md"
          >
            <img
              className="w-full h-56 object-contain rounded-t-lg"
              src={product.image}
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="text-l font-semibold text-gray-800">
                {product.title}
              </h2>
              <p className="text-l text-green-500 mt-1">{product.price}</p>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {product.description}
              </p>
              <button className="mt-4 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
