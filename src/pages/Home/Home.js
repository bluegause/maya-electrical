import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { interiorBackground, exteriorBackground, Transparentlogo, SDhouses } from "../../assets/AssetsIndex";
import { Money, Leaf, Login, Tune, Light, Panel, Wireless, Tools, Upgrade, House } from "../PageIndex";
import Card from '../../components/Card/Card';
import { responsive, serviceData } from "../../data";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import "./home.css";





const Home = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, []);

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
                <div className="hero-container" data-aos-duration="10000" data-aos = "fade-in">
                    <h1 className="hero-header">
                        Elevate <br/>
                        Your <br/>
                        Lifestyle. <br/>
                    </h1>
                    <p className="hero-subheading">
                        With Maya Electric's smart home installations, You can unlock
                        <br/>
                        the full potential of your residence. Contact us today for a quote and<br/> 
                        give your property the <i className="italic-text"> upgrade that it deserves.</i>
                    </p>
                    <div className="hero-button__container">
                        <NavLink to="/contact" className="contact-link">
                            <button className="contact-btn">
                                Schedule Today
                            </button>
                        </NavLink>
                        <NavLink to="/services" className="contact-link">
                            <button className="contact-btn">
                                What We Offer
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>

            <section className="home1-section">
                <h3 className="home1-header" data-aos = "fade-in">
                    Technology Meets <br/>
                    <i>Efficiency</i>
                    <hr className="home1-hr" data-aos = "slide-up"/>
                </h3>
                
                <div className="home1-content">
                    <h4 className="home1-subheading__small" data-aos="slide-right">
                        Why Should You Upgrade
                        Your Property?
                    </h4>
                    <div className="home1-icon__wrapper" data-aos = "slide-right">
                        <div className="home1-icon">
                            <p className="home1-icon__caption">Save Money</p>
                            <Money sx={{fontSize: '28px', marginRight: '10px'}}/>
                        </div>

                        <div className="home1-icon">
                            <p className="home1-icon__caption">Energy Efficient</p>
                            <Leaf sx={{fontSize: '28px', marginRight: '10px'}}/>

                        </div>

                        <div className="home1-icon">
                            <p className="home1-icon__caption">Remote Accessibility</p>
                            <Login sx={{fontSize: '28px', marginRight: '10px'}}/>
                            
                        </div>

                        <div className="home1-icon last">
                            <p className="home1-icon__caption">Control & Customizablity</p>
                            <Tune sx={{fontSize: '28px', marginRight: '10px'}}/>
                        </div>
                    </div>
                    <div className="home1-typography" data-aos = "slide-left">
                        <h4 className="home1-subheading">
                            Why Should You Upgrade <br/>
                            Your Property?
                        </h4>
                        <p className="home1-text">
                            Smart home technology allows you to automate, control and monitor various aspects of your home,
                            such as lighting, temperature, window shades and electricity consumption, through a centralized system or remotely through an app.
                            Allowing you to manage your property in a more convenient way. 
                        </p>
                        
                    </div>
                </div>
                <div className="home1-button__container" data-aos = "fade-in">
                    <Link to="/services" className="services-routing" style={{textDecoration: "none"}}>
                        <button className="home1-button">Explore Options</button>
                    </Link>
                </div>
            </section>

            <section className="home2-section" style={{backgroundImage: `url(${exteriorBackground})`}}>
                <div className="home2-container">
                    <div className="home2-header__wrapper" data-aos = 'fade-in'>
                        <h4 className="home2-header">
                            Upgrade Your Home <br/>
                            with
                        </h4>
                        <p className="home2-bold">
                            MAYA ELECTRIC
                        </p>
                    </div>
                    <hr className="home2-line" data-aos = "fade-in" />
                    <p className="home2-subheading" data-aos = "fade-in" data-aos-duration = '1600'>
                        We provide smart home installations for new & existing residences.
                        From smart lighting and system upgrades, to new home construction plans,
                        Maya Electric is here to light the way, one smart home at a time.
                    </p>
                    <div className="home2-carousel__container" data-aos = 'slide-right' data-aos-duration = '10000'>
                        <Carousel
                            containerClass="home2-carousel__cards"
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
                </div>
            </section>

            <section className="home3-section">
                <h3 className="home3-header">
                    Why Choose Maya Electric?
                </h3>
                <div className="home3-container" data-aos = 'fade-up' data-aos-duration="10000">
                    <div className="home3-card__wrapper">
                        
                        <div className="home3-card">
                            <div className="home3-card__top">
                                <img className="home3-logo" src={Transparentlogo} alt='maya electric logo'/>
                                <h5 className="home3-card__header">
                                    Competitive Pricing
                                </h5>
                            </div>
                            <p className="home3-card__description">
                                We thrive to offer you the best possible rate on all of our installations without cutting corners.
                            </p>  
                        </div>

                        <div className="home3-card">
                            <div className="home3-card__top">
                                <img className="home3-logo" src={Transparentlogo} alt='maya electric logo'/>
                                <h5 className="home3-card__header">
                                    Our Team
                                </h5>   
                            </div>
                            <p className="home3-card__description">
                                With experience and knowledge we'll make sure we offer your home what's best fitting.
                            </p> 
                        </div>

                        <div className="home3-card">
                            <div className="home3-card__top">
                                <img className="home3-logo" src={Transparentlogo} alt='maya electric logo'/>
                                <h5 className="home3-card__header">
                                    Quality
                                </h5> 
                            </div>
                            <p className="home3-card__description">
                                We offer the best products and installation without sacrificing quality.
                            </p>
                        </div>   
                    </div>

                    <div className="home3-info__container">
                        <p className="home3-typography">
                            Located and operated in San Diego, Maya Electric is happily serving every residential property wanting to upgrade or update. We offer our services to exisiting smart home owners, as well as those who are trying to convert their new & current properties to a smart home. We thrive to offer the best services, at competitive prices, making sure you and your property are 100% satisfied.
                            <br/>
                            <br/>
                            With a team of experts, you'll always be confident that your home is in good hands. From smart lighting to panelized systems, we have got you covered!      
                        </p>
                        <Link to="/contact" className="home3-link">
                            <button className="home3-button">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="end-section" style={{backgroundImage: `url(${SDhouses})`}}>
                <div className="end-container" data-aos = 'fade-in' data-aos-duration="10000">
                    <div className="end-head__wrapper">
                        <img className="end-logo" alt='Maya Electric Logo' src={Transparentlogo} /> 
                        <h3 className="end-header">
                                Take the Next Step, <br/>
                                The <i>Maya Electric</i> Way
                        </h3>
                    </div>
                    <div className="end-info__container">
                        <div className="end-icons__wrapper">
                            <Light sx={{fontSize: '50px', borderRadius: '100%', backgroundColor: 'rgba(33, 83, 204, .8)', padding: '15px'}}/>
                            <Panel sx={{fontSize: '50px', borderRadius: '100%', backgroundColor: 'rgba(33, 83, 204, .8)', padding: '15px'}}/>
                            <Wireless sx={{fontSize: '50px', borderRadius: '100%', backgroundColor: 'rgba(33, 83, 204, .8)', padding: '15px'}}/>
                            <Tools sx={{fontSize: '50px', borderRadius: '100%', backgroundColor: 'rgba(33, 83, 204, .8)', padding: '15px'}}/>
                            <Upgrade sx={{fontSize: '50px', borderRadius: '100%', backgroundColor: 'rgba(33, 83, 204, .8)', padding: '15px'}}/>
                            <House sx={{fontSize: '50px', borderRadius: '100%', backgroundColor: 'rgba(33, 83, 204, .8)', padding: '15px'}}/>
                        </div>
                        <p className="end-typography">
                            Maya Electric is ready to take your home, rental property, or apartment to the next level with smart home technologies and innovative devices. With state of the art products, reasonable prices, and experience, we will guarentee a fast and worry free installation to make sure you and your home are taken care of. 
                            <br/>
                            <br/>
                            Don't hesitate to give us a call or send as a message to schedule a quote today. Take the first step to take control of your home's energy consumption, customizablity, and cost, The <i>Maya Electric</i> way.
                        </p>
                    </div>
                    <div className="end-buttons__container">
                        <Link to='/contact' className="end-link">
                            <button className="end-schedule__button">
                                Message Today
                            </button>
                        </Link>
                        <button className="end-phone__button">
                            <a href="tel:8583868083">Call Today</a>
                        </button>
                    </div>             
                </div>
            </section>

        </>
    )
}

export default Home;