import React from 'react';
import FaqsComponent from '../../components/FaqsComponent/FaqsComponent';
import { Email, Phone, Question } from '../PageIndex';

import './faqs.css';

const Faqs = () => {
    return (
        <div className='faqs-page'>
            <div className="faqs-container">
                <div className="faqs-info__wrapper">
                    <div className="faqs-icons__wrapper">
                        <Question style={{fontSize: '100px', color: '#2153CC'}} />
                        <Question style={{fontSize: '100px'}} />
                        <Question style={{fontSize: '100px', color: '#414141'}} />
                    </div>
                    
                    <h3 className="faqs-header">
                        Frequently Asked Questions
                    </h3>
                    <p className="faqs-subheading">
                        If you are still unsure, or have any concerns/questions that you'd like to ask or get insight on, don't hesitate to contact us, or refer to the FAQs here.
                        <br/>
                        <br/>
                        Our goal is to make sure you are confident and fully aware of what transforming your home into a smart home can offer in return! We will try our best to answer each and every question you have, in an explanatory and informative way so you can understand to the fullest degree.    
                    </p>
                    <div className='faqs-contact__container'>
                        <button className='faqs-phone__button' href='tel:8583868083'> 
                            <Phone sx={{fontSize: '1.4em', marginLeft: '5px', color: '#FFFFFF'}} />
                            +1(858)386-8083
                        </button>
                        <button className='faqs-email__button' href='email:alberto@mayaelectrical.com'>
                            <Email sx={{fontSize: '1.4em', marginLeft: '5px', color: '#FFFFFF'}}/>
                            alberto@mayaelectrical.com
                        </button>
                    </div>
                </div>
                <FaqsComponent />
            </div>
        </div>
    )
}

export default Faqs;