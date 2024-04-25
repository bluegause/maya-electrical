import React, { useEffect } from 'react';
import './numberfooter.css';
import { Phone } from '@mui/icons-material';
import Aos from 'aos';

const NumberFooter = () => {

  useEffect(() => {
    Aos.init();
  })

  return (
    <footer className='number-footer' data-aos='fade' data-aos-once="true" data-anchor-placement="top-top">
      <div className='numfoot-wrapper'>
        <Phone />
        <span className='numfoot-typo'>Call Us</span>
        <span className='divider'>|</span>
        <a className='foot-num' href='tel:+18582151331' aria-label='+1(858)215-1331'>
          +1(858)215-1331
        </a>
      </div>
    </footer>
  )
}

export default NumberFooter;