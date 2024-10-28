import React from 'react';
import Styles from '../../styles/designo-multi-page/index.module.css';
import { Link } from 'react-router-dom';

const Locations = () => {
    
    return (
        <div className={`${Styles.dsgn__all_lcns}`}>
            <div className={Styles.dsgn__loc}>
                <img src='/designo-multi-page/shared/desktop/illustration-canada.svg' alt='' />
                <div className='d-flex flex-column align-items-center' style={{ gap: 32 }}>
                    <span>Canada</span>
                    <Link to="/designo-multi-page/locations" style={{ textDecoration: 'none' }}>
                        <button className={Styles.dsgn__btn_loc}>
                            See Location
                        </button>
                    </Link>
                </div>
            </div>
            <div className={Styles.dsgn__loc}>
                <img src='/designo-multi-page/shared/desktop/illustration-australia.svg' alt='' />
                <div className='d-flex flex-column align-items-center' style={{ gap: 32 }}>
                    <span>AUSTRALIA</span>
                    <Link to="/designo-multi-page/locations" style={{ textDecoration: 'none' }}>
                        <button className={Styles.dsgn__btn_loc}>
                            See Location
                        </button>
                    </Link>
                </div>
            </div>
            <div className={Styles.dsgn__loc}>
                <img src='/designo-multi-page/shared/desktop/illustration-united-kingdom.svg' alt='' />
                <div className='d-flex flex-column align-items-center' style={{ gap: 32 }}>
                    <span>UNITED KINGDOM</span>
                    <Link to="/designo-multi-page/locations" style={{ textDecoration: 'none' }}>
                        <button className={Styles.dsgn__btn_loc}>
                            See Location
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Locations;