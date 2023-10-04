import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, Grid, TextField, Button } from '@mui/material';
import { inputLabelClasses } from "@mui/material/InputLabel";
import { exteriorBackground, logoFullTransparent } from "../../assets/AssetsIndex";
import Aos from "aos";
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {

    const [formValues, setFormValues] = useState({
        name: '',
        service: '',
        address: '',
        email: '',
        number: '',
        message: ''
    });

    const isFormValid = () => {
        return Object.values(formValues).every(value => value.trim() !== '') && formValues.number.length === 10
    };

    const handleInputChange =(fieldName) => (event) => {
        setFormValues({
            ...formValues,
            [fieldName]: event.target.value,
        });
    };

    useEffect(() => {
        Aos.init(1500)
    }, []);

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8p3w1w8', 'template_imeg0ea', form.current, '0OsDk-emO3rSQOFI4')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }

    return (
        <>
            <div className="contact-page" data-aos="fade-in" data-aos-duration="10000">
                <section className="contact-header__container" style={{backgroundImage: `url(${exteriorBackground})`}}>
                    <div className="contact-header__tint">
                        <h2 className="contact-header">
                            Contact Us
                        </h2>
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
                                            <TextField 
                                            style={{backgroundColor: "#FFFFFF", borderRadius: "5px"}} 
                                            value={formValues.name} 
                                            onChange={handleInputChange('name')} 
                                            label="Name" 
                                            placeholder='Enter first and last name' 
                                            name='name' 
                                            variant='outlined' 
                                            InputLabelProps={{sx: {
                                                color: "primary",
                                                [`&.${inputLabelClasses.shrink}`]: {
                                                    color: "#414141",
                                                    backgroundColor: "transparent"
                                                }
                                            }}}  
                                            fullWidth 
                                            required/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField 
                                            style={{backgroundColor: "#FFFFFF", borderRadius: "5px"}} 
                                            value={formValues.service} 
                                            onChange={handleInputChange('service')} 
                                            label="Type of Service" 
                                            placeholder='Enter which service interested in' 
                                            name='service' 
                                            variant='outlined'
                                            InputLabelProps={{sx: {
                                                color: "primary",
                                                [`&.${inputLabelClasses.shrink}`]: {
                                                    color: "#414141",
                                                    backgroundColor: "transparent"
                                                }
                                            }}}  
                                            fullWidth 
                                            required/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField 
                                            style={{backgroundColor: "#FFFFFF", borderRadius: "5px"}} 
                                            value={formValues.address} 
                                            onChange={handleInputChange('address')} 
                                            label="Address" 
                                            placeholder='Enter your address' 
                                            name='address' 
                                            variant='outlined'
                                            InputLabelProps={{sx: {
                                                color: "primary",
                                                [`&.${inputLabelClasses.shrink}`]: {
                                                    color: "#414141",
                                                    backgroundColor: "transparent"
                                                }
                                            }}}   
                                            fullWidth 
                                            required/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField 
                                            style={{backgroundColor: "#FFFFFF", borderRadius: "5px"}} 
                                            value={formValues.email} 
                                            onChange={handleInputChange('email')} 
                                            type="email" 
                                            label="Email" 
                                            placeholder='Enter email' 
                                            name='email' 
                                            variant='outlined'
                                            InputLabelProps={{sx: {
                                                color: "primary",
                                                [`&.${inputLabelClasses.shrink}`]: {
                                                    color: "#414141",
                                                    backgroundColor: "transparent"
                                                }
                                            }}}   
                                            fullWidth 
                                            required/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField 
                                            style={{backgroundColor: "#FFFFFF", borderRadius: "5px"}} 
                                            onChange={handleInputChange('number')} 
                                            type="tel" 
                                            value={formValues.number}
                                            label="Phone" 
                                            placeholder='Enter phone number' 
                                            name='phone' 
                                            variant='outlined' 
                                            inputProps={{minLength: 10, maxLength: 10, pattern: '[0-9]'}}
                                            InputLabelProps={{sx: {
                                                color: "primary",
                                                [`&.${inputLabelClasses.shrink}`]: {
                                                    color: "#414141",
                                                    backgroundColor: "transparent"
                                                }
                                            }}}  
                                            fullWidth 
                                            required/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField 
                                            style={{backgroundColor: "#FFFFFF", borderRadius: "5px"}} 
                                            value={formValues.message} onChange={handleInputChange('message')} 
                                            label="Message" 
                                            multiline rows={4} 
                                            placeholder='Type message here' 
                                            name='message' 
                                            variant='outlined'
                                            InputLabelProps={{sx: {
                                                color: "primary",
                                                [`&.${inputLabelClasses.shrink}`]: {
                                                    color: "#414141",
                                                    backgroundColor: "transparent"
                                                }
                                            }}}   
                                            fullWidth 
                                            required/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button 
                                                className='submit__button' 
                                                type='submit' variant='contained' 
                                                fullWidth 
                                                disabled={!isFormValid()}
                                                sx={{
                                                    backgroundColor: '#7997E0'
                                                }}
                                                >
                                                Submit
                                            </Button>
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