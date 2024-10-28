import React from 'react';
import Styles from '../../styles/designo-multi-page/index.module.css';
import DesignoHeader from '../../components/designo-multi-page/designo-header';
import GetInTouch from '../../components/designo-multi-page/get-in-touch';
import DesignoFooter from '../../components/designo-multi-page/designo-footer';
import AboutTop from '../../components/designo-multi-page/about/about-top';
import WorldClassTalent from '../../components/designo-multi-page/about/world-class-talent';
import Locations from '../../components/designo-multi-page/locations';
import RealDeal from '../../components/designo-multi-page/about/real-deal';
import { ScrollToTop } from '../../components/designo-multi-page/scroll-to-top';

const DesignoAbout = () => {
    return (
        <div className={Styles.designo__main}>
            <ScrollToTop />
            <DesignoHeader />
            <AboutTop />
            <WorldClassTalent />
            <Locations />
            <RealDeal />
            <GetInTouch />
            <DesignoFooter />
        </div>
    );
}

export default DesignoAbout;