import LinkIndicator from './LinkIndicator';
import css from './portfolio.module.css';
import footerIm from '../assets/footerIm.jpg';
import theme1 from '../assets/theme1.jpg';
import theme2 from '../assets/theme2.jpg';
import theme3 from '../assets/theme3.jpg';
import theme4 from '../assets/theme4.jpg';
import theme5 from '../assets/theme5.jpg';
import theme6 from '../assets/theme6.jpg';
import theme7 from '../assets/theme7.jpg';
import theme8 from '../assets/theme8.jpg';
import theme9 from '../assets/theme9.jpg';
import RecentWorks from './RecentWorks';
import useAnimate from './useAnimate';
import { animated } from '@react-spring/web';

const Portfolio = () => {
    const image1 = {
        backgroundImage: `url(${theme1})`
    }
    const image2 = {
        backgroundImage: `url(${theme2})`
    }
    const image3 = {
        backgroundImage: `url(${theme3})`
    }
    const image4 = {
        backgroundImage: `url(${theme4})`
    }
    const image5 = {
        backgroundImage: `url(${theme5})`
    }
    const image6 = {
        backgroundImage: `url(${theme6})`
    }
    const image7 = {
        backgroundImage: `url(${theme7})`
    }
    const image8 = {
        backgroundImage: `url(${theme8})`
    }
    const image9 = {
        backgroundImage: `url(${theme9})`
    }

    const {
        ref, 
        ref2,
        ref1,
        refSpring1,
        refImage,
        spring1,
        springAnimated,
        springImage,
        springAnimated1,
        springAnimated2
    } = useAnimate()

    return (
        <section className={css.portfolioContainer}>
            <LinkIndicator text1={'Home'} text2={'Portfolio'}/>
            <section className={css.gameContainer}>
                <animated.div style={springImage} ref={refImage} className={css.gameImageWrp}>
                    <img src={footerIm} alt="" className={css.gameImage} />
                </animated.div>
                <div className={css.gameTextWrp}>
                    <div></div>
                    <animated.div style={springAnimated} ref={ref}>
                        Project CRM by brain <span>communication</span>
                    </animated.div>
                    <animated.h2 style={springAnimated1} ref={ref1}>Game Design</animated.h2>
                    <animated.p style={springAnimated2} ref={ref2}>
                        Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Quisquam eos labore nihil expedita ipsum id sit officia est. 
                        Nam numquam rerum error voluptates id praesentium, et corrupti.
                    </animated.p>
                    <animated.p style={spring1} ref={refSpring1}>
                        Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Quisquam eos labore nihil expedita ipsum id
                    </animated.p>
                    <animated.div style={springAnimated2} ref={ref2}></animated.div>
                </div>
            </section>
            <section className={css.portfolioWorkContainer}>
                <RecentWorks 
                    image1={image1}
                    image2={image2}
                    image3={image3}
                    name1={'ERP solution design'}
                    name2={'CRM management design'}
                    name3={'task management app'}
                    category1={'design'}
                    category2={'design'}
                    category3={'development'}
                />
                <RecentWorks 
                    image1={image4}
                    image2={image5}
                    image3={image6}
                    name1={'ecommerce solutions'}
                    name2={'redesign a ride sharing app'}
                    name3={'AI chatboat design'}
                    category1={'solutions'}
                    category2={'design'}
                    category3={'design'}
                />
                <RecentWorks 
                    image1={image7}
                    image2={image8}
                    image3={image9}
                    name1={'crypto exchange app'}
                    name2={'redesign a ride sharing app'}
                    name3={'payment gateway app'}
                    category1={'web3 dev'}
                    category2={'communication'}
                    category3={'development'}
                />
                <div className={css.circlebotton}>
                    load more
                </div>
            </section>
        </section>
    );
}
 
export default Portfolio;