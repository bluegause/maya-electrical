import React, { useEffect, useRef } from "react";
import { Card, CardContent, Grid, TextField, Button } from '@mui/material';
import { exteriorBackground, logoFullTransparent } from "../../assets/AssetsIndex";
import Aos from "aos";
import './contact.css';

const Contact = () => {

    useEffect(() => {
        Aos.init(1500)
    }, []);

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="contact-page" data-aos="fade-in" data-aos-duration="10000">
                <section className="contact-header__container" style={{backgroundImage: `url(${exteriorBackground})`}}>
                    <div className="contact-header__tint">
                        <h2 className="contact-header">
                            Contact Us
                        </h2>
                        {/* <p className="contact-header__typography">
                            Whether if it's finding an answer, or scheduling an appointment, give us a call or send a message. Take the next step in the smart direction today. From new to exisiting homes, personal to rental properties, Maya Electric is commited to turning your home smarter, safer and more efficient. 
                        </p> */}
                    </div>
                </section>
                <div className="contact-container">
                    <section className="contact-info__section">
                        <img src={logoFullTransparent}  alt="maya electric logo" className="header-logo"/>  
                        <div className="contact-lower__wrapper">
                            <p className="contact-subheading">
                                Take the next step in the smart direction today. From new to exisiting homes, personal to rental properties, Maya Electric is commited to turning your home smarter, safer and more efficient. 

                                Send us a message including the address, type of installation that is wanted, as well as your contact information that will be best to reach you at.
                            </p>
                            {/* <div className="contact-icons__container">
                                <div className="contact-icon__wrapper">                           
                                    <Phone style={{fontSize: '30px', background: '#FFFFFF', color: '#2153CC', padding: '5px', borderRadius: '5px'}} />
                                    <a href="tel:8583868083" className="contact-phone">
                                        +1(858)386-8083
                                    </a>
                                </div>
                                <div className="contact-icon__wrapper2">
                                    <Email style={{fontSize: '30px', background: '#FFFFFF', color: '#2153CC', padding: '5px', borderRadius: '5px'}} />
                                    <a href="email:alberto@mayaelectrical.com" className="contact-email">
                                        Alberto@mayaelectrical.com
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </section>
                    <section className="form-container">
                        <Card style={{background: "#2153CC", padding: "1em 0", borderRadius: '5px', border: 'none'}}>
                            <CardContent>
                                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                                    <Grid container spacing={1}>
                                        <h4 className="form-header">
                                            Send Us a Message
                                        </h4>
                                        <p className="form-subheading">
                                            Please fill out all text fields below, including the type of installation youre interested in, or any special requests, and we'll get back to you as soon as possible!
                                        </p>
                                        <Grid item xs={12}>
                                            <TextField style={{backgroundColor: "#FFFFFF", borderRadius: "5px"}} label="Name" placeholder='Enter first and last name' name='name' variant='outlined' fullWidth required/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField style={{backgroundColor: "#FFFFFF", borderRadius: "5px"}} label="Address" placeholder='Enter your address' name='address' variant='outlined' fullWidth required/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField style={{backgroundColor: "#FFFFFF", borderRadius: "5px"}} label="Service" placeholder='Enter which service' name='service' variant='outlined' fullWidth required/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField style={{backgroundColor: "#FFFFFF", borderRadius: "5px"}} type="email" label="Email" placeholder='Enter email' name='email' variant='outlined' fullWidth required/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField style={{backgroundColor: "#FFFFFF", borderRadius: "5px"}} type="number" label="Phone" placeholder='Enter phone number' name='phone' variant='outlined' fullWidth required/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField style={{backgroundColor: "#FFFFFF", borderRadius: "5px"}} label="Message" multiline rows={4} placeholder='Type message here' name='message' variant='outlined' fullWidth required/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button className='submit__button' type='submit' variant='contained' fullWidth style={{backgroundColor: "#414141"}}>Submit</Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Contact;