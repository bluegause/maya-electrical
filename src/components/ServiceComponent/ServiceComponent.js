import React from "react";
import Carousel from "react-multi-carousel";
import { responsive, serviceData } from '../../data';
import Card from "../Card/Card";
import 'react-multi-carousel/lib/styles.css';
import './services.css';
const ServiceComponent = () => {
    const service = serviceData.map((item, index) => (
        <Card
            key={index}
            icon={item.icon}
            description={item.description}
        />
    ))
    return (
        <>
            <div className="service-component__container">
                <Carousel responsive={responsive} showDots={true}>{service}</Carousel>
            </div>
        </>
    )
}

export default ServiceComponent;