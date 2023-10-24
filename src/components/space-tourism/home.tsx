import React from 'react';
import Styles from '../../styles/space-tourism/index.module.css';

const SpaceTourismHome = ({
    onExplore
} : {
    onExplore: (a:number) => void
}) => {
    return (
        <div id='space__tourism_home' className={`${Styles.stourHomeContainer}`}>
            <div className='d-flex flex-column' style={{ rowGap: 24 }}>
                <h2>SO, YOU WANT TO TRAVEL TO</h2>
                <h1>SPACE</h1>
                <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not 
                    hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this 
                    world experience!
                </p>
            </div>
            <button className={`${Styles.exploreCTA}`} onClick={() => onExplore(1)}>
                Explore
            </button>
        </div>
    );
}

export default SpaceTourismHome;