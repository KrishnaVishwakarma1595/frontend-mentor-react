import Styles from '../../../styles/designo-multi-page/index.module.css';

const ServiceTop = ({ serviceId = '' } : { serviceId: string }) => {
    return (
        <div className={Styles.dsgn__service_giit}>
            <h1 className='m-0'>
                { serviceId.split('-').join(' ') }
            </h1>
            <p className='m-0'>
                {
                    serviceId === 'web-design' ? `We build websites that serve as powerful marketing tools 
                    and bring memorable brand experiences.` : ''
                }
                {
                    serviceId === 'app-design' ? `Our mobile designs bring intuitive digital solutions
                    to your customers right at their fingertips.` : ''
                }
                {
                    serviceId === 'graphic-design' ? `We deliver eye-catching branding materials that are 
                    tailored to meet your business objectives.` : ''
                }
            </p>
        </div>
    );
}

export default ServiceTop;