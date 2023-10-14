import React, { useState } from 'react';
import Styles from '../../styles/planets-facts-site/index.module.css';

const PlanetsFactHeader = ({
    activePlanet,
    onPlanetChange
} : {
    activePlanet: number,
    onPlanetChange:(a:number) => void
}) => {

    const PLANETS:any = [
        { title: 'mercury', color: 'var(--light-bluish)'},
        { title: 'venus', color: 'var(--turmaric-yellow)'},
        { title: 'earth', color: 'var(--purple)'},
        { title: 'mars', color: 'var(--tomato-red)'},
        { title: 'jupiter', color: 'var(--dark-red)'},
        { title: 'saturn', color: 'var(--choco-red)'},
        { title: 'uranus', color: 'var(--cyan)'},
        { title: 'neptune', color: 'var(--blue)'},
    ];

    const [isMenuVisible, toggleMenu] = useState<boolean>(false);

    return (
        <div className={`d-flex justify-content-between align-items-center ${Styles.planetsHeader}`}>
            <h1 className={Styles.headerTitle} style={{ cursor: 'pointer' }} onClick={() => onPlanetChange(0)} >THE PLANETS</h1>
            <nav>
                <ul className={Styles.planetsHeaderNavList}>
                    {
                        PLANETS.map((item:any, index:number) => (
                            <li onClick={() => onPlanetChange(index)} data-activeplanet={`${activePlanet === index ? true : false}`}
                            className={`${Styles.planetsHeaderNavListItem}`}>{item.title}</li>
                        ))
                    }                
                </ul>
            </nav>
            <img onClick={() => toggleMenu(!isMenuVisible)} className={Styles.mobileMenuIcon} src='./planets-facts-site/assets/icon-hamburger.svg' alt='humburger' style={{
                width: 24, cursor: 'pointer'
            }} />
            {
                isMenuVisible ? (
                    <nav className={`${Styles.navMobileMenu } animate__animated animate__slideInLeft`}>
                        <ul>
                            {
                                PLANETS.map((item:any, index:number) => (                            
                                    <li onClick={() => { onPlanetChange(index); toggleMenu(false); }} 
                                    className={`d-flex justify-content-between align-items-center ${Styles.navMobileListItem}`}>
                                        <div className='d-flex align-items-center' style={{ columnGap: 25}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <circle cx="10" cy="10" r="10" fill={item.color} />
                                            </svg>
                                            <span>{item.title}</span>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                                            <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white"/>
                                        </svg>
                                    </li>
                                ))
                            }  
                        </ul>
                    </nav>
                ) : null
            }
        </div>
    );
}

export default PlanetsFactHeader;