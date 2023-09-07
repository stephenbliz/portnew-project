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

const About = () => {
    const values = [
        {title: 'cooperation', no: '01', desc: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fugaquisquam dolorem odio Possimus facilis eveniet corrupti fugaquisquam dolorem odio.', id: 1},
        {title: 'useful', no: '02', desc: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fugaquisquam dolorem odio Possimus facilis eveniet corrupti fugaquisquam dolorem odio.', id: 2},
        {title: 'pursue', no: '03', desc: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fugaquisquam dolorem odio Possimus facilis eveniet corrupti fugaquisquam dolorem odio.', id: 3}
    ]
    return (
        <section className={css.aboutContainer}>
            <LinkIndicator text1={'Home'} text2={'About'}/>
            <CompleteSolu display={{flexDirection: 'row-reverse', backgroundColor: 'var(--navyblue)'}}/>
            <Numbers color={{color: 'var(--navyblue)'}}/>
            <Skill />

            <section className={[css.aboutSkillWrapper, css.aboutValue].join(' ')}>
                <div className={css.skillName}>
                    <h2>value</h2>
                    <div>
                        <div>strength</div>
                        <div></div>
                        <div>feature</div>
                    </div>
                </div>
                <div className={[css.skillDescWrp, css.valueDescWrp].join(' ')}>
                    <div></div>
                    <div className={css.circleWrapper}>
                        <div className={[css.circle, css.circle1].join(' ')}>
                            cooperation
                        </div>
                        <div className={[css.circle, css.circle2].join(' ')}>
                            useful
                        </div>
                        <div className={[css.circle, css.circle3].join(' ')}>
                            innovative
                        </div>
                    </div>
                    <div className={css.valueWrapper}>
                        {values.map((value)=>(
                            <div className={css.value} key={value.id}>
                                <div>{value.no} <span>{value.title}</span></div>
                                <p>
                                    {value.desc}
                                </p>
                            </div>
                        ))}    
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