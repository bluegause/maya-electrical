import React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMore from '@mui/icons-material/ExpandMore';

import './whyus.css';
import { Transparentlogo } from '../../assets/AssetsIndex';

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
    },
    }));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2)
    }));

const WhyUs = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className='whyus-container'>
            <Accordion expanded={expanded === 'reason1'} onChange={handleChange('reason1')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="reason1-content"
                >
                    <img src={Transparentlogo} style={{width: '50px'}}/>
                    <Typography>
                        Competitive Pricing
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        We thrive to offer you the best possible rate on all of our installations. We want you to save money, but also offer the best customer service and installation possible, making the experience easy and affordable.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'reason1'} onChange={handleChange('reason1')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="reason1-content"
                >
                    <img src={Transparentlogo} style={{width: '50px'}}/>
                    <Typography>
                        Competitive Pricing
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        We thrive to offer you the best possible rate on all of our installations. We want you to save money, but also offer the best customer service and installation possible, making the experience easy and affordable.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'reason1'} onChange={handleChange('reason1')}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="reason1-content"
                >
                    <img src={Transparentlogo} style={{width: '50px'}}/>
                    <Typography>
                        Competitive Pricing
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        We thrive to offer you the best possible rate on all of our installations. We want you to save money, but also offer the best customer service and installation possible, making the experience easy and affordable.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
        
    )
    }

    export default WhyUs;