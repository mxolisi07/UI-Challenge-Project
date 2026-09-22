import React, { useState}  from "react";
import { MdCoffee } from "react-icons/md";
import { FaCoffee } from "react-icons/fa";
import { GiCoffeeBeans } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

const NaviBar: React.FC = () => {
    const [iconIndex, setIconIndex] = useState(0);

    const icons = [<FaCoffee/>, <GiCoffeeBeans/>, <MdCoffee/>];

    const switchIcon = () => {
        setIconIndex((prev) => (prev + 1) % icons.length)
    };

    return (
        <nav className= "navbar">
            <div className= "logo" onClick={switchIcon} color="black">
                <span style= {{ marginRight: "8px", fontSize: "24px" }}>
                    {icons[iconIndex]}
                </span>
                Cofy Solutions
            </div>
            <ul className= "nav-links">
                <li>Home</li>
                <li>Menu</li>
                <li>Blog</li>
                <li>Media</li>
                <li>Contact</li>
                <FaSearch id="search-icon" />
            </ul>
            
        </nav>
    )
};
export default NaviBar;