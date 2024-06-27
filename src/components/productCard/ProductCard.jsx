import { Link } from "react-router-dom";
import styles from "./productCard.module.css";
import{FcLike, FcDislike} from "react-icons/fc";
import { useLocalStorage } from "@uidotdev/usehooks";

const ProductCard = ({product}) =>{
    console.log(product)
    const [favorites, setFavorites] = useLocalStorage("Favorites", []);
    const isFavorite = favorites.includes(product.id)

    const handleLike = () => {
        setFavorites((prevFavorites) => isFavorite ? prevFavorites.filter((fav) => fav !== product.id) : [...prevFavorites, product.id])
    }


    return(

        <figure className={styles.productCard}>
        <Link to={`/products/${product.id}`} >
        <img src={product.images[0]} alt={product.name} />
            </Link>
           
                
                <figcaption>
                    <h2>{product.title}</h2>
                    {isFavorite ? <FcDislike size={30} onClick={handleLike}/> : <FcLike size={30} onClick={handleLike}/>}
                </figcaption>
            </figure>
   


   );
}

export default ProductCard;





