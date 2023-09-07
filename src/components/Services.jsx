import LinkIndicator from "./LinkIndicator";
import {NavLink} from 'react-router-dom'
import css from './services.module.css';
import {FaGreaterThan} from 'react-icons/fa';
import {MdArrowRightAlt} from 'react-icons/md';
import gameImage from '../assets/game.jpg';
import illustrationImage from '../assets/illustration.jpg';
import uiImage from '../assets/ui.jpg';
import uxImage from '../assets/ux.jpg';

const Services = () => {
    const processes = [
        {icon: <FaGreaterThan />, num: '1', name: 'understand',
            para: 'Design sweet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatum.', id: 1},
        {icon: <FaGreaterThan />, num: '2', name: 'design',
            para: 'Design sweet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatum.', id: 2},
        {icon: <FaGreaterThan />, num: '3', name: 'validate',
            para: 'Design sweet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatum.', id: 3},
            {icon: 'GO', num: '4', name: 'go to run',
         para: 'Design sweet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatum.', id: 4}
    ]

    const services = [
        {name: '01 / UI Design', image: uiImage, para: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fuga quisquam dolorem odio? Asperiores veritatis earum minima nobis accusamus fuga dignissimos reiciendis ex.',
                list: ['Design sweet lorem ipsum', 'Design sweet lorem ipsum', 'Design sweet lorem ipsum', 'Design sweet lorem ipsum', 'Design sweet lorem ipsum', 'Design sweet lorem ipsum', 'Design sweet lorem ipsum'], id: 1 },
        {name: '02 / UX Design', image: uxImage, para: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fuga quisquam dolorem odio? Asperiores veritatis earum minima nobis accusamus fuga dignissimos reiciendis ex.',
                list: ['Design sweet lorem ipsum', 'Design sweet lorem ipsum', 'Design sweet lorem ipsum', 'Design sweet lorem ipsum', 'Design sweet lorem ipsum', 'Design sweet lorem ipsum', 'Design sweet lorem ipsum'], id: 2 },
        {name: '03 / Illustration', image: illustrationImage, para: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fuga quisquam dolorem odio? Asperiores veritatis earum minima nobis accusamus fuga dignissimos reiciendis ex.',
                list: ['Design sweet lorem ipsum', 'Design sweet lorem ipsum', 'Design sweet lorem ipsum', 'Design sweet lorem ipsum', 'Design sweet lorem ipsum', 'Design sweet lorem ipsum', 'Design sweet lorem ipsum'], id: 3 },
        {name: '04 / Game Design', image: gameImage, para: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fuga quisquam dolorem odio? Asperiores veritatis earum minima nobis accusamus fuga dignissimos reiciendis ex.',
                list: ['Design sweet lorem ipsum', 'Design sweet lorem ipsum', 'Design sweet lorem ipsum', 'Design sweet lorem ipsum', 'Design sweet lorem ipsum', 'Design sweet lorem ipsum', 'Design sweet lorem ipsum'], id: 4 }
    ]
    return (
        <section className={css.servicesContainer}>
            <LinkIndicator text1={'Home'} text2={'Services'}/>

            <section className={css.workingProcess}>
                <div className="headtitle">
                    Process <span>Our Working Process</span>
                </div>
                <div className={css.processContainer}>
                    {processes.map((process)=>(
                        <div className={css.processWrapper} key={process.id}>
                            <div className={`${process.icon == '4'} ? ${css.processIconWrp} : ''`}>
                                {process.num =='4' ? process.icon : [process.icon, process.icon]}
                            </div>
                        <div className={css.process}>
                            <div><span>{process.num}</span> / {process.name}</div>
                            <p>
                                {process.para} 
                            </p>
                        </div>
                    </div>
                    ))}   
                </div>
            </section>

            <section className={css.workContainer}>
                {services.map((service)=>(
                    <div className={css.workWrapper} key={service.id}>
                        <div>{service.name}</div>
                        <div className={css.imageWrapper}>
                            <img src={service.image} alt="" className={css.workImage} />
                        </div>
                        <div className={css.workTextWrapper}>
                            <p>{service.para}
                            </p>
                            <div className={css.workListWrapper}>
                                <ul className={css.list1}>
                                    <li>+ {service.list[0]}</li>
                                    <li>+ {service.list[1]}</li>
                                    <li>+ {service.list[2]}</li>
                                    <li>+ {service.list[3]}</li>
                                    <li>+ {service.list[4]}</li>
                                    <li>+ {service.list[5]}</li>
                                    <li>+ {service.list[6]}</li>
                                </ul>

                                <ul className={css.list2}>
                                    <li>+ {service.list[0]}</li>
                                    <li>+ {service.list[1]}</li>
                                    <li>+ {service.list[2]}</li>
                                    <li>+ {service.list[3]}</li>
                                    <li>+ {service.list[4]}</li>
                                    <li>+ {service.list[5]}</li>
                                    <li>+ {service.list[6]}</li>
                                </ul>
                            </div>

                            <NavLink to='/servicedetails'><div>Get in Touch <MdArrowRightAlt /></div></NavLink>
                        </div>
                    </div>
                ))}  
            </section>
        </section>
    );
}
 
export default Services;