import { useEffect, useState } from "react";

// Her henter vi data fra et API ved hjælp af et ID
const useFetchById = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Her henter vi produktdata fra JSON API
  const fetchProductById = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Netværksrespons var ikke ok");
      }
      const data = await response.json();
      setProduct(data); // Opdaterer produkterne med vores data
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Hver gang ID ændrer sig, kører fetchProductById (som køres af useEffect)
  useEffect(() => {
    fetchProductById(id);
  }, [id]); // useEffect kører kun når ID ændrer sig

  return { product, loading, error }; // Returnerer "product", "loading" og "error" tilstanden fra Hooken så den kan bruges i vores komponent
};

export default useFetchById; // Eksporteres så den kan bruges i andre filer