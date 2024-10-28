import React from 'react';
import Styles from '../../../styles/designo-multi-page/index.module.css';

const RealDeal = () => {
    return (
        <div className={`${Styles.dsgn__about_wct} ${Styles.dsgn__about_rel}`} style={{ gridTemplateColumns: '1fr 475px',
        backgroundPosition: 'left bottom' }}>            
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h2 className=''>
                    The real deal
                </h2>
                <p className='m-0'>
                    As strategic partners in our clients’ businesses, we are ready to take on any challenge as our 
                    own. Solving real problems require empathy and collaboration, and we strive to bring a fresh 
                    perspective to every opportunity. We make design and technology more accessible and give you 
                    tools to measure success.
                </p>
                <p className='mt-4'>
                    We are visual storytellers in appealing and captivating ways. By combining business and 
                    marketing strategies, we inspire audiences to take action and drive real results.
                </p>
            </div>
            <picture>
                <source media="(min-width: 768px)" srcSet={`/designo-multi-page/about/desktop/image-real-deal.jpg`} />
                <source media="(min-width: 1024px)" srcSet={`/designo-multi-page/about/tablet/image-real-deal.jpg`} />
                <img className="animate__animated animate__fadeIn" 
                src={`/designo-multi-page/about/mobile/image-real-deal.jpg`} alt="" style={{ 
                    height: '100%', objectFit: 'cover'
                }} />
            </picture>
        </div>
    );
}

export default RealDeal;