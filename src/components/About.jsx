import css from './about.module.css';
import CompleteSolu from './CompleteSolu';
import LinkIndicator from './LinkIndicator';
import Numbers from './Numbers';
import CustomerSay from './CustomerSay';
import Team from './Team';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';
import Achievement from './Achievement';
import VideoBanner from './VideoBanner';
import Skill from './Skill';
import useAnimate from './useAnimate';
// import useAnimationArray3 from './useAnimationArray3.jsx';
import useAnimationArray3 from './useAnimationArray3';
import { animated } from '@react-spring/web';

const About = () => {
    const values = [
        {title: 'cooperation', no: '01', desc: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fugaquisquam dolorem odio Possimus facilis eveniet corrupti fugaquisquam dolorem odio.', id: 1},
        {title: 'useful', no: '02', desc: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fugaquisquam dolorem odio Possimus facilis eveniet corrupti fugaquisquam dolorem odio.', id: 2},
        {title: 'pursue', no: '03', desc: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fugaquisquam dolorem odio Possimus facilis eveniet corrupti fugaquisquam dolorem odio.', id: 3}
    ]

    const {
        ref,
        ref1,
        ref3,
        ref5,
        springAnimated,
        springAnimated1,
        springAnimated3,
        springAnimated5
    } = useAnimate();

    const {refs, arraySprings} = useAnimationArray3();

    return (
        <section className={css.aboutContainer}>
            <LinkIndicator text1={'Home'} text2={'About'}/>
            <CompleteSolu display={{flexDirection: 'row-reverse', backgroundColor: 'var(--navyblue)'}}/>
            <Numbers color={{color: 'var(--navyblue)'}}/>
            <Skill />

            <section className={[css.aboutSkillWrapper, css.aboutValue].join(' ')}>
                <div className={css.skillName}>
                    <animated.h2 style={springAnimated} ref={ref}>value</animated.h2>
                    <animated.div style={springAnimated1} ref={ref1}>
                        <div>strength</div>
                        <div></div>
                        <div>feature</div>
                    </animated.div>
                </div>
                <div className={[css.skillDescWrp, css.valueDescWrp].join(' ')}>
                    <div></div>
                    <div className={css.circleWrapper}>
                        <animated.div style={springAnimated3} ref={ref3} className={[css.circle, css.circle1].join(' ')}>
                            cooperation
                        </animated.div>
                        <div   className={[css.circle, css.circle2].join(' ')}>
                            useful
                        </div>
                        <animated.div style={springAnimated5} ref={ref5} className={[css.circle, css.circle3].join(' ')}>
                            innovative
                        </animated.div>
                    </div>
                    <div className={css.valueWrapper}>
                        {
                            arraySprings.map((arraySpring, index)=>(
                                <animated.div style={arraySpring} key={arraySpring[index]} ref={refs[index]}>
                                    {
                                    <div className={css.value} key={values[index].id}>
                                        <div>{values[index].no} <span>{values[index].title}</span></div>
                                        <p>
                                            {values[index].desc}
                                        </p>
                                    </div>
                                    }
                                </animated.div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <CustomerSay padding={{paddingTop: '0'}}/>

            <section className={css.profteam}>
                <div className='headtitle'>
                    team <span>our professional team</span>
                </div>
                <Team 
                    image1={team1} image2={team2} image3={team3} image4={team4}
                    name1={'Albert Wick'} name2={'Andrew Nikos'} name3={'katy Wilson'} name4={'Aya Nikola'}
                    job1={'UX/UI Designer'} job2={'IOS Developer'} job3={'Web Developer'} job4={'Digital Marketer'}
                />
            </section>

            <Achievement padding={{paddingTop: '0'}}/>

            <VideoBanner />
        </section>
    );
}
 
export default About;