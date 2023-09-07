import css from './achievement.module.css';
import {BsArrowUpRight} from 'react-icons/bs';

const Achievement = ({padding}) => {
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
            <div className='headtitle'>
                Award <span>our award achievement</span>
            </div>
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