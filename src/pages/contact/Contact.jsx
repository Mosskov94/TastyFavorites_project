import Newsletter from "../../components/newsletter/Newsletter";
import PageHeader from "../../components/pageHeader/PageHeader";
import useFetchById from "../../hooks/useFetchById";
import styles from "./contact.module.css"


const Contact = () => {
    const {product} = useFetchById(5);

    return (


        <>

        
        <PageHeader
            title='Contact'
            headerImg={product?.thumbnail}/>

        <section className={styles.contact}>  
            <Newsletter title='Tilmeld dig til vores nyhedsbrev!'/>
        </section>


        </>

    )
}

export default Contact;