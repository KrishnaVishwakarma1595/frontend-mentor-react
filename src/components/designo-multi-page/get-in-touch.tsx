import { Link } from 'react-router-dom';
import Styles from '../../styles/designo-multi-page/index.module.css';

const GetInTouch = () => {
    return (
        <div className={`${Styles.dsgn__giit} ${Styles.p64165}`}>
            <div className='d-flex flex-column' style={{ gap: 12 }}>
                <span className='fs40 lh-40 fw-500'>Let’s talk about your project</span>
                <p className='fs16 lh-26 fw-400'>
                    Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
                </p>
            </div>
            <Link to={"/designo-multi-page/contact"} style={{ textDecoration: 'none' }}>
                <button type='button'>
                    Get in Touch
                </button>
            </Link>
        </div>
    );
}

export default GetInTouch;