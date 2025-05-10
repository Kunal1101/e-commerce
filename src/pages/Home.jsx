import React from "react";
import useProducts from "../components/ProductsData";

const Home = () => {
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
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Your Style
        </h1>
        <p className="text-lg mb-6">
          Shop the latest trends in fashion and accessories.
        </p>
        <a
          href="/shop"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Shop Now
        </a>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-50 py-16 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Get updates on new arrivals, special offers, and more.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
