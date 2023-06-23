import React from "react";
import Logo from "../../assets/mayalogo-city.png"
import interior from "../../assets/homeInterior.jpg"
import "./home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="home-hero" style={{backgroundImage: `url(${interior})`}}>
                <div className="home-header">
                    <div className="home-text">
                        <h1>Elevate <br/>
                            Your <br/>
                            Lifestyle.
                        </h1>
                        <p>With Maya Electric's Smart Home Installations, You can Unlock the Full Potential of Your Home.</p>
                        <div className="button-container">
                            <NavLink to="/contact" className="contact-link"><button className="contact-btn color">Schedule Today</button></NavLink>
                            <NavLink to="/services" className="contact-link"><button className="contact-btn">What We Offer</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;