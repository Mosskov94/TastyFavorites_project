import { useLocalStorage } from "@uidotdev/usehooks";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../productCard/ProductCard";

const MyFavorites = () =>{

    const {products} = useFetch();
    const [favorites] = useLocalStorage("Favorites", []);

    const favoriteProducts = products.filter((product) => favorites.includes(product.id)
    )

    console.log(favoriteProducts)
    return (

        <section className="products">
            {favoriteProducts?.map((product) => (
                <ProductCard isFavorite={true} key={product.id} product={product}/>
            ))}
        </section>

    )
}

export default MyFavorites;