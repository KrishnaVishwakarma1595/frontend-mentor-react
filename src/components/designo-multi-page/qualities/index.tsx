import Styles from '../../../styles/designo-multi-page/index.module.css';

const OurQualities = () => {
    return (
        <div className={`${Styles.dsgn__qualities} ${Styles.p64165}`}>
            <div className={Styles.dsgn__qual}>
                <div>
                    <img src='/designo-multi-page/home/desktop/illustration-passionate.svg' alt='' />
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center'
                style={{ gap: 32 }}>
                    <h3>Passionate</h3>
                    <p>
                        Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.
                    </p>
                </div>
            </div>
            <div className={Styles.dsgn__qual}>
                <div>
                    <img src='/designo-multi-page/home/desktop/illustration-resourceful.svg' alt='' />
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center'
                style={{ gap: 32 }}>
                    <h3>Resourceful</h3>
                    <p>
                        Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.
                    </p>
                </div>
            </div>
            <div className={Styles.dsgn__qual}>
                <div>
                    <img src='/designo-multi-page/home/desktop/illustration-friendly.svg' alt='' />
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center'
                style={{ gap: 32 }}>
                    <h3>Friendly</h3>
                    <p>
                        We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OurQualities;