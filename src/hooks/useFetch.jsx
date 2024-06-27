import { useEffect, useState } from "react";

// useFetch er en brugerdefineret react hook designet til at hente data fra et API og filtrere produkter i kategorier, baseret på specifikke kriterier
const useFetch = () => {
  const [products, setProducts] = useState([]); // tomt array, hvor setProducts er en funktion til at opdatere denne tilstand

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json(); // der skal ventes på svar fra JSON
      console.log(data)
      setProducts(data.products); // Når dataerne er hentet, opdateres "products" med dataerne
    } catch (error) {
      console.error("Fejl ved hentning af produkter:", error);
    }
  };

  // Vi pakker kategorier ind i variabler
  const rating = products.filter((product) => product.rating > 4.8); // her vil vi gerne have, at hvis ratingen er over 4,8 (højst 5), så er de favoritter :D
  const beauty = products.filter((product) => product.category.includes("beauty")); // disse kategorier vises, så man kan trykke på nogle knapper, så fx. kun beauty vises
  const fragrances = products.filter((product) => product.category.includes("fragrances"));
  const furniture = products.filter((product) => product.category.includes("furniture"));

  // Der kaldes på funktionen, som skal køre første gang. Det tomme array sikrer, at effekten kun kører én gang
  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, rating, beauty, fragrances, furniture }; // Returnerer, så vi kan vise kategorierne på en side
};

export default useFetch;

// Kort fortalt, så henter alt det her produktdata fra en API, og de bliver så kategoriseret baseret på vurdering (rating) og produktkategori
