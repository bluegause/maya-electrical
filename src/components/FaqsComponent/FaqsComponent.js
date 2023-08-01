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
        expandIcon={<ExpandMore sx={{ fontSize: '1em' }} />}
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

const FaqsComponent = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='accordion-container'>
            {/* First Question */}
            <Accordion className='accordion' expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{borderRadius: '10px 10px 0 0'}}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{backgroundColor: '#414141', color: '#FFFFFF', borderRadius: '10px 10px 0 0'}}
                >
                    <h4 className='accordion-question'>
                        What is a smart home?
                    </h4>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: 'rgba(33, 83, 204, 1)', color: '#FFFFFF'}}>
                    <p className='accordion-answer'>
                        To simply put it, a smart home is a residence equipped with various devices and appliances that can be controlled and automated through a mobile/tablet app or wallmounted control panel. The devices in your home are interconnected on a internet network, allowing you to control functions such as security, temperature, lighting, entertainment devices etc.
                    </p>
                </AccordionDetails>
            </Accordion>

            {/* Second Question */}
            <Accordion className='accordion' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    style={{backgroundColor: '#414141', color: '#FFFFFF'}}
                >
                    <h4 className='accordion-question'>
                        What are the benefits of having a smart home ?
                    </h4>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: 'rgba(33, 83, 204, 1)', color: '#FFFFFF'}}>
                    <p className='accordion-answer'>
                        Smart homes offer a ton of benefits for your everyday use.
                    </p>
                    <ul className='benefits-list'>
                        <li className='benefits-item'>
                            Allows you to control devices and appliances all on one phone/tablet.
                        </li>
                        <li className='benefits-item'>
                            Allows monitoring of energy consumption and gives you the ability to know whether a device/appliance is on or not.
                        </li>
                        <li className='benefits-item'>
                            Unlocks more capabilities and control over your devices and appliances. Dimming lights, adjusting window blinds, to even turning on your air conditioner.
                        </li>
                        <li className='benefits-item'>
                            Offers automation of certain things like a schedule for when your window blinds open or close, what time certain lights turn on or off, to even a notification being sent to your phone when a motion sensor is triggered, and begins recording.
                        </li>
                        <li className='benefits-item'>
                            Voice control and remote access allows more capability for elderly and physically disabled people and increases independence & convenience.
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>

            {/* Third Question */}
            <Accordion className='accordion' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    style={{backgroundColor: '#414141', color: '#FFFFFF'}}
                >
                    <h4 className='accordion-question'>
                        How can turning my Airbnb or rental property into a smart home benefit me?
                    </h4>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: 'rgba(33, 83, 204, 1)', color: '#FFFFFF'}}>
                    <p className='accordion-answer'>
                        Turning your rental properties into smart homes can ultimately give you piece of mind when you're not there. From remote controlled locks, to camera monitoring, you'll always feel like your property has a second pair of eyes always looking over your investments.
                    </p>
                </AccordionDetails>
            </Accordion>

            {/* Fourth Question */}
            <Accordion className='accordion' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                    style={{backgroundColor: '#414141', color: '#FFFFFF'}}
                >
                    <h4 className='accordion-question'>
                        Can I control my smart home devices when I'm not home?
                    </h4>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: 'rgba(33, 83, 204, 1)', color: '#FFFFFF'}}>
                    <p className='accordion-answer'>
                        Yes! Smart homes can be controlled through remote access. By connecting your devices to the internet, you can use various methods to control them from anywhere including smartphone applications, voice assistant apps, web interfaces, remote control hubs, etc.
                    </p>
                </AccordionDetails>
            </Accordion>

            {/* Fifth Question */}
            <Accordion className='accordion' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel5-content"
                    id="panel5-header"
                    style={{backgroundColor: '#414141', color: '#FFFFFF'}}
                >
                    <h4 className='accordion-question'>
                        Can I save more energy and money with a smart home?
                    </h4>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: 'rgba(33, 83, 204, 1)', color: '#FFFFFF'}}>
                    <p className='accordion-answer'>
                        Smart homes are designed to be more energy efficient in many ways. There is energy monitoring, which allows you to identify the devices that are more energy-hungry allowing you reduce usage. There is also options like smart thermostats that enable you to control temperature more efficiently. There is even light automation that allows you to schedule when your lights turn on and off, avoiding unnecessary lighting and ultimately saving you money on your electric bill in the end. 
                    </p>
                </AccordionDetails>
            </Accordion>

            {/* Sixth Question */}
            <Accordion className='accordion' expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel6-content"
                    id="panel6-header"
                    style={{backgroundColor: '#414141', color: '#FFFFFF'}}
                >
                    <h4 className='accordion-question'>
                        What are some smart home security features?
                    </h4>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: 'rgba(33, 83, 204, 1)', color: '#FFFFFF'}}>
                    <p className='accordion-answer'>
                        Smart home security features provide enhanced protection and peace of mind for homeowners. There are smart devices like security cameras and video door bells that allow monitoring remotely. There is geofencing, which is a feature that uses your smartphone's location to trigger actions based on your proximity to your home. There is even smart locks that provide keyless entry, allowing you to lock your doors from anywhere remotely.
                    </p>
                </AccordionDetails>
            </Accordion>

            {/* Seventh Question */}
            <Accordion className='accordion' expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel7-content"
                    id="panel7-header"
                    style={{backgroundColor: '#414141', color: '#FFFFFF'}}
                >
                    <h4 className='accordion-question'>
                        If my internet stops working, can I still control my lights?
                    </h4>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: 'rgba(33, 83, 204, 1)', color: '#FFFFFF'}}>
                    <p className='accordion-answer'>
                        Though you will not be able to control the lighting with your mobile phone or tablet, you can still turn them on and off using the switches and keypads mounted on the wall. This will still allow you to have control over your lighting regardless of any issues with internet. 
                    </p>
                </AccordionDetails>
            </Accordion>

            {/* Eighth Question */}
            <Accordion className='accordion' expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel8-content"
                    id="panel8-header"
                    style={{backgroundColor: '#414141', color: '#FFFFFF'}}
                >
                    <h4 className='accordion-question'>
                        Do I need faster internet for my smart lighting?
                    </h4>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: 'rgba(33, 83, 204, 1)', color: '#FFFFFF'}}>
                    <p className='accordion-answer'>
                        With commands being the only thing your smart lighting will require a internet connection for, it does not necessarily need faster interenet speeds to work efficiently. So, regardless of having every room with smart lighting, it will not consume so much bandwidth and slow down your internet speeds.
                    </p>
                </AccordionDetails>
            </Accordion>

            {/*  Nineth Question */}
            <Accordion className='accordion' expanded={expanded === 'panel9'} onChange={handleChange('panel9')} style={{borderRadius: '0 0 10px 10px'}}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel9-content"
                    id="panel9-header"
                    style={{backgroundColor: '#414141', color: '#FFFFFF', borderRadius: '0 0 10px 10px'}}
                >
                    <h4 className='accordion-question'>
                        Do I need a stronger Wi-Fi connection?
                    </h4>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor: 'rgba(33, 83, 204, 1)', color: '#FFFFFF', borderRadius: '0 0 10px 10px'}}>
                    <p className='accordion-answer'>
                        No you do not. Smart switches have their own communcation systems and do not interfere with your Wi-Fi. 
                    </p>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default FaqsComponent;