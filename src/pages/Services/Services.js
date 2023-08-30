import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Servicesbg, mayaWhite } from '../../assets/AssetsIndex';
import './services.css';

const Services = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
        <>
            <div className='services-container'>

                <section className='services-header__bg' style={{backgroundImage: `url(${Servicesbg})`}}>
                    <div className='services-header__container'>
                        <h2 className='services-header'>
                            Smart home lighting  <br/>
                            made easy.
                        </h2>
                        <p className='services-subheading'>
                            At Maya Electric, we transform your average home into a smart home. Specializing in smart home lighting installations, we fully embrace the benefits of smart home technology and offer them to you. <span>Whether you are wanting smart light switches installed, or you plan on installing a panelized system, Maya Electric has the expertise to elevate your home lighting experience.</span>
                        </p>
                        <Link to='/contact' className='services-contact__link'>
                            <button className='services-header__button'>
                                Get Started Today
                            </button>
                        </Link>
                    </div>
                </section>
                <section className='services1-section'>
                    <div className='services1-options__container'>
                        <div className='basic-package__section'>
                            <div className='basic-content'>
                                <h3 className='basic-package__header'>
                                    Basic Installations and Upgrades
                                </h3>
                                <p className='basic-typography'>
                                    We offer basic installation services for new and existing homes. For those who are wanting to take the first step by adding smart lighting capabilities, our experts have got you covered. This includes replacing your exisiting light switches with smart home capable ones, giving you the capabilities of controlling your lighting via smart phone, tablet, and even smart speaker devices. 
                                </p> 
                                <Link to='/contact' className='services-basic__link'>
                                    <button className='services-basic__button'>
                                        Schedule Now
                                    </button>
                                </Link>
                            </div>
                            
                                <div className='basic-reasons__container'>
                                    <Grid container 
                                        rowSpacing={1} 
                                        columnSpacing={{xs: 0, sm: 0, md: 3}}
                                        direction="column"
                                        justifyContent="space-evenly"
                                        alignItems="center"
                                        gap={1.5}
                                        >
                                        <Grid item xs={3.5} style={{border: "1px solid #FFFFFF", background: '#FFFFFF', borderRadius: "5px", padding: '.5em 0', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                                            <h4 className='basic-card__header'>
                                                Smart Switches
                                            </h4>
                                            <p className='basic-card__description'>
                                                Switching your light switches to smart light switches allows you to have customizablity and control over your lighting brightness and lighting schedule. We will replace all of your outdated switches with smart capable ones, which all can be controlled through a smart phone, tablet, smart speaker etc. Contact us to explore our switch options. 
                                            </p>
                                        </Grid>
                                        <Grid item xs={3.5} style={{border: "1px solid #FFFFFF", background: '#FFFFFF', borderRadius: "5px", padding: '.5em 0', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                                            <h4 className='basic-card__header'>
                                                Programming Lighting
                                            </h4>
                                            <p className='basic-card__description'>
                                                Program lighting to your personal liking. Create a schedule for when your lights turn on and off, explain how the controls work, and make sure you know how to operate every feature new to you. This includes what time your lights turn on/off, how bright the lighting is at certain times, and even what rooms are constantly lit. 
                                            </p>
                                        </Grid>
                                        <Grid item xs={3.5} style={{border: "1px solid #FFFFFF", background: '#FFFFFF', borderRadius: "5px", padding: '.5em 0', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                                            <h4 className='basic-card__header'>
                                                Add Devices
                                            </h4>
                                            <p className='basic-card__description'>
                                                Wanting to add more devices to your smart home? We offer services to current smart home owners as well. We can change older smart switches to new ones, add new switches to rooms that do not have them yet, reprogram them, and extras like motion sensors that turn on lights when passed by. 
                                            </p>
                                        </Grid>
                                    </Grid>
                                    <Link to='/contact' className='basic-sm__link'>
                                    <button className='basic-sm__button smaller'>
                                        Schedule Now
                                    </button>
                                </Link>
                                </div>
                        </div>
                        <div className='the-works__section'>
                            <div className='works-content'>
                                <h3 className='the-works__header'>
                                    Custom Panelized System
                                </h3>
                                <p className='works-typography'>
                                    Installing a panelized system will fully unlock your home's potential. We'll professionally install a control hub panel giving you control over all of your home's lighting at the touch of a finger tip. Installing a Panel in your home will replace your existing switches and dimmers from your wall, and replaces them with a customized keypad. Contact us to see if your home is eligible for a panelized system today. 
                                </p>
                                <Link to='/contact' className='services-works__link'>
                                    <button className='services-works__button'>
                                        Schedule Now
                                    </button>
                                </Link>
                            </div>
                            <div className='works-reasons__container'>
                                <Grid container
                                    rowSpacing={1} 
                                    columnSpacing={{xs: 0, sm: 0, md: 3}}
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    gap={1.5}
                                >
                                    <Grid item xs={3.5} style={{border: "1px solid #FFFFFF", background: '#FFFFFF', borderRadius: "5px", padding: '.5em 0', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                                        <h4 className='works-card__header'>
                                            Wiring
                                        </h4>
                                        <p className='works-card__description'>
                                            Wiring your home will give you power and control all to your smart panel. We professionally route and install quality wires in your new or existing home without missing any details to ensure that you don't run into future problems or issues. Contact us to see if your home qualifies for a panelized system.
                                        </p>
                                    </Grid>
                                    <Grid item xs={3.5} style={{border: "1px solid #FFFFFF", background: '#FFFFFF', borderRadius: "5px", padding: '.5em 0', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                                        <h4 className='works-card__header'>
                                            Panel System Install
                                        </h4>
                                        <p className='works-card__description'>
                                            We offer different panel systems that you can choose from to suit your homes look. When installing a panel system, we will practically remove all your old switches/dimmers, and install a customized keypad in replacement. This allows control over all the lighting, give your home a modernized look, and escalating your lighting capabilities. 
                                        </p>
                                    </Grid>
                                    <Grid item xs={3.5} style={{border: "1px solid #FFFFFF", background: '#FFFFFF', borderRadius: "5px", padding: '.5em 0', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                                        <h4 className='works-card__header'>
                                            Panel Programming
                                        </h4>
                                        <p className='works-card__description'>
                                            Programming your panelized system is key. We will customize your lighting schedule and make sure that the keypad does exactly what you want. This includes lighting brightness, customized lighting for each room, and even when the lights turn on/off, all at a centralized location to maximize efficiency and accessibility. 
                                        </p>
                                    </Grid>
                                </Grid>
                                <Link to='/contact' className='works-sm__link'>
                                    <button className='works-sm__button'>
                                        Schedule Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='services-end' style={{backgroundImage: `url(${mayaWhite})`}}>
                    <div className='services-end__tint'>

                    
                    <h3 className='services-end__header'>
                        Still Have Questions?
                    </h3>
                    <div className='services-end__container'>
                        <p className='services-end__body'>
                            Smart technology can be confusing at times. That's why we have a team with experience and knowledge here for you. Check out the FAQs page, or contact us and we'll answer any questions or concerns that you have regarding our services and how smart home installations can benefit you. Start today and experience the benefits of smart lighting the Maya Electric way.
                        </p>
                        <div className='services-end__buttons'>
                            <Link to='/faqs' className='service-button__link'>
                                <button className='service-button__wrapped'>
                                    FAQs
                                </button>
                            </Link>
                            <Link to='/contact' className='service-button__link'>
                                <button className='service-button__wrapped'>
                                    Send a Message
                                </button>
                            </Link>
                            <button className='service-button' href='tel:8583868083'> 
                                Call Us
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Services;