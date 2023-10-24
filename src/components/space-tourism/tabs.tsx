import React from 'react';
import Styles from '../../styles/space-tourism/index.module.css';

const DesinationTabs = ({
    active,
    onChange
} : {
    active: number,
    onChange:(a:number) => void
}) => {
    return (
        <ul id='stour__tabs' className={`${Styles.stoutTabs}`}>
            {
                ['moon', 'mars', 'europa', 'titan'].map((item:string, index:number) => (
                    <li key={index} onClick={() => onChange(index)} 
                    data-value={active === index ? 'active' : ''}>
                        {item}
                    </li>
                ))
            }
        </ul>
    );
}

export default DesinationTabs;