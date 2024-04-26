import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { interiorBackground, Transparentlogo, SDhouses, heroBg } from "../../assets/AssetsIndex";
import { Money, Leaf, Login, Tune, Light, Panel, Wireless, Tools, Upgrade, House } from "../PageIndex";
import Card from '../../components/Card/Card';
import { responsive, serviceData } from "../../data";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

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
    }, []);

    return (
        <>
            <div className="home-hero" style={{backgroundImage: `url(${heroBg})`, backgroundPosition: 'center center', backgroundRepeat:'no-repeat'}}>
                <div className="hero-tint">
                    <div className="hero-container" data-aos = "fade-in" data-duration-aos="3000">
                        <h1 className="hero-header">
                            Elevate <br/>
                            Your <br/>
                            Lifestyle. <br/>
                        </h1>
                        <p className="hero-subheading">
                            With Maya Electric's smart home lighting installations, You can unlock 
                            the full potential of your residence. Contact us today for a quote and 
                            give your property the <i className="italic-text"> upgrade that it deserves.</i>
                        </p>
                        <div className="hero-button__container">
                            <Link to="/contact" className="contact-hero__contact">
                                Schedule Today
                            </Link>
                            <Link to="/services" className="contact-hero__offer">
                                What We Offer
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <section className="home1-section">
                <div className="home1-bg">
                    <h2 className="home1-header" data-aos = "fade-in">
                        Home Lighting Made <i>Efficient</i>
                    </h2>
                    <hr />
                    <div className="home1-content" data-aos = "fade-in">
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
                                Smart home technology allows you to automate, control and monitor various aspects of your home, such as lighting, temperature, window shades and electricity consumption, through a centralized system or remotely through an app.
                                Allowing you to manage your property in a more convenient way. 
                            </p>
                            
                        </div>
                    </div>
                    <div className="home1-button__container">
                        <Link to="/services" className="home1-link" style={{textDecoration: "none"}}>
                            <button className="home1-button"  data-aos = "fade-in">Explore Options</button>
                        </Link>
                    </div>
                </div> 
            </section>

            <section className="home2-section" style={{backgroundImage: `url(${interiorBackground})`}}>
                <div className="home2-container">
                    <div className="home2-header__wrapper" data-aos = 'fade-in'>
                        <h4 className="home2-header">
                            Upgrade Your Home with
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
                <h3 className="home3-header" data-aos = "fade-in">
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

                    <div className="home3-info__container" data-aos="fade-in">
                        <p className="home3-typography">
                            Located and operated in San Diego, Maya Electric is happily serving every residential property wanting to upgrade or update. We offer our services to exisiting smart home owners, as well as those who are trying to convert their new & current properties to a smart home. We thrive to offer the best services, at competitive prices, making sure you and your property are 100% satisfied.
                            <br/>
                            <br/>
                            Have any questions or ready for a quote? Call us today at <a href="tel:+18582151331" className="phone-number">+1(858) 215-1331 </a>or fill out the form located on the contace page. We'll try our best to give you the answers you need in a time orderly manner. Let's turn your home smart today! 
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
                                Enhance Your Home Lighting Today
                        </h3>
                    </div>
                    <div className="end-info__container">
                        <div className="end-icons__wrapper">
                            <div className="icons-wrap__container">
                                <Light sx={{fontSize: '50px', borderRadius: '5px', backgroundColor: 'rgba(33, 83, 204, .8)', padding: '15px'}}/>
                                <Panel sx={{fontSize: '50px', borderRadius: '5px', backgroundColor: 'rgba(33, 83, 204, .8)', padding: '15px'}}/>
                                <Wireless sx={{fontSize: '50px', borderRadius: '5px', backgroundColor: 'rgba(33, 83, 204, .8)', padding: '15px'}}/>
                            </div>
                            <div className="icons-wrap__container">
                                <Tools sx={{fontSize: '50px', borderRadius: '5px', backgroundColor: 'rgba(33, 83, 204, .8)', padding: '15px'}}/>
                                <Upgrade sx={{fontSize: '50px', borderRadius: '5px', backgroundColor: 'rgba(33, 83, 204, .8)', padding: '15px'}}/>
                                <House sx={{fontSize: '50px', borderRadius: '5px', backgroundColor: 'rgba(33, 83, 204, .8)', padding: '15px'}}/>
                            </div>
                            <div className="icons-wrap__container2">
                                <Light sx={{fontSize: '35px', borderRadius: '5px', backgroundColor: 'rgba(33, 83, 204, .8)', padding: '15px'}}/>
                                <Panel sx={{fontSize: '35px', borderRadius: '5px', backgroundColor: 'rgba(33, 83, 204, .8)', padding: '15px'}}/>
                                <Wireless sx={{fontSize: '35px', borderRadius: '5px', backgroundColor: 'rgba(33, 83, 204, .8)', padding: '15px'}}/>
                            </div>
                            <div className="icons-wrap__container2">
                                <Tools sx={{fontSize: '35px', borderRadius: '5px', backgroundColor: 'rgba(33, 83, 204, .8)', padding: '15px'}}/>
                                <Upgrade sx={{fontSize: '35px', borderRadius: '5px', backgroundColor: 'rgba(33, 83, 204, .8)', padding: '15px'}}/>
                                <House sx={{fontSize: '35px', borderRadius: '5px', backgroundColor: 'rgba(33, 83, 204, .8)', padding: '15px'}}/>
                            </div>
                        </div>
                        
                        <p className="end-typography">
                            Maya Electric is ready to take your home, rental property, or apartment to the next level with smart home technologies and devices. With state of the art products, reasonable prices, and experience, we will guarentee a fast and worry free installation to make sure you and your home are taken care of. 
                            <br/>
                            <br/>
                            Don't hesitate to give us a call or send as a message to schedule a quote today. Take the first step to take control of your home's energy consumption, customizablity, and cost, The <i>Maya Electric</i> way.
                        </p>
                    </div>
                    <div className="end-buttons__container" data-aos="fade-in">
                        <Link to='/contact' className="end-link">
                            <button className="end-schedule__button">
                                Message Today
                            </button>
                        </Link>
                        <button className="end-phone__button">
                            <a href="tel:+18582151331">Call Today</a>
                        </button>
                    </div>             
                </div>
            </section>

        </>
    )
}

export default Home;