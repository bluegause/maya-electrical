import React from "react";
import interior from "../../assets/homeInterior.jpg"
import { Link, NavLink } from "react-router-dom";
import MoneyIcon from '@mui/icons-material/AttachMoney';
import LoginIcon from '@mui/icons-material/Login';
import TuneIcon from '@mui/icons-material/Tune';
import home from '../../assets/home.jpg';
import logo from '../../assets/mayalogo-trnsprnt.png';
import { Icon } from "@mui/material";
import LightIcon from '@mui/icons-material/LightOutlined';
import PanelIcon from '@mui/icons-material/DynamicFormOutlined';
import WirelessIcon from '@mui/icons-material/BroadcastOnHomeOutlined';
import ToolsIcon from '@mui/icons-material/HandymanOutlined';
import UpgradeIcon from '@mui/icons-material/UpgradeOutlined';
import HouseIcon from '@mui/icons-material/CottageOutlined';

import "./home.css";

const Home = () => {
    return (
        <>
            <div className="home-hero" style={{backgroundImage: `url(${interior})`}}>
                <div className="home-header">
                    <h1>
                        Elevate <br/>
                        Your <br/>
                        Lifestyle.
                    </h1>
                    <p>
                        With Maya Electric's Smart Home Installations, <br/>
                        You can Unlock the Full Potential of Your Home.
                    </p>
                    <div className="button-container">
                        <NavLink to="/contact" className="contact-link"><button className="contact-btn color">Schedule Today</button></NavLink>
                        <NavLink to="/services" className="contact-link"><button className="contact-btn">What We Offer</button></NavLink>
                    </div>
                </div>
            </div>
            <section className="home-one__container">
                <h3>Technology Meets <br/>
                    Efficiency.
                </h3>
                <hr/>
                <div className="home-one__content">
                    <div className="icon-container">
                        <div className="icon">
                            <Icon component={MoneyIcon} />
                            <p>Save Money</p>
                        </div>
                        <div className="icon">
                            <Icon component={LoginIcon} />
                            <p>Remote Accessibility</p>
                        </div>
                        <div className="icon last">
                            <Icon component={TuneIcon} />
                            <p>Control & Customizablity</p>
                        </div>
                    </div>

                    <p>
                        With the advancement of technology and hardware, you've never felt more in control.
                        Smart home technology allows you to automate, control and monitor various aspects of your home,
                        such as lighting, temperature, window shades and electricity consumption, all from a centralized system or remotely through your smartphone.
                        Allowing you to manage your property in a more convenient and energy efficient way. 
                        
                    </p>
                    
                </div>
                <Link to="/services" style={{textDecoration: "none"}}>
                    <p className="home-one-button">Explore Options > </p>
                </Link>
            </section>
            <section className="home-two">
                <div className="home2-background" style={{backgroundImage: `url(${home})`}}>
                    <div className="home2-container">

                        <h4 className="home2-header">
                            Upgrade Today with <br/>
                            Maya Electric
                        </h4>

                        <div className="body-icons-container">
                            <section className="icons-section">
                                <div className="body-icon">
                                    <LightIcon className="body-item" sx={{fontSize: "35px"}} />
                                    <p className="icon-text">Smart Lighting</p>
                                </div>
                                <div className="body-icon">
                                    <PanelIcon className="body-item"  sx={{fontSize: "35px"}} />
                                    <p className="icon-text">Panelized Systems</p>
                                    
                                </div>
                                <div className="body-icon">
                                    <WirelessIcon className="body-item"  sx={{fontSize: "35px"}} />
                                    <p className="icon-text">Wireless Systems</p>
                                    
                                </div>
                            </section>
                            <section className="icons-section">
                                <div className="body-icon">
                                    <ToolsIcon className="body-item"  sx={{fontSize: "35px"}} />
                                    <p className="icon-text">New Construction</p>
                                    
                                </div>
                                <div className="body-icon">
                                    <UpgradeIcon className="body-item"  sx={{fontSize: "35px"}} />
                                    <p className="icon-text">System Upgrades</p>
                                    
                                </div>
                                <div className="body-icon">
                                    <HouseIcon className="body-item"  sx={{fontSize: "35px"}} />
                                    <p className="icon-text">Remodels</p>
                                    
                                </div>    
                            </section>                      
                        </div>
                        <div className="home2-bottom">
                            <p className="icons-p">
                                We provide smart home installations for exisiting and new residences throughout San Diego, California.
                                From smart lighting and system upgrades, to new home construction plans, Maya Electric is here to light the way.
                            </p>
                            <Link to="/contact">
                                <button className="contact-us">
                                    Contact Us Today
                                </button>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;