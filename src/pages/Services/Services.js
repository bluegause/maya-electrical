import React from 'react';
import { Link } from 'react-router-dom';
import { Servicesbg } from '../../assets/AssetsIndex';
import './services.css';

const Services = () => {
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
                            At Maya Electric, we transform your average home into a smart home. Specializing in smart home lighting installations, we fully embrace the benefits of smart home technology and offer them to you. Whether you are wanting smart light switches installed, or you plan on installing a panelized system, Maya Electric has the expertise to turn your home smart. 
                        </p>
                        <Link to='/contact' className='services-contact__link'>
                            <button className='services-contact__button'>
                                Get Started Today
                            </button>
                        </Link>
                    </div>
                </section>
                <section className='services1-section'>
                    <h3 className='services1-header'>
                        What We Offer
                    </h3>
                    <p className='services1-typography'>
                        We offer two smart home lighting installation types. If you are looking for a more simple installation, then check out our basic installations and upgrades section. If you are looking for a panelized lighting system with more customizablity features, we also offer another installation service that includes everything you need to get started. If you have a special request or installation type, contact us to explore options and possibilities. 
                    </p>
                    <div className='services1-options__container'>
                        <div className='basic-package__section'>
                            <h3 className='basic-package__header'>
                                Basic Installations and Upgrades
                            </h3>
                            <div className='basic-body'>
                                <p className='basic-typography'>
                                    We offer basic installation services for new and existing homes. For those who are wanting to take the first step by adding smart lighting capabilities, our experts have got you covered. This includes replacing your exisiting light switches with smart home capable ones, giving you the capabilities of controlling your lighting via smart phone, tablet, and even smart speaker devices. 
                                </p>
                                <div className='basic-reasons__container'>
                                    <section>

                                    
                                    <div className='basic-card1'>
                                        <h4 className='basic-card__header'>
                                            Smart Lighting Switches
                                        </h4>
                                        <p className='basic-card__description'>
                                            Switching your light switches to smart light switches allows you to have customizablity and control over your lighting brightness, as well as control over your lighting through your mobile & tablet devices. 
                                        </p>
                                    </div>
                                    <div className='basic-card2'>
                                        <h4 className='basic-card__header'>
                                            System Programming
                                        </h4>
                                        <p className='basic-card__description'>
                                            Switching your light switches to smart light switches allows you to have customizablity and control over your lighting brightness, as well as control over your lighting through your mobile & tablet devices. 
                                        </p>
                                    </div>
                                    </section>
                                    <section>
                                    <div className='basic-card3'>
                                        <h4 className='basic-card__header'>
                                            Add Devices
                                        </h4>
                                        <p className='basic-card__description'>
                                            Switching your light switches to smart light switches allows you to have customizablity and control over your lighting brightness, as well as control over your lighting through your mobile & tablet devices. 
                                        </p>
                                    </div>
                                    <div className='basic-card4'>
                                        <h4 className='basic-card__header'>
                                            Programming Changes
                                        </h4>
                                        <p className='basic-card__description'>
                                            Switching your light switches to smart light switches allows you to have customizablity and control over your lighting brightness, as well as control over your lighting through your mobile & tablet devices. 
                                        </p>
                                    </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className='the-works__section'>
                            <h3 className='the-works__header'>
                                Custom Panelized System
                            </h3>
                            <div className='works-body'>
                                <p className='works-typography'>
                                    Installing a panelized system will fully unlock your home's potential. We'll professionally install a control hub panel giving you control over all of your home's lighting at the touch of a finger tip. Installing a Panel in your home will replace your existing switches and dimmers from your wall, and replaces them with a customized keypad. Contact us to see if your home is eligible for a panelized system today. 
                                </p>
                                <div className='works-reasons__wrapper'>
                                    <div className='works-reason1-wrapper'>
                                        <h4 className='works-card__header'>

                                        </h4>
                                    </div>
                                    <div className='works-reason2__wrapper'>
                                        <h4 className='works-card__header'>
                                            
                                        </h4>
                                    </div>
                                    <div className='works-reason3__wrapper'>
                                        <h4 className='works-card__header'>
                                            
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>  
        </>
    )
}

export default Services;