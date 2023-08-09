import React, { useEffect } from 'react';
import FaqsComponent from '../../components/FaqsComponent/FaqsComponent';
import { Link } from 'react-router-dom';
import { Question } from '../PageIndex';

import './faqs.css';
import { faqsBg } from '../../assets/AssetsIndex';

const Faqs = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, []);

    return (
        <div className='faqs-page'>
            <section className='faqs-head' style={{backgroundImage: `url(${faqsBg})`}}>
                <div className='head-tint'>
                    <h1 className='faqs-main__header'>
                        Got Questions? <br/>
                        We Got Answers.

                    </h1>
                    <p className='faqs-main__subheading'>
                        When it comes to smart home lighting installations, there can be many unanswered questions that you may have from the start. Feel free to check out the following below, and if you still have other questions, don't hesistate to give us a call or send a message and our experts will answer every question to the best of our abilities to give you the confidence you need. 
                    </p>
                </div>
            </section>
            <div className="faqs-container">
                <div className="faqs-info__wrapper">
                    <div className="faqs-icons__wrapper">
                        <Question style={{fontSize: '100px'}} />
                        <Question style={{fontSize: '100px', color: '#2153CC'}} />
                        <Question style={{fontSize: '100px'}} />
                    </div>
                    
                    <h3 className="faqs-header">
                        Frequently Asked Questions
                    </h3>
                    <p className="faqs-subheading">
                        If you are still unsure, or have any concerns/questions that you'd like to ask or get insight on, don't hesitate to contact us, or refer to the FAQs here.
                        <br/>
                        Our goal is to make sure you are confident and fully aware of what transforming your home into a smart home can offer in return! We will try our best to answer each and every question you have, in an explanatory and informative way so you can understand to the fullest degree.    
                    </p>
                    
                    <Link to='/contact' className='faqs-contact__link'>
                        <button className='faqs-contact__button'>
                            Contact Us Today
                        </button>
                    </Link>
                </div>
                <FaqsComponent />
            </div>
        </div>
    )
}

export default Faqs;