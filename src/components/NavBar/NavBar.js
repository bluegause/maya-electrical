import React, { useState, useEffect,  } from "react";
import { NavLink } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import logo from "../../assets/mayalogo-trnsprnt.png";

import "./navbar.css";

const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

        const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    return(
        <>
            <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
                <NavLink to="/"><img src={logo} alt="Maya Electrical logo" width={"45px"} height={"45px"}/></NavLink>
                <div className="hamburger">
                    <Hamburger direction="left" />
                </div>
                <ul className="link-container">
                    <li className="link">
                        <NavLink to="/services" className="item">Services</NavLink>
                    </li>
                    <li className="link">
                        <NavLink to="/about" className="item">About Us</NavLink>
                    </li>
                    <button className="contact-button">
                        <NavLink to="/contact" className="item">Contact Us</NavLink>
                    </button>
                </ul>
                
            </nav>
        </>
    )
}

export default NavBar;