import Styles from '../../../styles/designo-multi-page/index.module.css';
import { Link } from 'react-router-dom';

interface SERVICE_IMAGES{
    desktop: string,
    tablet: string,
    mobile: string
}

interface SERVICE{
    [key: string]: SERVICE_IMAGES,
}

const SERVICES: SERVICE = {
    'web-design': {
        desktop: '/designo-multi-page/home/desktop/image-web-design-large.jpg',
        tablet: '/designo-multi-page/home/tablet/image-web-design.jpg',
        mobile: '/designo-multi-page/home/mobile/image-web-design.jpg'
    },
    'app-design': {
        desktop: '/designo-multi-page/home/desktop/image-app-design.jpg',
        tablet: '/designo-multi-page/home/tablet/image-app-design.jpg',
        mobile: '/designo-multi-page/home/mobile/image-app-design.jpg'
    },
    'graphic-design': {
        desktop: '/designo-multi-page/home/desktop/image-graphic-design.jpg',
        tablet: '/designo-multi-page/home/tablet/image-graphic-design.jpg',
        mobile: '/designo-multi-page/home/mobile/image-graphic-design.jpg'
    }
}

const SingleServiceCard = ({
    serviceId = 'web-design',
    title = '',
    customStyles = {}    
} : {
    serviceId: string,
    title: string,
    customStyles?: React.CSSProperties
}) => {
    return (
        <div className={Styles.dsgn__service} style={{ ...customStyles }}>
            <span>
                <picture>
                    <source media="(min-width: 768px)" srcSet={SERVICES[serviceId]['desktop']} />
                    <source media="(min-width: 1024px)" srcSet={SERVICES[serviceId]['tablet']} />
                    <img className="animate__animated animate__fadeIn" src={SERVICES[serviceId]['mobile']} alt="" />
                </picture>
            </span>
            <div className='d-flex justify-content-center align-items-center flex-column' style={{ gap: 24 }}>
                <h2 className='fw-500 fs40 lh-48'>
                    { title }
                </h2>
                <Link to={`/designo-multi-page/service/${serviceId}`} className='d-flex align-items-center' style={{ gap: 21 }}>
                    <span className='fw-500 fs15 lh-18' style={{ whiteSpace: 'nowrap' }}>
                        View Projects
                    </span>
                    <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Path 5" d="M1 1L5 5L1 9" stroke="#E7816B" strokeWidth="2"/>
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default SingleServiceCard;