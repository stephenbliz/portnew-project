import LinkIndicator from './LinkIndicator';
import css from './teamdetails.module.css';
import {BsArrowUpRight} from 'react-icons/bs';
import team1 from '../assets/team1.jpg';
import Skill from './Skill';
import useAnimate from './useAnimate';
import { animated } from '@react-spring/web';

const TeamDetails = () => {
    const {
        ref,
        ref1,
        ref2,
        ref3,
        ref4,
        refImage,
        springImage,
        springAnimated,
        springAnimated1,
        springAnimated2,
        springAnimated3,
        springAnimated4
    } = useAnimate()

    return (
        <section className={css.container}>
            <LinkIndicator text1={'Home'} text2={'Team Details'} />
            <section className={css.teamWrapper}>
                <animated.div style={springImage} ref={refImage} className={css.teamImageWrp}>
                    <img src={team1} alt="" className={css.teamImage} />
                </animated.div>
                <div className={css.teamDescWrp}>
                    <animated.h2 style={springAnimated} ref={ref}>Aya Nikola <span>UX/UI Designer</span> </animated.h2>
                    <div></div>
                    <animated.p style={springAnimated1} ref={ref1}>
                        Design sweet Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus similique quos sint tenetur blanditiis in quidem dolores aliquam
                        repellat vel nobis animi, fugiat deleniti praesentium, consequatur vitae velit.
                        Eos, laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dolorum atque vero ipsum veritatis quo non nam obcaecati ratione totam provident,
                        quasi porro ea alias ipsam repellendus, odio, saepe iste error?
                    </animated.p>
                    <div className={css.contactWrp}>
                        <animated.div style={springAnimated2} ref={ref2} className={css.contact}>
                            <div>contact details</div>
                            <div className={css.email}>uzomaebuka11@gmail.com</div>
                            <div>+09010000000</div>
                        </animated.div>
                        <animated.div style={springAnimated2} ref={ref2} className={css.contact}>
                            <div>address</div>
                            <div>458 old york court huntington</div>
                            <div>station NY 11746</div>
                        </animated.div>
                    </div>
                    <div className={css.socialWrp}>
                        <animated.div style={springAnimated3} ref={ref3}>social</animated.div>
                        <animated.div style={springAnimated4} ref={ref4} className={css.mediaWrp}>
                            <div className={css.media}>facebook</div>
                            <div className={css.media}>twitter</div>
                            <div className={css.media}>linkedIn <BsArrowUpRight /> </div>
                        </animated.div>
                    </div>
                </div>
            </section>
            <Skill padding={{paddingTop: '0'}}/>
        </section>
    );
}
 
export default TeamDetails;