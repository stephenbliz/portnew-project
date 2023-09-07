import LinkIndicator from './LinkIndicator';
import robot1 from '../assets/robot1.jpg';
import robot2 from '../assets/robot2.jpg';
import {MdArrowRightAlt} from 'react-icons/md';
import robot3 from '../assets/robot3.jpg';
import car from '../assets/car1.jpg';
import css from './portfoliodetails.module.css';

const PortfolioDetails = () => {
    const portfolioInfo = [
        {name: 'About Project', desc: '2 Weeks / Dec, 2022 / UI/UX Designer Portfolio', id: 1},
        {name: 'Deliverables', desc: 'Wireframe, Design System, Dark and Light Mode UI Design', id: 2},
        {name: 'About Project', desc: 'User Experience, User Interface, Iconography', id: 3}
    ]

    const paragraph =  "Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fugaquisquam dolorem odio? Asperiores veritatis earum minima nobis Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fuga quisquam dolorem odio? Asperiores veritatis earum minima nobis"
    

    return (
        <section className={css.portfoliodetContainer}>
            <LinkIndicator text1={'Home'} text2={'Portfolio'}/>
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
                <div className='portImaWrp'>
                    <img src={robot1} alt="" className='portImage' />
                </div>
                <p>
                    {paragraph}
                </p>
                <p>
                    {paragraph}
                </p>
                <h2>Structuring the site</h2>
                <p>
                    {paragraph}
                </p>
                <p>
                    {paragraph}
                </p>
                <div className='portImaWrp'>
                    <img src={robot2} alt="" className='portImage1' />
                    <img src={robot3} alt="" className='portImage1' />
                </div>
                <h2>Design System</h2>
                <p>
                    {paragraph}
                </p>
                <p>
                    {paragraph}
                </p>
                <h2>Iconography</h2>
                <p>
                    {paragraph}
                </p>
                <p>
                    {paragraph}
                </p>
                <div className='portImaWrp'>
                    <img src={car} alt="" className='portImage' />
                </div>
                <h2>UI Components</h2>
                <p>
                    {paragraph}
                </p>
                <p>
                    {paragraph}
                </p>
                <div className={css.switchWrp}>
                    <div className={css.switch}><MdArrowRightAlt className={css.left}/> Previous</div>
                    <div className={css.switch}>Next <MdArrowRightAlt className={css.right}/></div>
                </div>
            </section>
        </section>
    );
}
 
export default PortfolioDetails;