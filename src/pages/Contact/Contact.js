import React, { useEffect, useRef } from "react";
import { Card, CardContent, Grid, TextField, Button, Icon, Typography } from '@mui/material';
import { logoCity } from "../../assets/AssetsIndex";
import './contact.css';
import { Email, Phone } from "../PageIndex";

const Contact = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="contact-page">
                <div className="contact-container">
                    <section className="contact-header__section">
                        <div className="logo-container">
                            <img src={logoCity} alt="logo with city background" className="header-logo"/>
                        </div>
                        <h2 className="contact-header">
                            Contact Us Today
                        </h2>
                        <div className="contact-lower__wrapper">
                            <p className="contact-subheading">
                                Send us a message including the address, type of installation that is wanted, as well as your contact information that will be best to reach you at. Or give us a call and let's get your home started. 
                            </p>
                            <div className="contact-icons__container">
                                <div className="contact-icon__wrapper">                           
                                    <Phone style={{fontSize: '30px', background: 'rgba(33, 83, 204, 1)', color: '#FFFFFF', padding: '5px', borderRadius: '5px'}} />
                                    <a href="tel:8583868083" className="contact-phone">
                                        +1(858)386-8083
                                    </a>
                                </div>
                                <div className="contact-icon__wrapper">
                                    <Email style={{fontSize: '30px', background: 'rgba(33, 83, 204, 1)', color: '#FFFFFF', padding: '5px', borderRadius: '5px'}} />
                                    <a href="email:alberto@mayaelectrical.com" className="contact-email">
                                        Alberto@mayaelectrical.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="form-container">
                        <Card style={{background: "rgba(33, 83, 204, .7)", padding: "1em 0"}}>
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
                                            <TextField style={{backgroundColor: "rgba(255, 255, 255, .8)", borderRadius: "5px"}} label="Name" placeholder='Enter first and last name' name='name' variant='outlined' fullWidth required/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField style={{backgroundColor: "rgba(255, 255, 255, .8)", borderRadius: "5px"}} label="Address" placeholder='Enter your address' name='address' variant='outlined' fullWidth required/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField style={{backgroundColor: "rgba(255, 255, 255, .8)", borderRadius: "5px"}} label="Service" placeholder='Enter which service' name='service' variant='outlined' fullWidth required/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField style={{backgroundColor: "rgba(255, 255, 255, .8)", borderRadius: "5px"}} type="email" label="Email" placeholder='Enter email' name='email' variant='outlined' fullWidth required/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField style={{backgroundColor: "rgba(255, 255, 255, .8)", borderRadius: "5px"}} type="number" label="Phone" placeholder='Enter phone number' name='phone' variant='outlined' fullWidth required/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField style={{backgroundColor: "rgba(255, 255, 255, .8)", borderRadius: "5px"}} label="Message" multiline rows={4} placeholder='Type message here' name='message' variant='outlined' fullWidth required/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button className='submit__button' type='submit' variant='contained' fullWidth style={{backgroundColor: "navy"}}>Submit</Button>
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