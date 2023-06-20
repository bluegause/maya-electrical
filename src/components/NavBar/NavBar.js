import React, { useState, useEffect,  } from "react";
import { NavLink } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import logo from "../../assets/mayalogo-trnsprnt.png";

import "./navbar.css";

const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)

    }, []);

    const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
        setIsScrolled(true);
    } else {
        setIsScrolled(false);
    }
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log('triggered');
    };

    return(
        <>
            <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
                <img src={logo} alt="Maya Electrical logo" width={"45px"} height={"45px"}/>
                <div className="hamburger" onClick={toggleMenu}>
                    <Hamburger direction="left" toggled={isMenuOpen} toggle={setIsMenuOpen} />
                </div>
                <ul className={`link-container ${isMenuOpen ? 'is-open' : ''}`}>
                    <li>
                        <NavLink to="/" className="item">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className="item">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="item">About Us</NavLink>
                    </li>
                    <button className="contact-button">
                        <NavLink to="/contact" className="contact-item">Contact Us</NavLink>
                    </button>
                </ul>
                
            </nav>
        </>
    )
}

export default NavBar;