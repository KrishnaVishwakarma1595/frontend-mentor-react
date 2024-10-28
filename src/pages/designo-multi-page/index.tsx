import Styles from '../../styles/designo-multi-page/index.module.css';
import DesignoHeader from '../../components/designo-multi-page/designo-header';
import HeroSection from '../../components/designo-multi-page/home/hero-section';
import Services from '../../components/designo-multi-page/services';
import OurQualities from '../../components/designo-multi-page/qualities';
import DesignoFooter from '../../components/designo-multi-page/designo-footer';
import GetInTouch from '../../components/designo-multi-page/get-in-touch';
import { ScrollToTop } from '../../components/designo-multi-page/scroll-to-top';

const Designo = () => {
    return (
        <div className={Styles.designo__main}>
            <ScrollToTop />
            <DesignoHeader />
            <HeroSection />
            <Services />
            <OurQualities />
            <GetInTouch />
            <DesignoFooter />
        </div>
    );
}

export default Designo;