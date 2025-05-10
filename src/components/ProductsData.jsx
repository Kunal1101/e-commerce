import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Optional: loading state
  const [error, setError] = useState(null); // Optional: error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const url = `${API_URL}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // 🔁 re-run if category changes

  return { products, loading, error };
};

export default useProducts;
