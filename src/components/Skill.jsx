import css from './skill.module.css';
import image from '../assets/designjob.jpg';

const Skill = ({padding}) => {
    const skills = [
        {title: 'web coding', image: image, no: '01', desc: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fugaquisquam dolorem odio.', id: 1 },
        {title: 'web coding', image: image, no: '02', desc: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fugaquisquam dolorem odio.', id: 2 },
        {title: 'web coding', image: image, no: '03', desc: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fugaquisquam dolorem odio.', id: 3 },
        {title: 'web coding', image: image, no: '04', desc: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fugaquisquam dolorem odio.', id: 4 }
    ]

    return (
        <section style={padding} className={css.aboutSkillWrapper}>
                <div className={css.skillName}>
                    <h2>skills</h2>
                    <div>
                        <div>skills</div>
                        <div></div>
                        <div>certificate</div>
                    </div>
                </div>
                <div className={css.skillDescWrp}>
                    <div></div>
                    <div className={css.skillTypesWrp}>
                        {skills.map((skill)=>(
                            <div className={css.skills} key={skill.id}>
                                <div>{skill.no}</div>
                                <h3>{skill.title}
                                    <div className={css.skillImageWrp}>
                                        <img src={skill.image} alt="" className={css.skillImage} />
                                    </div>
                                </h3>
                                <p>
                                    {skill.desc}
                                </p>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </section>

    );
}
 
export default Skill;