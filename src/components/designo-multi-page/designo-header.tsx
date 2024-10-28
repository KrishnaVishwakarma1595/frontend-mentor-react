import { useState } from 'react';
import Styles from '../../styles/designo-multi-page/index.module.css';
import { Link } from 'react-router-dom';

const DesignoHeader = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className={`d-flex justify-content-between align-items-center ${Styles.p64165} ${Styles.desgn__header}`}>
            <div style={{ width: 196, height: 24 }}>
                <Link to={'/designo-multi-page/'}>
                    <img src='/designo-multi-page/shared/desktop/logo-dark.png' alt='Designo Logo' />
                </Link>
            </div>
            <nav>
                <ul className='d-flex align-items-center m-0 p-0' style={{ gap: 42, listStyle: 'none' }}>
                    <li className={Styles.navLink}>
                        <Link to={'/designo-multi-page/about'}>
                            Our Company
                        </Link>
                    </li>
                    <li className={Styles.navLink}>
                        <Link to={'/designo-multi-page/locations'}>
                            Locations
                        </Link>
                    </li>
                    <li className={Styles.navLink}>
                        <Link to={'/designo-multi-page/contact'}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            {
                open ? (
                    <svg onClick={() => setOpen(false)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                            <path id="Combined Shape" fill-rule="evenodd" clipRule="evenodd" d="M10.0001 7.17165L2.92901 0.100586L0.100586 2.92901L7.17165 10.0001L0.100586 17.0711L2.92901 19.8996L10.0001 12.8285L17.0711 19.8996L19.8996 17.0711L12.8285 10.0001L19.8996 2.92901L17.0711 0.100586L10.0001 7.17165Z" fill="#1D1C1E"/>
                        </g>
                    </svg>
                ) : (
                    <svg onClick={() => setOpen(true)} width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="4" fill="#1D1C1E"/>
                        <rect y="8" width="24" height="4" fill="#1D1C1E"/>
                        <rect y="16" width="24" height="4" fill="#1D1C1E"/>
                    </svg>
                )
            }
            {
                open ? (
                    <div className={Styles.dsgn__mobile_nav}>
                        <ul>
                            <li>
                                <Link to={'/designo-multi-page/about'}>
                                    Our Company
                                </Link>
                            </li>
                            <li>
                                <Link to={'/designo-multi-page/locations'}>
                                    Locations
                                </Link>
                            </li>
                            <li>
                                <Link to={'/designo-multi-page/contact'}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>                    
                ) : null
            }
        </div>
    );
}

export default DesignoHeader;