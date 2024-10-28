import React, { useEffect } from 'react';
import Styles from '../../styles/designo-multi-page/index.module.css';
import DesignoHeader from '../../components/designo-multi-page/designo-header';
import GetInTouch from '../../components/designo-multi-page/get-in-touch';
import DesignoFooter from '../../components/designo-multi-page/designo-footer';
import { ScrollToTop } from '../../components/designo-multi-page/scroll-to-top';

const DesignoLocations = () => {

    return (
        <div className={Styles.designo__main}>
            <ScrollToTop />
            <DesignoHeader />
            <div className={Styles.dsgn__locs}>
                <div className={Styles.dsgn__locs_sngl}>
                    <div className={Styles.dsgn__locs_loc_s}>
                        <span className={Styles.dsgn__locs_lcnm}>Canada</span>
                        <div className='d-flex' style={{ gap: 90 }}>
                            <div className='d-flex flex-column'>
                                <span className='fw-600'>Designo Central Office</span>
                                <span>3886 Wellington Street</span>
                                <span>Toronto, Ontario M9C 3J5</span>
                            </div>
                            <div className='d-flex flex-column'>
                                <span className='fw-600'>Contact</span>
                                <span>P : +1 253-863-8967</span>
                                <span>M : contact@designo.co</span>
                            </div>
                        </div>
                    </div>
                    <picture>                        
                        <source media="(min-width: 1024px)" srcSet={`/designo-multi-page/locations/tablet/image-map-canada.png`} />
                        <img className="animate__animated animate__fadeIn" 
                        src={`/designo-multi-page/locations/desktop/image-map-canada.png`} alt="" style={{ 
                            height: '100%', objectFit: 'cover', borderRadius: 15
                        }} />
                    </picture>
                </div>
                <div className={Styles.dsgn__locs_sngl} style={{ gridTemplateColumns: '350px 1fr' }}>
                    <picture>                        
                        <source media="(min-width: 1024px)" srcSet={`/designo-multi-page/locations/tablet/image-map-australia.png`} />
                        <img className="animate__animated animate__fadeIn" 
                        src={`/designo-multi-page/locations/desktop/image-map-australia.png`} alt="" style={{ 
                            height: '100%', objectFit: 'cover', borderRadius: 15
                        }} />
                    </picture>
                    <div className={Styles.dsgn__locs_loc_s}>
                        <span className={Styles.dsgn__locs_lcnm}>Australia</span>
                        <div className='d-flex' style={{ gap: 90 }}>
                            <div className='d-flex flex-column'>
                                <span className='fw-600'>Designo AU Office</span>
                                <span>19 Balonne Street</span>
                                <span>New South Wales 2443</span>
                            </div>
                            <div className='d-flex flex-column'>
                                <span className='fw-600'>Contact</span>
                                <span>P : (02) 6720 9092</span>
                                <span>M : contact@designo.au</span>
                            </div>
                        </div>
                    </div>                   
                </div>
                <div className={Styles.dsgn__locs_sngl}>
                    <div className={Styles.dsgn__locs_loc_s}>
                        <span className={Styles.dsgn__locs_lcnm}>United Kingdom</span>
                        <div className='d-flex' style={{ gap: 90 }}>
                            <div className='d-flex flex-column'>
                                <span className='fw-600'>Designo UK Office</span>
                                <span>13 Colorado Way</span>
                                <span>Rhyd-y-fro SA8 9GA</span>
                            </div>
                            <div className='d-flex flex-column'>
                                <span className='fw-600'>Contact</span>
                                <span>P : 078 3115 1400</span>
                                <span>M : contact@designo.uk</span>
                            </div>
                        </div>
                    </div>
                    <picture>                        
                        <source media="(min-width: 1024px)" srcSet={`/designo-multi-page/locations/tablet/image-map-uk.png`} />
                        <img className="animate__animated animate__fadeIn" 
                        src={`/designo-multi-page/locations/desktop/image-map-united-kingdom.png`} alt="" style={{ 
                            height: '100%', objectFit: 'cover', borderRadius: 15
                        }} />
                    </picture>
                </div>
            </div>
            <GetInTouch />
            <DesignoFooter />
        </div>
    );
}

export default DesignoLocations;