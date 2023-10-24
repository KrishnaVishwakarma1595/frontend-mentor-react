import React, { useState } from 'react';
import Styles from '../../styles/space-tourism/index.module.css';

const SpaceTourismHeader = ({
    activeItem,
    setNavItem
} : {
    activeItem: number,
    setNavItem:(a:number) => void
}) => {

    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <div role='banner' className={`d-flex justify-content-between align-items-center ${Styles.spaceTourismHeader}`}>
            <img src='/space-tourism/assets/shared/logo.svg' alt='Space Tourism' style={{
                width: 48, height: 48
            }} />
            <nav role='navigation' className={Styles.navBar}>
                <ul className={`${Styles.navList}`}>
                    {
                        ['home', 'destination', 'crew', 'technology'].map((item:string, index:number) => (
                            <li key={index} onClick={() => setNavItem(index)} className={`${Styles.navListItem} 
                            ${index === activeItem ? Styles.activeNavListItem : ''}`}>
                                <span>0{index}</span>
                                <span>{item}</span>
                            </li>
                        ))

                    }
                </ul>
            </nav>
            <img src='/space-tourism/assets/shared/icon-hamburger.svg' alt='Mobile Menu icon' className={Styles.stour_mobileNavIcon}
            onClick={() => setShowMenu(!showMenu)} />
            {
                showMenu ? (
                    <nav role='navigation' className={`${Styles.mobileNavbar} animate__animated animate__slideInRight`}>
                        <div className='d-flex justify-content-end'>
                            <img src='/space-tourism/assets/shared/icon-close.svg' alt='Mobile Menu icon' 
                            className={Styles.stour_mobileNavIcon} onClick={() => setShowMenu(false)} />
                        </div>
                        <ul className={`${Styles.mobileNavList}`}>
                            {
                                ['home', 'destination', 'crew', 'technology'].map((item:string, index:number) => (
                                    <li key={index} onClick={() => {
                                        setNavItem(index);setShowMenu(false);
                                    }} className={`${Styles.mobileNavListItem} 
                                    ${index === activeItem ? Styles.activeMNavListItem : ''}`}>
                                        <span>0{index}</span>
                                        <span>{item}</span>
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

export default SpaceTourismHeader;