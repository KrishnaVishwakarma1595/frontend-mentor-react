import React, { useState } from 'react';
import Styles from '../../styles/space-tourism/index.module.css';
import { TECHNOLOGY } from './data';

const SpaceTourismTech = () => {

    const [activeTechIndex, setActiveIndex] = useState<number>(0);
    const [activeTech, setTech] = useState<any>(TECHNOLOGY[0]);

    const onChange = (index:number) => {
        setTech(TECHNOLOGY[index]);
        setActiveIndex(index);
    }

    return (
        <div id='space__tourism__technology' className={`${Styles.sTourTechContainer}`}>
            <h2 className={`${Styles.stour_dest__subheading} p-0`}>
                <span>03</span>
                <span>SPACE LAUNCH 101</span>
            </h2>
            <div className={`${Styles.stour_techInfoContainer}`}>
                <div className={Styles.stour_techs}>
                    <ul className={`${Styles.stour_techList} p-0 m-0`}>
                        {
                            Array(TECHNOLOGY.length).fill(1).map((item:number, index:number) => (
                                <li onClick={() => onChange(index)} className={`${Styles.stour_techListItem} 
                                ${index === activeTechIndex ? Styles.stour_techListItemActive : ''}`}>
                                    { index + 1 }
                                </li>
                            ))
                        }
                    </ul>
                    <div className={`${Styles.stour_techDetails}`}>
                        <span>THE TERMINOLOGY…</span>
                        <h1>{ activeTech.name }</h1>
                        <p>
                            { activeTech.description }
                        </p>
                    </div>
                </div>
                <picture>
                    <source media="(min-width: 1024px)" srcSet={activeTech.images.portrait} />
                    <img className="animate__animated animate__fadeIn" src={activeTech.images.landscape}
                    alt="Tech" style={{
                        width: 515
                    }} />
                </picture>                
            </div>
        </div>
    );
}

export default SpaceTourismTech;