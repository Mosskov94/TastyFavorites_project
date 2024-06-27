import Newsletter from "../components/newsletter/Newsletter";
import PageHeader from "../components/pageHeader/PageHeader";
import useFetchById from "../hooks/useFetchById";


const About = () => {

    const {product} = useFetchById(5);

    return (
        <section>
           <PageHeader 
           title='About'
           headerImg={product?.thumbnail}
           />
        </section>
    )
}

export default About;