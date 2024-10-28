import Styles from '../../../styles/designo-multi-page/index.module.css';

const HeroSection = () => {
    return (
        <div className={`${Styles.dsgn__hero} ${Styles.p64165}`}>
            <div className='d-flex flex-column'>
                <h1>
                    Award-winning custom designs and digital branding solutions
                </h1>
                <p>
                    With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
                </p>
                <button type='button' className={Styles.dsgn__button_dark}>
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default HeroSection;