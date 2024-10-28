import React from 'react';
import Styles from '../../../styles/designo-multi-page/index.module.css';

const WorldClassTalent = () => {
    return (
        <div className={`${Styles.dsgn__about_wct}`}>
            <picture>
                <source media="(min-width: 768px)" srcSet={`/designo-multi-page/about/desktop/image-world-class-talent.jpg`} />
                <source media="(min-width: 1024px)" srcSet={`/designo-multi-page/about/tablet/image-world-class-talent.jpg`} />
                <img className="animate__animated animate__fadeIn" 
                src={`/designo-multi-page/about/mobile/image-world-class-talent.jpg`} alt="" style={{ 
                    height: '100%', objectFit: 'cover'
                }} />
            </picture>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h2 className=''>
                    World-class talent
                </h2>
                <p className='m-0'>
                    We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully 
                    crafted from concept to launch, ensuring success in its given market. We are constantly 
                    updating our skills in a myriad of platforms.
                </p>
                <p className='mt-4'>
                    Our team is multi-disciplinary and we are not merely interested in form — content and meaning 
                    are just as important. We give great importance to craftsmanship, service, and prompt 
                    delivery. Clients have always been impressed with our high-quality outcomes that encapsulates 
                    their brand’s story and mission.
                </p>
            </div>
        </div>
    );
}

export default WorldClassTalent;