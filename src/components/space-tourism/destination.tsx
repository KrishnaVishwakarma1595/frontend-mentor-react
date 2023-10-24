import React, { useState } from 'react';
import Styles from '../../styles/space-tourism/index.module.css';
import DesinationTabs from './tabs';
import { DESTINATIONS } from './data';

const SpaceTourismDestination = () => {

    const [activeTab, setActiveTab] = useState<number>(0);
    const [currentDestination, setDestination] = useState<any>(DESTINATIONS[0]);

    const onTabChange = (index:number) => {
        setActiveTab(index);
        setDestination(DESTINATIONS[index]);
    }

    return (
        <div id='space__tourism_destination' className={`${Styles.stourDesitionContainer}`}>
            <h2 className={`${Styles.stour_dest__subheading}`}>
                <span>01</span>
                <span>Pick your destination</span>
            </h2>
            <div className={`${Styles.destContentInfoContainer}`}>
                <img src={currentDestination.images.png} alt='Moon' style={{
                    width: 445
                }} />
                <div className={`d-flex flex-column ${Styles.destInfo}`}>
                    <DesinationTabs active={activeTab} onChange={onTabChange} />
                    <h1 className={Styles.destName}>{currentDestination.name}</h1>
                    <p className={Styles.destDesc}>
                        {currentDestination.description}
                    </p>
                    <div className='d-flex' style={{ columnGap: 80 }}>
                        <div className='d-flex flex-column' style={{ rowGap: 12 }}>
                            <span className={Styles.dest_avg_dist}>AVG. DISTANCE</span>
                            <span className={Styles.dest_est_time}>
                                { currentDestination.distance }
                            </span>
                        </div>
                        <div className='d-flex flex-column' style={{ rowGap: 12 }}>
                            <span className={Styles.dest_avg_dist}>Est. travel time</span>
                            <span className={Styles.dest_est_time}>
                                { currentDestination.travel }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpaceTourismDestination;