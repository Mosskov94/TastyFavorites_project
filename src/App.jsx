import { useRoutes } from "react-router-dom";

import Navigation from "./navigation/Navigation";
import Footer from "./components/footer/Footer";

import Contact from "./pages/contact/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/productDetails/ProductDetails";





function App() {

  const routes = useRoutes([
        {path: "/", element: <Home/>},
        {path: "/about", element: <About/>},
        {path: "/contact", element: <Contact/>},
        {path: "/products", element: <Products/>},
        {path: "/products/:id", element: <ProductDetails/>}
        
  ]);



  return (

    <div className="app-container"> 
    <Navigation/>
    <div className="app-content">{routes}</div>
    <Footer/>
    </div>

  );
}

export default App;
