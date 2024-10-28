import { Link, useParams } from 'react-router-dom';
import DesignoFooter from '../../components/designo-multi-page/designo-footer';
import DesignoHeader from '../../components/designo-multi-page/designo-header';
import GetInTouch from '../../components/designo-multi-page/get-in-touch';
import Styles from '../../styles/designo-multi-page/index.module.css';
import ServiceTop from '../../components/designo-multi-page/services/service-top';
import ServiceCard from '../../components/designo-multi-page/services/service-card';
import { SERVICES } from '../../static-data/designo-multi-page/services';
import SingleServiceCard from '../../components/designo-multi-page/services/single-service-card';
import { ScrollToTop } from '../../components/designo-multi-page/scroll-to-top';

const DesignoService = () => {
    const { serviceId } = useParams();    

    return (
        <div className={Styles.designo__main}>
            <ScrollToTop />
            <DesignoHeader />
            <ServiceTop serviceId={serviceId || ''} />
            <div className={Styles.dsgn__services_list}>
                {
                    SERVICES[serviceId || 'web-design'].map((item:any, index: number) => (
                        <ServiceCard service={item} key={index} />
                    ))
                }
            </div>
            <div className={Styles.dsgn__oth_servc}>
                {
                    serviceId !== 'app-design' ? (
                        <SingleServiceCard title='App Design' serviceId='app-design' customStyles={{ height: 303 }} />
                    ) : null
                }
                {
                    serviceId !== 'web-design' ? (
                        <SingleServiceCard title='Web Design' serviceId='web-design' customStyles={{ height: 303 }} />
                    ) : null 
                }
                {
                    serviceId !== 'graphic-design' ? (
                        <SingleServiceCard title='Graphic Design' serviceId='graphic-design' customStyles={{ height: 303 }} />
                    ) : null 
                }
            </div>
            <GetInTouch />
            <DesignoFooter />
        </div>
    );
}

export default DesignoService;