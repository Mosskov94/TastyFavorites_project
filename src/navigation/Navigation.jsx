import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoCodeOfConduct } from "react-icons/go";
import {IoClose} from "react-icons/io5"
import { NavLink } from "react-router-dom";





const Navigation = () => {

//isopen er en tilstand som hvor menuen er lukket (false/true) herefter bruges funktionen togglemenu som kan skifte menuen mellem åben of lukket (true/false)
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (

//hele vores navigation som bruger funktionen onclick={toggleMenu} som gør at hvis der trykkes kan tilstanden blive true/false..åben/lukket
        <nav className="navbar">
        
            <div className="burger-menu" onClick={toggleMenu}>
                    {isOpen ? <IoClose/> : <GiHamburgerMenu/>}
            </div>

            {/* <div><Si4Chan/></div> */}
           
            <ul className={isOpen ? "nav-links open" : "nav-links"}>
                <li>
                    <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact" onClick={toggleMenu}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/Products" onClick={toggleMenu}>Products</NavLink>
                </li>
            </ul>
        
        </nav>



    )
}

export default Navigation;