import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { interiorBackground, exteriorBackground, logoCity } from "../../assets/AssetsIndex";
import { Link, NavLink } from "react-router-dom";
import { Leaf, Icon, Light, Panel, Wireless, Tools, Upgrade, House, Money, Login, Tune } from "../PageIndex";
import "./home.css";



const Home = () => {

    useEffect(() => {
        Aos.init({ duration: "1500"});
    }, [])

    return (
        <>
            <div className="home-hero" style={{backgroundImage: `url(${interiorBackground})`}}>
                <div className="home-header" data-aos-duration="4000" data-aos = "fade-in">
                    <h1>
                        Elevate <br/>
                        Your <br/>
                        Lifestyle.
                    </h1>
                    <p>
                        With Maya Electric's Smart Home Installations, <br/>
                        You can Unlock the Full Potential of Your Home <br/>
                        Today.
                    </p>
                    <div className="button-container">
                        <NavLink to="/contact" className="contact-link"><button className="contact-btn color">Schedule Today</button></NavLink>
                        <NavLink to="/services" className="contact-link"><button className="contact-btn">What We Offer</button></NavLink>
                    </div>
                </div>
            </div>


            <section className="home-one__container" data-aos = "slide-up">
                <h3>Technology Meets <br/>
                    <i>Efficiency</i>.
                </h3>
                <hr/>
                <div className="home-one__content">
                    <div className="icon-container">
                        <div className="icon"  data-aos = "slide-right">
                            <p className="icon-typography">Save Money</p>
                            <Icon component={Money} sx={{fontSize: '28px', marginRight: '10px'}}/>
                        </div>

                        <div className="icon" data-aos = "slide-right" data-aos-duration="2005">
                            <p className="icon-typography">Energy Efficient</p>
                            <Icon component={Leaf} sx={{fontSize: '28px', marginRight: '10px'}}/>

                        </div>

                        <div className="icon" data-aos = "slide-right"data-aos-duration="2010">
                            <p className="icon-typography">Remote Accessibility</p>
                            <Icon component={Login} sx={{fontSize: '28px', marginRight: '10px'}}/>
                            
                        </div>

                        <div className="icon last" data-aos = "slide-right" data-aos-duration="2015">
                            <p className="icon-typography">Control & Customizablity</p>
                                <Icon component={Tune} sx={{fontSize: '28px', marginRight: '10px'}}/>
                        </div>
                    </div>
                    <div className="home-one__info" data-aos = "slide-left">
                        <p className="home-1__heading">
                            Why Upgrade?
                        </p>
                        <p className="home1-text">
                            Smart home technology allows you to automate, control and monitor various aspects of your home,
                            such as lighting, temperature, window shades and electricity consumption, all from a centralized system or remotely through your smartphone.
                            Allowing you to manage your property in a more convenient and energy efficient way. 
                        </p>
                        
                    </div>
                </div>
                <div className="services-button" data-aos = "fade-in">
                    <Link to="/services" className="services-routing" style={{textDecoration: "none"}}>
                        <button className="home-one-button">Explore Options</button>
                    </Link>
                </div>
            </section>


            <section className="home2-bg" alt='exterior of house background' style={{backgroundImage: `url(${exteriorBackground})`}}>
                <div className="home-two">
                    <h4 className="home2-header">
                        Upgrade Today with <br/>
                        Maya Electric
                    </h4>
                    <hr  style={{background: "white"}}/>
                    <div className="home2-container">
                        
                        <p className="icons-p">
                            We provide smart home installations for new & existing residences throughout San Diego, California.
                            From smart lighting and system upgrades, to new home construction plans, Maya Electric is here to light the way.
                        </p>
        
                        <div className="body-icons-container">
                            <section className="icons-section">
                    
                                <div className="body-icon">
                                    <Light className="body-item" sx={{fontSize: "30px"}} />
                                    <p className="icon-text">Smart Lighting</p>
                                </div>

                                <div className="body-icon">
                                    <Panel className="body-item"  sx={{fontSize: "30px"}} />
                                    <p className="icon-text">Panelized Systems</p>
                                </div>

                                <div className="body-icon">
                                    <Wireless className="body-item"  sx={{fontSize: "30px"}} />
                                    <p className="icon-text">Wireless Systems</p>
                                </div>
                            </section>
                            <section className="icons-section">
                                <div className="body-icon">
                                    <Tools className="body-item"  sx={{fontSize: "30px"}} />
                                    <p className="icon-text">New Construction</p>
                                    
                                </div>
                                <div className="body-icon">
                                    <Upgrade className="body-item"  sx={{fontSize: "30px"}} />
                                    <p className="icon-text">System Upgrades</p>
                                    
                                </div>
                                <div className="body-icon">
                                    <House className="body-item"  sx={{fontSize: "30px"}} />
                                    <p className="icon-text">Remodels</p>
                                    
                                </div>    
                            </section>                      
                        </div>
                    </div>
                    <div className="home2-contact-button">
                        <Link to="/contact" className="contact-link">
                            <button className="home2-contact-us">
                                Contact Us Today
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;