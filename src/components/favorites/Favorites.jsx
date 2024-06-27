import useFetch from "../../hooks/useFetch";
import ProductCard from "../productCard/ProductCard";

const Favorites = () => {

    const {rating} = useFetch();
    return (
        <section className="products">
            {rating.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </section>
    )
}

export default Favorites;