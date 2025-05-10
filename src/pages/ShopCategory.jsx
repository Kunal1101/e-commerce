import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cart";
import useProducts from "../components/ProductsData";

const ShopCategory = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useProducts(); // <-- Use the custom hook here

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  if (loading) {
    return <div className="p-5 text-center">Loading products...</div>;
  }

  if (error) {
    return (
      <div className="p-5 text-center text-red-500">Error: {error.message}</div>
    );
  }

  return (
    <div className="p-5">
      <div className="grid product-container gap-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md"
          >
            <img
              className="w-full h-56 object-contain rounded-t-lg"
              src={product.image}
              alt={product.title}
            />
            <div className="p-4">
              <h2 className="text-l font-semibold text-gray-800">
                {product.title}
              </h2>
              <p className="text-l text-green-500 mt-1">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {product.description}
              </p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 cursor-pointer w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
