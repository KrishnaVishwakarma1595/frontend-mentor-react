import { Link } from 'react-router-dom';
import Styles from '../../../styles/designo-multi-page/index.module.css';
import SingleServiceCard from './single-service-card';

const Services = () => {
    return (
        <div className={`${Styles.dsgn__services} ${Styles.p64165}`}>
            <SingleServiceCard title='Web Design' serviceId='web-design' />
            <SingleServiceCard title='App Design' serviceId='app-design' customStyles={{ height: 303 }} />
            <SingleServiceCard title='Graphic Design' serviceId='graphic-design' customStyles={{ height: 303 }} />           
        </div>
    );
}

export default Services;