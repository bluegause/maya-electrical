import React from 'react';
import { Link } from 'react-router-dom';
import { Transparentlogo } from '../../assets/AssetsIndex';
import './footer.css';
import { Facebook, Google, Instagram } from '@mui/icons-material';

const Footer = () => {
    return (
        <div className='footer'>
            <footer>
                <div className='footer-left'>
                    <div className='footer-left__header'>
                        <img src={Transparentlogo} alt='logo' />
                        <h2 className='footer-company'>
                            Maya Electric
                        </h2>
                    </div>
                    <p className='footer-description'>
                        Specializing in smart home installations that elevate your home experience, all at an affordable and time efficent manner. <br/>
                        Elevate your home<br/>  - The Maya Electric way.
                    </p>
                </div>
                <div className='footer-mid__left'>
                    <h2 className='mid-left__header'>
                        Services
                    </h2>
                    <p className='services-list'>
                        Smart Lighting <br/>
                        Panelized Systems <br/>
                        Wireless Systems <br/>
                        New Construction <br/>
                        System Upgrades <br/>
                        Remodels
                    </p>
                </div>
                <div className='mid-right'>
                    <h2 className='mid-right__header'>
                        General
                    </h2>
                    <div className='general-list'>
                        <Link to='/about' className='general-link'>About Us</Link>
                        <Link to='/services' className='general-link'>What we Offer</Link>
                        <Link to='/faqs' className='general-link'>FAQS</Link>
                        <Link to='/contact' className='general-link'>Contact Us</Link>
                    </div>
                </div>
                <div className='footer-right'>
                    <h2 className='footer-right__header'>
                        Socials
                    </h2>
                    <div className='footer-icons__wrapper'>
                        <div className='footer-icon'>
                            <Instagram />
                        </div>
                        <div className='footer-icon'>
                            <Facebook />
                        </div>
                        <div className='footer-icon'>
                            <Google />
                        </div>
                    </div>
                    <p className='footer-right__description'>
                        Give us a follow on the following social media platforms<br/>
                        @MayaElectric
                    </p>
                    <p className='footer-right__username'>
                        @MayaElectric
                    </p>
                </div>
                <div className='footer-mobile'>
                    <div className='footer-left__header'>
                        <img src={Transparentlogo} alt='logo' />
                        <h2 className='footer-company'>
                            MAYA ELECTRIC
                        </h2>
                    </div>
                    <div className='footer-icons__wrapper2'>
                        <div className='footer-icon'>
                            <Instagram style={{fontSize: '35px'}}/>
                        </div>
                        <div className='footer-icon'>
                            <Facebook style={{fontSize: '35px'}}/>
                        </div>
                        <div className='footer-icon'>
                            <Google style={{fontSize: '35px'}}/>
                        </div>
                    </div>
                    <address className='mobile-subheading'>
                        Alberto Maya | Founder, Owner <br/>
                        San Diego, CA <br/>
                        Est. 2023
                    </address>
                </div>

                
            </footer>
            <p className='copy-right'>
                ©Maya Electric 2023
            </p>
        </div>
    )
}

export default Footer;