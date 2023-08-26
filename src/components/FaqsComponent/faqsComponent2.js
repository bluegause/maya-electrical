import React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import ExpandMore from '@mui/icons-material/ExpandMore';

import './faqscomponent.css';

// Accordion Styling
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
    }));

// Accordion Question Styling
const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ExpandMore sx={{ fontSize: '2em' }} />}
        {...props}
    />
    ))(({ theme }) => ({
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
            fontFamily: 'Poppins, sans-serif'
        },
    }));

// Accordion Answer Styling
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2)
    }));

const FaqsComponent2 = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return(
        <div className='accordion-container'>
            {/* Sixth Question */}
            <Accordion className='accordion' expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style={{background: '#414141', borderRadius: '10px 10px 0 0', border: 'solid white', marginBottom: '5px'}}>
                <AccordionSummary
                    expandIcon={<ExpandMore style={{color: '#2153CC'}} />}
                    aria-controls="panel6-content"
                    id="panel6-header"
                    style={{backgroundColor: '#DEDEDE', color: '#414141'}}
                >
                    <h4 className='accordion-question'>
                        What are some smart home security features?
                    </h4>
                </AccordionSummary>
                <AccordionDetails sx={{color: '#FFFFFF', borderRadius: '0 0 10px 10px'}}>
                    <p className='accordion-answer'>
                        Smart home security features provide enhanced protection and peace of mind for homeowners. There are smart devices like security cameras and video door bells that allow monitoring remotely. There is geofencing, which is a feature that uses your smartphone's location to trigger actions based on your proximity to your home. There is even smart locks that provide keyless entry, allowing you to lock your doors from anywhere remotely.
                    </p>
                </AccordionDetails>
            </Accordion>

            {/* Seventh Question */}
            <Accordion className='accordion' expanded={expanded === 'panel7'} onChange={handleChange('panel7')} style={{background: '#414141', borderRadius: '10px 10px 0 0', border: 'solid white', marginBottom: '5px'}}>
                <AccordionSummary
                    expandIcon={<ExpandMore style={{color: '#2153CC'}} />}
                    aria-controls="panel7-content"
                    id="panel7-header"
                    style={{backgroundColor: '#DEDEDE', color: '#414141'}}
                >
                    <h4 className='accordion-question'>
                        If my internet stops working, can I still control my lights?
                    </h4>
                </AccordionSummary>
                <AccordionDetails sx={{color: '#FFFFFF', borderRadius: '0 0 10px 10px'}}>
                    <p className='accordion-answer'>
                        Though you will not be able to control the lighting with your mobile phone or tablet, you can still turn them on and off using the switches and keypads mounted on the wall. This will still allow you to have control over your lighting regardless of any issues with internet. 
                    </p>
                </AccordionDetails>
            </Accordion>

            {/* Eighth Question */}
            <Accordion className='accordion' expanded={expanded === 'panel8'} onChange={handleChange('panel8')} style={{background: '#414141', borderRadius: '10px 10px 0 0', border: 'solid white', marginBottom: '5px'}}>
                <AccordionSummary
                    expandIcon={<ExpandMore style={{color: '#2153CC'}} />}
                    aria-controls="panel8-content"
                    id="panel8-header"
                    style={{backgroundColor: '#DEDEDE', color: '#414141'}}
                >
                    <h4 className='accordion-question'>
                        Do I need faster internet speeds for my smart lighting to work correctly?
                    </h4>
                </AccordionSummary>
                <AccordionDetails sx={{color: '#FFFFFF', borderRadius: '0 0 10px 10px'}}>
                    <p className='accordion-answer'>
                        With commands being the only thing your smart lighting will require a internet connection for, it does not necessarily need faster interenet speeds to work efficiently. So, regardless of having every room with smart lighting, it will not consume so much bandwidth and slow down your internet speeds.
                    </p>
                </AccordionDetails>
            </Accordion>

            {/*  Nineth Question */}
            <Accordion className='accordion' expanded={expanded === 'panel9'} onChange={handleChange('panel9')} style={{background: '#414141', borderRadius: '10px 10px 0 0', border: 'solid white', marginBottom: '5px'}}>
                <AccordionSummary
                    expandIcon={<ExpandMore style={{color: '#2153CC'}} />}
                    aria-controls="panel9-content"
                    id="panel9-header"
                    style={{backgroundColor: '#DEDEDE', color: '#414141'}}
                >
                    <h4 className='accordion-question'>
                        Do I need an overall stronger Wi-Fi connection for smart switches?
                    </h4>
                </AccordionSummary>
                <AccordionDetails sx={{color: '#FFFFFF', borderRadius: '0 0 10px 10px'}}>
                    <p className='accordion-answer'>
                        No you do not. Smart switches have their own communcation systems and do not interfere with your Wi-Fi. 
                    </p>
                </AccordionDetails>
            </Accordion>

            {/* Tenth Question */}
            <Accordion className='accordion' expanded={expanded === 'panel10'} onChange={handleChange('panel10')} style={{background: '#414141', borderRadius: '10px 10px 0 0', border: 'solid white', marginBottom: '5px'}}>
                <AccordionSummary 
                    expandIcon={<ExpandMore style={{color: "#2153CC"}} />}
                    aria-controls="panel10-content"
                    id="panel10-header"
                    style={{backgroundColor: '#DEDEDE', color: '#414141'}}
                >
                    <h4 className='accordion-question'>
                        Can I choose different lighting switch styles?
                    </h4>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{ color: '#FFFFFF', borderRadius: '0 0 10px 10px'}}>
                        <p className='accordion-answer'>
                            We offer many different types of switches, including different looks and functionalities. We can do traditional switches, decor switches, dimmers, and much more! Contact us for more indepth detail of product offerings.
                        </p>

                    </AccordionDetails>
            </Accordion>

        </div>
    )
};

export default FaqsComponent2;