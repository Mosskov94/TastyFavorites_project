import PageHeader from "../components/pageHeader/PageHeader";
import useFetchById from "../hooks/useFetchById";
import Favorites from "../components/favorites/Favorites";
import SectionHeader from "../components/sectionHeader/SectionHeader";
import MyFavorites from "../components/myFavorites/MyFavorites";
import Newsletter from "../components/newsletter/Newsletter";

const Home = () => {

    const {product} = useFetchById(5);
   

    return (
        <section>


            <PageHeader
            title='PÆNE PRODUKTER'
            subTitle='Her kan du få alle dine pæne produkter'
            headerImg={product?.thumbnail}/>

            <div className="section_header"><SectionHeader title='Brugerens favoritter'/></div>
            <Favorites/>
            <SectionHeader title='Mine favoritter'/>
            <MyFavorites/>
            <Newsletter title='Tilmeld dig nyhedsbrevet'/>


        </section>
    );
};

export default Home;