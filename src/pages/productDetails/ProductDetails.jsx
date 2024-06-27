
import { useParams } from "react-router-dom";
import useFetchById from "../../hooks/useFetchById";
import PageHeader from "../../components/pageHeader/PageHeader";
import styles from "./productDetails.module.css";


const ProductDetails = () => {

    const {id} = useParams();
    const {product} = useFetchById(id);
    console.log(product)

    return(
        <>

        <PageHeader 
        title='Product Details'
        headerImg={product?.thumbnail}/>

        <section className={styles.details}>


        <section className={styles.dimensions}>
            Width:<h2>{product?.dimensions.width}</h2>
            Height<h2>{product?.dimensions.height}</h2>
            Depth:<h2>{product?.dimensions.depth}</h2>
        </section>

        <section className={styles.description}>
            <h2>{product?.description}</h2>
        </section>

        <section className={styles.info}>
        <h2>Price:{product?.price},-</h2>
        <h2>SKU:{product?.sku}</h2>
        <h2>In Stock:{product?.stock}</h2>
        <h2>{product?.shippingInformation}</h2>
        </section>

        <div className={styles.review}>
            {product?.reviews.map((review, index) => <div key={index}>
            
            <p className={styles.a}>{review.reviewerName}</p>
            <p className={styles.b}>{review.rating}</p>
            <p className={styles.c}>{review.comment}</p>
            <p className={styles.d}>{review.date}</p>


        </div>)}</div>

  
        </section></>
    );
};

export default ProductDetails;