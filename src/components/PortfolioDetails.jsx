import LinkIndicator from './LinkIndicator';
import robot1 from '../assets/robot1.jpg';
import robot2 from '../assets/robot2.jpg';
import {MdArrowRightAlt} from 'react-icons/md';
import robot3 from '../assets/robot3.jpg';
import car from '../assets/car1.jpg';
import css from './portfoliodetails.module.css';
import useAnimate from './useAnimate';
import { animated } from '@react-spring/web';

const PortfolioDetails = () => {
    const portfolioInfo = [
        {name: 'About Project', desc: '2 Weeks / Dec, 2022 / UI/UX Designer Portfolio', id: 1},
        {name: 'Deliverables', desc: 'Wireframe, Design System, Dark and Light Mode UI Design', id: 2},
        {name: 'About Project', desc: 'User Experience, User Interface, Iconography', id: 3}
    ]

    const paragraph =  "Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fugaquisquam dolorem odio? Asperiores veritatis earum minima nobis Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fuga quisquam dolorem odio? Asperiores veritatis earum minima nobis"

    const {
        ref,
        reff,
        ref1,
        ref11,
        ref2,
        ref22,
        ref3,
        ref33,
        ref4,
        ref44,
        ref5,
        ref55,
        ref6,
        ref7,
        ref8,
        refSpring,
        refSpring1,
        refImage,
        refImage1,
        refImage2,
        springImage,
        springImage1,
        springImage2,
        spring,
        spring1,
        springAnimated,
        springAnimated1,
        springAnimated2,
        springAnimated3,
        springAnimated4,
        springAnimated5,
        springAnimatedd,
        springAnimated11,
        springAnimated22,
        springAnimated33,
        springAnimated44,
        springAnimated55,
        springAnimated6,
        springAnimated7,
        springAnimated8,
    } = useAnimate();
    

    return (
        <section className={css.portfoliodetContainer}>
            <LinkIndicator text1={'Home'} text2={'Portfolio Details'}/>
            <div className={css.portAboutContainer}>
                {portfolioInfo.map((info)=>(
                    <div key={info.id}>
                        <h3>{info.name}</h3>
                        <div>
                            {info.desc}
                        </div>
                    </div>
                ))}
                
            </div>
            <section className='portfoliodetWrapper'>
                <animated.div style={springImage} ref={refImage} className='portImaWrp'>
                    <img src={robot1} alt="" className='portImage' />
                </animated.div>
                <animated.p style={springAnimated} ref={ref}>
                    {paragraph}
                </animated.p>
                <animated.p style={springAnimated1} ref={ref1}>
                    {paragraph}
                </animated.p>
                <animated.h2 style={springAnimated3} ref={ref3}>Structuring the site</animated.h2>
                <animated.p style={springAnimated4} ref={ref4}>
                    {paragraph}
                </animated.p>
                <animated.p style={springAnimated5} ref={ref5}>
                    {paragraph}
                </animated.p>
                <animated.div style={springImage1} ref={refImage1} className='portImaWrp'>
                    <img src={robot2} alt="" className='portImage1' />
                    <img src={robot3} alt="" className='portImage1' />
                </animated.div>
                <animated.h2 style={springAnimatedd} ref={reff}>Design System</animated.h2>
                <animated.p style={springAnimated11} ref={ref11}>
                    {paragraph}
                </animated.p>
                <animated.p style={springAnimated22} ref={ref22}>
                    {paragraph}
                </animated.p>
                <animated.h2 style={springAnimated33} ref={ref33}>Iconography</animated.h2>
                <animated.p style={springAnimated44} ref={ref44}>
                    {paragraph}
                </animated.p>
                <animated.p style={springAnimated55} ref={ref55}>
                    {paragraph}
                </animated.p>
                <animated.div style={springImage2} ref={refImage2} className='portImaWrp'>
                    <img src={car} alt="" className='portImage' />
                </animated.div>
                <animated.h2 style={springAnimated6} ref={ref6}>UI Components</animated.h2>
                <animated.p style={springAnimated7} ref={ref7}>
                    {paragraph}
                </animated.p>
                <animated.p style={springAnimated8} ref={ref8}>
                    {paragraph}
                </animated.p>
                <animated.div style={spring} ref={refSpring} className={css.switchWrp}>
                    <div className={css.switch}><MdArrowRightAlt className={css.left}/> Previous</div>
                    <div className={css.switch}>Next <MdArrowRightAlt className={css.right}/></div>
                </animated.div>
            </section>
        </section>
    );
}
 
export default PortfolioDetails;