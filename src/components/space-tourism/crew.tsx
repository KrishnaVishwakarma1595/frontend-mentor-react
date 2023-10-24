import React, { useEffect, useRef, useState } from 'react';
import Styles from '../../styles/space-tourism/index.module.css';
import { CREW } from './data';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

const SpaceTourismCrew = () => {

    const [activeCrewMemberIndex, setActiveIndex] = useState<number>(0);
    const [activeCrewMember, setCrewMember] = useState<any>(CREW[0]);

    const CREW_IMAGE_WIDTH:any = {
        0: 450,
        1: 380,
        2: 500,
        3: 500,
    }

    const onSlideChange = (index:number) => {
        setCrewMember(CREW[index]);
        setActiveIndex(index);
    }

    useEffect(() => {
        const interVal = setInterval(() => {
            // console.log('running interval...', activeCrewMemberIndex);
            if(activeCrewMemberIndex >= CREW.length - 1){
                setActiveIndex(0);
                setCrewMember(CREW[0])
            }else{
                setActiveIndex((prev:number) => prev + 1);
                setCrewMember(CREW[activeCrewMemberIndex + 1])
            }
        }, 3000);

        return () => {
            if(interVal) clearInterval(interVal);
        }
    }, [activeCrewMemberIndex])

    return (
        <div id='space__tourism__crew' className={`${Styles.sTourCrewContainer}`}>
            <h2 className={`${Styles.stour_dest__subheading} p-0 ${Styles.sTourabsMHeading} d-none`}>
                <span>02</span>
                <span>Meet your crew</span>
            </h2>
            <div className={Styles.stourCrewSliderContainer}>
                <h2 className={`${Styles.stour_dest__subheading} p-0`}>
                    <span>02</span>
                    <span>Meet your crew</span>
                </h2>
                <div className={`${Styles.crewSlideItem}`}>
                    <h2 className={Styles.crewMemberRole}>
                        { activeCrewMember.role }
                    </h2>
                    <h1 className={Styles.crewMemberName}>
                        { activeCrewMember.name }
                    </h1>
                    <p className={Styles.crewMemberBio}>
                        { activeCrewMember.bio }
                    </p>
                    <div className={`${Styles.crewSlideNav}`}>
                        {
                            CREW.map((item:any, index:number) => (
                                <div key={index} onClick={() => onSlideChange(index)} 
                                className={Styles.sliderPaginationCircle}
                                data-value={activeCrewMemberIndex === index ? 'active' : ''}></div>
                            ))
                        }
                    </div>
                </div>                
            </div>
            <div className={`${Styles.crewMemberAvatar}`} style={{ width: CREW_IMAGE_WIDTH[activeCrewMemberIndex] }}>
                <img src={`${activeCrewMember.images.png}`} alt='Crew Member' />
            </div>
        </div>
    );
}

export default SpaceTourismCrew;