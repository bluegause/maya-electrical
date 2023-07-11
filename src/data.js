import { Light, Panel, Wireless, Tools, Upgrade, House } from "./pages/PageIndex";

export const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 
    },
    tablet: {
      breakpoint: { max: 1024, min: 710 },
      items: 2,
      slidesToSlide: 2 
    },
    mobile: {
      breakpoint: { max: 709, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };


  export const serviceData = [
    {
        id: 1,
        icon: <Light sx={{fontSize: "50px"}}/>,
        name: "Smart Lighting",
        description: "Forgot to turn off your lights before leaving? Smart lighting allows you to control your home lighting with a touch of a button. Adjust, turn on, and turn off your home's lighting from a smart phone or tablet."
    },
    {
        id: 2,
        icon: <Panel sx={{fontSize: "50px"}}/>,
        name: "Panelized Systems",
        description: "Eliminate all of your wall switches today. Installing a panelized system will give you control of your lights, outlets, window shades and more, all from a centralized keypad installed in your home."
    },
    {
        id: 3,
        icon: <Wireless sx={{fontSize: "50px"}}/>,
        name: "Wireless Systems",
        description: "Don't have the appropriate wiring? Don't stress. With our system installation your home can be completely wireless, allowing your home to be controlled through one home automation system.",
    },
    {
        id: 4,
        icon: <Tools sx={{fontSize: "50px"}}/>,
        name: "New Construction",
        description: "Building a new home can be Overwhelming. Maya Electric has you covered with all your electrical needs. With our experience, your home will have all the necessary wiring and controls installed with uniformity and precision.",
    },
    {
        id: 5,
        icon: <Upgrade sx={{fontSize: "50px"}}/>,
        name: "System Upgrades",
        description: "In need of a smart home update? Maya Electric is no stranger when it comes to smart home tech new and exisiting. We offer services to existing smart home owners, including programming changes, adding new devices, and even getting your firmwire up to date.",
    },
    {
        id: 6,
        icon: <House sx={{fontSize: "50px"}}/>,
        name: "Remodels",
        description: "Upgrade your home to be smart home capable. We offer services to those who are trying to update their property to be smart home capable. Whether if it's a panelized system, or a wireless system, Maya Electric is here for you."
    },
    
  ]