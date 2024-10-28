import React from 'react';
import Styles from '../../../styles/designo-multi-page/index.module.css';

const AboutTop = () => {
    return (
        <div className={`${Styles.dsgn__about_glit}`}>
            <div className='d-flex flex-column' style={{ gap: 32 }}>
                <h1 className='m-0'>
                    About Us
                </h1>
                <p className='m-0'>
                    Founded in 2010, we are a creative agency that produces lasting results for our clients. 
                    We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that 
                    make real impact. We’re always looking forward to creating brands, products, and digital 
                    experiences that connect with our clients’ audiences.
                </p>    
            </div>
            <picture>
                <source media="(min-width: 768px)" srcSet={`/designo-multi-page/about/desktop/image-about-hero.png`} />
                <source media="(min-width: 1024px)" srcSet={`/designo-multi-page/about/tablet/image-about-hero.png`} />
                <img className="animate__animated animate__fadeIn" 
                src={`/designo-multi-page/about/mobile/image-about-hero.png`} alt="" style={{ 
                    height: '100%', objectFit: 'cover'
                }} />
            </picture>
        </div>
    );
}

export default AboutTop;