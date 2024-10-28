import Styles from '../../../styles/designo-multi-page/index.module.css';

const ServiceCard = ({
    service
} : {
    service: { image: string, title: string, description: string }
}) => {
    return (
        <div className={Styles.dsgn__service_card}>
            <div>
                <img src={service.image} alt='' />
            </div>
            <div className='d-flex flex-column align-items-center' style={{ gap: 16 }}>
                <span>{service.title}</span>
                <p>{service.description} </p>
            </div>
        </div>
    );
}

export default ServiceCard;