import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { interiorBackground, exteriorBackground } from "../../assets/AssetsIndex";
import { Money, Leaf, Login, Tune } from "../PageIndex";
import Card from '../../components/Card/Card';
import { responsive, serviceData } from "../../data";
import Carousel from "react-multi-carousel";

import 'react-multi-carousel/lib/styles.css';
import "./home.css";



const Home = () => {
    const service = serviceData.map((item, index) => (
        <Card
            key={index}
            icon={item.icon}
            name={item.name}
            description={item.description}
        />
    ))

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
                            <Money sx={{fontSize: '28px', marginRight: '10px'}}/>
                        </div>

                        <div className="icon" data-aos = "slide-right" data-aos-duration="2005">
                            <p className="icon-typography">Energy Efficient</p>
                            <Leaf sx={{fontSize: '28px', marginRight: '10px'}}/>

                        </div>

                        <div className="icon" data-aos = "slide-right"data-aos-duration="2010">
                            <p className="icon-typography">Remote Accessibility</p>
                            <Login sx={{fontSize: '28px', marginRight: '10px'}}/>
                            
                        </div>

                        <div className="icon last" data-aos = "slide-right" data-aos-duration="2015">
                            <p className="icon-typography">Control & Customizablity</p>
                            <Tune sx={{fontSize: '28px', marginRight: '10px'}}/>
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

                    <div className="home2-header" data-aos = 'fade-in'>
                    <h4 className="home2-head">
                        Upgrade Today with
                    </h4>
                    <p className="bold-text">
                        MAYA ELECTRIC
                    </p>
                    </div>
                    

                    <hr style={{ width: "50%", background: "linear-gradient(to right, #FFFFFF, #009FFD, #2A2A72)" }} data-aos = "fade-in" />

                    <p className="home2-subheading" data-aos = "fade-in">
                        We provide smart home installations for new & existing residences throughout San Diego, California.
                        From smart lighting and system upgrades, to new home construction plans, Maya Electric is here to light the way.
                    </p>
                    

                    <div className="carousel-container" data-aos = 'slide-right'>
                        <Carousel
                            containerClass="carousel-cards"
                            infinite={true}
                            swipeable={true}
                            draggable={true}
                            autoPlay={false}
                            showDots={true}
                            renderDotsOutside={false}
                            arrows={true}
                            responsive={responsive}>

                                {service}

                        </Carousel>      
                    </div>               

                    <div className="home2-learn-button" data-aos = 'slide-up'>
                        <Link to="/contact" className="learn-more-link">
                            <button className="home2-learn-more">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="home3-section">
                <div className="home3-container">
                    <div className="home3-header__container">

                    </div>
                    <div className="home3-content__container">

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;