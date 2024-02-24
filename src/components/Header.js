import React from 'react';
import './header.css'; // Import the CSS file
import Logo from "../Assests/WOOP_Logo_No_BG.png";


const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="header-right">
                <img src={Logo} alt="Logo" />
            </div>
        </header>
    );
};

export default Header;
