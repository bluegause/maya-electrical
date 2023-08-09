import React, { useEffect } from "react";
import { aboutBg } from '../../assets/AssetsIndex';
import './about.css';

const About = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, []);

    return (
        <>
            <div className="about-page" style={{backgroundImage: `url(${aboutBg})`}}>
            <div className="tint">
                <section className="about-head__section" >
                    
                    <h1 className="about-header">
                        We are <br/>
                        Maya Electric.
                    </h1>
                    {/* <p className="about-typography">
                        With over a decade of experience in the residential electrical field, <br/>
                        we thrive to offer truly smart home lighting with no shortcuts taken, <br/>
                        all at an affordable and transparent cost.
                    </p> */}
                </section>
                <section className="about-body">
                    <div className="story-container">
                        <h3 className="story-header">
                            - Our Story -
                        </h3>
                        <h4 className="story-subheading">
                            How We Started
                        </h4>
                        <p className="story-typography">
                            With over a decade of experience within the electrical field, Maya Electric began when owner and founder Alberto, realized that the city of San Diego did not have a truly smart home lighting installation service. Along with being able to provide the expertise, Maya Electric began from the sheer thought of being able to provide home owners the capability of saving money and becoming more energy efficent, all while offering it at a transparent & affordable price. Smart home lighting will ultimately give you control over your home lighting, give you more customizability, and save you money. That is why Maya Electric has been born to offer all of San Diego smart home lighting, giving you the best experience possible with your property. 
                        </p>
                    </div>
                    <div className="statements-container">
                        <div className="mission-wrapper">
                            <h3 className="mission-header">
                                - Our Purpose -
                            </h3>
                            <h4 className="mission-subheading">
                                Mission
                            </h4>
                            <p className="mission-typography">
                                At Maya Electric, our mission is to revolutionize the electrical industry by providing truly intelligent and affordable smart home lighting solutions. Drawing upon years of experience in fully automated multi-million dollar homes, we are committed to crafting systems that genuinely understand and enhance our customers' lives. We pride ourselves on offering transparent pricing, user-friendly simplicity, and comprehensive bundles that eliminate hidden fees. Our goal is to create non-complicated, astronomical lighting experiences with affordability in mind, that illuminate homes across San Diego and beyond.
                            </p>
                        </div>
                        <div className="vision-wrapper">
                            <h3 className="vision-header">
                                - Our Goal - 
                            </h3>
                            <h4 className="vision-subheading">
                                Vision 
                            </h4>
                            <p className="vision-typography">
                                Our vision at Maya Electric is to make Smart Lighting accessible to all, transforming homes into havens of convenience and comfort. Through our innovative approach of offering single-cost bundles tailored to individual needs, we aim to erase complexity and hidden costs, simplifying the journey to a truly Smart Lighting system. Picture a world where lights respond effortlessly, turning on as you enter, guided by the rhythm of Sunset/Sunrise. Our commitment to affordability, simplicity, and smart solutions will ensure that darkness never greets you again, while also contributing to energy savings for a sustainable future.
                            </p>
                        </div>
                    </div>
                </section>
                </div>

            </div>
        </>
    )
}

export default About;