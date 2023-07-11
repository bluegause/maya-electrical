import React from "react";
import Carousel from "react-multi-carousel";
import { responsive, serviceData } from '../../data';
import Card from "../../components/Card/Card";
import 'react-multi-carousel/lib/styles.css';
import './services.css';
const Services = () => {
    const service = serviceData.map((item, index) => (
        <Card
            key={index}
            icon={item.icon}
            description={item.description}
        />
    ))
    return (
        <>
            <div className="services-container">
                <Carousel responsive={responsive} showDots={true}>{service}</Carousel>
            </div>
        </>
    )
}

export default Services;