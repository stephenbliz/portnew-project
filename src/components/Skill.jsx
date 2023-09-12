import css from './skill.module.css';
import image from '../assets/designjob.jpg';
import useAnimationArray from './useAnimationArray';
import useAnimate from './useAnimate';
import {animated} from '@react-spring/web'

const Skill = ({padding}) => {
    const skills = [
        {title: 'web coding', image: image, no: '01', desc: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fugaquisquam dolorem odio.', id: 1 },
        {title: 'web coding', image: image, no: '02', desc: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fugaquisquam dolorem odio.', id: 2 },
        {title: 'web coding', image: image, no: '03', desc: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fugaquisquam dolorem odio.', id: 3 },
        {title: 'web coding', image: image, no: '04', desc: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fugaquisquam dolorem odio.', id: 4 }
    ]
    const {
        ref,
        ref1,
        springAnimated,
        springAnimated1
    } = useAnimate()

    const {refs, arraySprings} = useAnimationArray();

    return (
        <section style={padding} className={css.aboutSkillWrapper}>
                <div className={css.skillName}>
                    <animated.h2 style={springAnimated} ref={ref}>skills</animated.h2>
                    <animated.div style={springAnimated1} ref={ref1}>
                        <div>skills</div>
                        <div></div>
                        <div>certificate</div>
                    </animated.div>
                </div>
                <div className={css.skillDescWrp}>
                    <div></div>
                    <div className={css.skillTypesWrp}>
                        {arraySprings.map((arraySpring, index)=>(
                            <animated.div className={css.skillsparent} ref={refs[index]} style={arraySpring} key={arraySpring[index]}>
                                {
                                <div className={css.skills} key={skills[index].id}>
                                    <div>{skills[index].no}</div>
                                    <h3>{skills[index].title}
                                        <div className={css.skillImageWrp}>
                                            <img src={skills[index].image} alt="" className={css.skillImage} />
                                        </div>
                                    </h3>
                                    <p>
                                        {skills[index].desc}
                                    </p>
                                </div>
                                }
                            </animated.div>
                        ))}
                    </div>
                </div>
            </section>

    );
}
 
export default Skill;