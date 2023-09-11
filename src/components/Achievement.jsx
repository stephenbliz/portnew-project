import css from './achievement.module.css';
import {BsArrowUpRight} from 'react-icons/bs';
import useAnimate from './useAnimate';
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
    
    return (
        <section style={padding} className={css.achievementContainer}>
            <animated.div style={springAnimated} ref={ref} className='headtitle'>
                Award <animated.span style={springAnimated1} ref={ref1}>our award achievement</animated.span>
            </animated.div>
            <div className={css.acheiveWrapper}>
                {achieves.map((achieve)=>(
                    <div className={css.achievement} key={achieve.id}>
                        <div>{achieve.name}</div>
                        <p>
                            {achieve.desc}
                        </p>
                        <div className={css.date}>05 Jan 2023</div>
                        <div>see project {achieve.icon} </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
 
export default Achievement;