import React, { useEffect, useState } from 'react';
import Styles from '../../styles/space-tourism/index.module.css';
import SpaceTourismHeader from '../../components/space-tourism/header';
import SpaceTourismHome from '../../components/space-tourism/home';
import SpaceTourismDestination from '../../components/space-tourism/destination';
import SpaceTourismCrew from '../../components/space-tourism/crew';
import SpaceTourismTech from '../../components/space-tourism/technology';

const SpaceTourism = () => {

    const [activeNavItem, setActiveNavItem] = useState<number>(0);

    useEffect(() => {
        document.title = "Frontend Mentor | Space Tourism Site"
    }, [])

    return (
        <div id='space-tourism__main' className={Styles.spaceTourismMainContainer}
        data-value={activeNavItem}>
            <SpaceTourismHeader activeItem={activeNavItem} setNavItem={setActiveNavItem} />
            {
                activeNavItem === 0 ? <SpaceTourismHome onExplore={setActiveNavItem} /> : null
            }
            {
                activeNavItem === 1 ? <SpaceTourismDestination /> : null
            }
            {
                activeNavItem === 2 ? <SpaceTourismCrew /> : null
            }
            {
                activeNavItem === 3 ? <SpaceTourismTech /> : null
            }            
            <footer className="attribution animate__animated animate__fadeIn animate__delay-1s pb-3" 
            style={{ color: 'var(--white)', fontFamily: 'var(--ff-bellefair)', position: activeNavItem === 2 ? 'absolute' : 'relative', bottom: 0 }}>            
                Challenge by <a rel="noreferrer" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>{"  "}
                Developed by <a rel="noreferrer" href="https://www.frontendmentor.io/profile/KrishnaVishwakarma1595" target="_blank"
                aria-label="Developer - Krishna Vishwakarma">
                    <img src="/logo-color-white.png" style={{ width: 150, margin: '6px auto'}} 
                    alt="Developer - Krishna Vishwakarma" />
                </a>
                {/* <!-- <a href="https://www.frontendmentor.io/profile/KrishnaVishwakarma1595" target="_blank">Krishna Vishwakarma</a>.			 --> */}
            </footer>
        </div>        
    );
}

export default SpaceTourism;