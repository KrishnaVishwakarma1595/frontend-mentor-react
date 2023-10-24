import React, { useEffect, useState } from 'react';
import Styles from '../../styles/planets-facts-site/index.module.css';
import PlanetsFactHeader from '../../components/planets-facts-site/header';
import { PLANETS_DATA } from '../../components/planets-facts-site/data';

const PlanetsFactsSite = () => {

    const [activePlanetCode, setActivePlanetCode] = useState<number>(0);
    const [activeSubSection, setActiveSubSection] = useState<string>('planet');
    const [currentPlanet, setCurrentActivePlanet] = useState<any>(PLANETS_DATA[0]);

    const handleOnPlanetChange = (index: number) => {
        setActivePlanetCode(index);
        setCurrentActivePlanet(PLANETS_DATA[index]);
        setActiveSubSection('planet');
    }

    useEffect(() => {
        document.title = 'Frontend Mentor | Planets Facts Site'
    }, [])

    return (
        <div id={Styles.planetsFact__main}>
            <PlanetsFactHeader activePlanet={activePlanetCode} onPlanetChange={handleOnPlanetChange} />
            <div className={Styles.mobileViewTab}>
                <ul>
                    <li className={`${activeSubSection === 'planet' ? Styles.activeSubMobileTab : ''}`} 
                    data-activeplanetcode={activePlanetCode} onClick={() => setActiveSubSection('planet')}>Overview</li>
                    <li className={`${activeSubSection === 'internal' ? Styles.activeSubMobileTab : ''}`} 
                    data-activeplanetcode={activePlanetCode} onClick={() => setActiveSubSection('internal')}>Structure</li>
                    <li className={`${activeSubSection === 'geology' ? Styles.activeSubMobileTab : ''}`} 
                    data-activeplanetcode={activePlanetCode} onClick={() => setActiveSubSection('geology')}>Surface</li>
                </ul>
            </div>
            <div className={`d-flex justify-content-evenly align-items-center ${Styles.planetSection__container}`} style={{ marginTop: 50 }}>
                <div className={`${Styles.planetAvatar} position-relative`} role='main'>
                    {
                        activeSubSection !== 'geology' ? (
                            <img className={Styles.planet} src={currentPlanet['images'][activeSubSection]} alt='Planet Murcury'
                            data-activeplanetcode={activePlanetCode} />
                        ) : (
                            <>
                                <img className={Styles.planet} src={currentPlanet['images']['planet']} alt='Planet Murcury'
                                data-activeplanetcode={activePlanetCode} />
                                <img className={Styles.geologyI} src={currentPlanet['images'][activeSubSection]} alt='Planet Murcury'
                                style={{ transform: `translate(-50%, ${[5].includes(activePlanetCode) ? '0%' : '50%'})` }} 
                                data-activeplanetcode={activePlanetCode} />
                            </>
                        )
                    }                    
                </div>
                <div className={Styles.planetInfoSection}>
                    <div className='d-flex flex-column' style={{ rowGap: 24 }}>
                        <h2 className={`m-0 ${Styles.planetName}`}>
                            { currentPlanet.name }
                        </h2>
                        <p className={`m-0 ${Styles.planetDescription}`}>
                            { currentPlanet[activeSubSection]['content'] }
                        </p>
                        <span className={`d-flex ${Styles.planetSourceLink}`} style={{ columnGap: 5 }}>
                            <span>Source: </span>
                            <a href={currentPlanet[activeSubSection]['source']} rel="noreferrer" target='_blank' 
                            className='d-flex align-items-center' style={{ columnGap: 8 }}>
                                <span data-value="wiki">Wikipedia</span> 
                                <svg style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z" 
                                    fill="white"/>
                                </svg>
                            </a>
                        </span>
                    </div>
                    <div className={`d-flex flex-column ${Styles.desktopViewTabs}`} style={{ rowGap: 16 }}>
                        <button className={`${Styles.subInfoButtons} ${activeSubSection === 'planet' ? Styles.activeSubButton : ''}`} 
                        onClick={() => setActiveSubSection('planet')} data-activeplanetcode={activePlanetCode}>
                            <span>01</span>
                            <span>Overview</span>
                        </button>
                        <button className={`${Styles.subInfoButtons} ${activeSubSection === 'internal' ? Styles.activeSubButton : ''}`} 
                        onClick={() => setActiveSubSection('internal')} data-activeplanetcode={activePlanetCode}>
                            <span>02</span>
                            <span>Internal Structure</span>
                        </button>
                        <button className={`${Styles.subInfoButtons} ${activeSubSection === 'geology' ? Styles.activeSubButton : ''}`}
                        onClick={() => setActiveSubSection('geology')} data-activeplanetcode={activePlanetCode}>
                            <span>03</span>
                            <span>Surface Geology</span>
                        </button>
                    </div>
                </div>
            </div>
            <div id='planet-analytics' className={Styles.planetAnalytics}>
                <h2 className='d-none'>Section</h2>
                <div className={Styles.analyticCard}>
                    <span>ROTATION TIME</span>
                    <span>{ currentPlanet.rotation }</span>
                </div> 
                <div className={Styles.analyticCard}>
                    <span>REVOLUTION TIME</span>
                    <span>{ currentPlanet.revolution }</span>
                </div> 
                <div className={Styles.analyticCard}>
                    <span>RADIUS</span>
                    <span>{ currentPlanet.radius }</span>
                </div> 
                <div className={Styles.analyticCard}>
                    <span>AVERAGE TEMP.</span>
                    <span>{ currentPlanet.temperature }</span>
                </div> 
            </div>
            <footer className="attribution animate__animated animate__fadeIn animate__delay-1s pb-3" 
            style={{ color: 'var(--white)', fontFamily: 'var(--ff-spartan)' }}>            
                Challenge by <a rel="noreferrer" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>{"  "}
                Developed by <a rel="noreferrer" href="https://www.frontendmentor.io/profile/KrishnaVishwakarma1595" target="_blank"
                aria-label="Developer - Krishna Vishwakarma">
                    <img src="./logo-color-white.png" style={{ width: 150, margin: '6px auto'}} 
                    alt="Developer - Krishna Vishwakarma" />
                </a>
                {/* <!-- <a href="https://www.frontendmentor.io/profile/KrishnaVishwakarma1595" target="_blank">Krishna Vishwakarma</a>.			 --> */}
            </footer>
        </div>
     
    );
}

export default PlanetsFactsSite;