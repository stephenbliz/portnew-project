import css from './achievement.module.css';
import {BsArrowUpRight} from 'react-icons/bs';
import useAnimate from './useAnimate';
import useAnimationArray from './useAnimationArray';
import { animated } from '@react-spring/web';

const Achievement = ({padding}) => {
    const {
        ref,
        ref1,
        springAnimated,
        springAnimated1
    } = useAnimate()

    const achieves = [
        {name: 'Awards', desc: 'Design sweet Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corrupti ducimus, perferendis.', 
            date: '05 Jan 2023', icon: <BsArrowUpRight />, id: 1},
        {name: 'Github', desc: 'Design sweet Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corrupti ducimus, perferendis.', 
            date: '09 Feb 2023', icon: <BsArrowUpRight />, id: 2},
        {name: 'Zencode', desc: 'Design sweet Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corrupti ducimus, perferendis.', 
            date: '12 Jan 2023', icon: <BsArrowUpRight />, id: 3},
        {name: 'Dribbles', desc: 'Design sweet Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corrupti ducimus, perferendis.', 
            date: '05 Feb 2023', icon: <BsArrowUpRight />, id: 4},
    ]

    const {refs, arraySprings } = useAnimationArray()
    
    return (
        <section style={padding} className={css.achievementContainer}>
            <animated.div style={springAnimated} ref={ref} className='headtitle'>
                Award <animated.span style={springAnimated1} ref={ref1}>our award achievement</animated.span>
            </animated.div>
            <div className={css.acheiveWrapper}>
                {
                    arraySprings.map((arraySpring, index)=>(
                        <animated.div style={arraySpring} key={arraySpring[index]} ref={refs[index]}>
                            {
                            <div className={css.achievement} key={achieves[index].id}>
                                <div>{achieves[index].name}</div>
                                <p>
                                    {achieves[index].desc}
                                </p>
                                <div className={css.date}>05 Jan 2023</div>
                                <div>see project {achieves[index].icon} </div>
                            </div>
                            }
                        </animated.div>
                    ))
                }
                {/* {achieves.map((achieve)=>(
                    <div className={css.achievement} key={achieve.id}>
                        <div>{achieve.name}</div>
                        <p>
                            {achieve.desc}
                        </p>
                        <div className={css.date}>05 Jan 2023</div>
                        <div>see project {achieve.icon} </div>
                    </div>
                ))} */}
            </div>
        </section>
    );
}
 
export default Achievement;