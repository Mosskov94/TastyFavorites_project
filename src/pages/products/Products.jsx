  import useFetch from "../../hooks/useFetch";
import ProductCard from "../../components/productCard/ProductCard";
import PageHeader from "../../components/pageHeader/PageHeader";
import useFetchById from "../../hooks/useFetchById";
import { useState, useEffect } from "react";
import Button from "../../components/button/Button";

const Products = () => {
  const { products, beauty, fragrances, furniture, juice } = useFetch();
  const { product } = useFetchById(20);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = {
    All: products,
    Beauty: beauty,
    Fragrances: fragrances,
    Furniture: furniture,
  };

  useEffect(() => {
    setFilteredProducts(filters[activeFilter]);
  }, [products, beauty, fragrances, furniture, activeFilter]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const productsArray = filteredProducts?.length > 0 ? filteredProducts : products;

  return (
    <section>
      <PageHeader title="Products" headerImg={product?.images} />

      <div className="filterButtons">
        {Object.keys(filters).map((filter) => (
          <Button
            key={filter}
            title={filter}
            className={activeFilter === filter ? "active" : ""}
            onClick={() => handleFilterChange(filter)}
          />
        ))}
      </div>

      <div className="products">
        {productsArray.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Products;