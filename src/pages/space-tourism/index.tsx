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
        </div>
    );
}

export default SpaceTourism;