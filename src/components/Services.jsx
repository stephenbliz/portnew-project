import LinkIndicator from "./LinkIndicator";
import {NavLink} from 'react-router-dom'
import css from './services.module.css';
import {FaGreaterThan} from 'react-icons/fa';
import {MdArrowRightAlt} from 'react-icons/md';
import gameImage from '../assets/game.jpg';
import illustrationImage from '../assets/illustration.jpg';
import uiImage from '../assets/ui.jpg';
import uxImage from '../assets/ux.jpg';
import useAnimate from "./useAnimate";
import { animated } from "@react-spring/web";
import useAnimationArray from './useAnimationArray'

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
    const {
        ref,
        ref1,
        springAnimated,
        springAnimated1
    } = useAnimate()

    const  {refs, refs2, arraySprings, arraySprings2} = useAnimationArray()

    return (
        <section className={css.servicesContainer}>
            <LinkIndicator text1={'Home'} text2={'Services'}/>

            <section className={css.workingProcess}>
                <animated.div style={springAnimated} ref={ref} className="headtitle">
                    Process <animated.span style={springAnimated1} ref={ref1}>Our Working Process</animated.span>
                </animated.div>
                <div className={css.processContainer}>
                    {
                        arraySprings.map((arraySpring, index)=>(
                            <animated.div className={css.processWrapperParent} style={arraySpring} key={arraySpring[index]} ref={refs[index]}>
                                {
                                <div className={css.processWrapper} key={processes[index].id}>
                                    <div className={`${processes[index].icon == '4'} ? ${css.processIconWrp} : ''`}>
                                        {processes[index].num =='4' ? processes[index].icon : [processes[index].icon, processes[index].icon]}
                                    </div>
                                    <div className={css.process}>
                                        <div><span>{processes[index].num}</span> / {processes[index].name}</div>
                                        <p>
                                            {processes[index].para} 
                                        </p>
                                    </div>
                                </div>
                                }
                            </animated.div>
                        ))
                    }
                </div>
            </section>

            <section className={css.workContainer}>
                {
                    arraySprings2.map((arraySpring2, index)=>(
                        <animated.div style={arraySpring2} key={arraySpring2[index]} ref={refs2[index]}>
                            {
                            <div className={css.workWrapper} key={services[index].id}>
                                <div>{services[index].name}</div>
                                <div className={css.imageWrapper}>
                                    <img src={services[index].image} alt="" className={css.workImage} />
                                </div>
                                <div className={css.workTextWrapper}>
                                    <p>{services[index].para}
                                    </p>
                                    <div className={css.workListWrapper}>
                                        <ul className={css.list1}>s[index]
                                            <li>+ {services[index].list[0]}</li>
                                            <li>+ {services[index].list[1]}</li>
                                            <li>+ {services[index].list[2]}</li>
                                            <li>+ {services[index].list[3]}</li>
                                            <li>+ {services[index].list[4]}</li>
                                            <li>+ {services[index].list[5]}</li>
                                            <li>+ {services[index].list[6]}</li>
                                        </ul>
        
                                        <ul className={css.list2}>
                                            <li>+ {services[index].list[0]}</li>
                                            <li>+ {services[index].list[1]}</li>
                                            <li>+ {services[index].list[2]}</li>
                                            <li>+ {services[index].list[3]}</li>
                                            <li>+ {services[index].list[4]}</li>
                                            <li>+ {services[index].list[5]}</li>
                                            <li>+ {services[index].list[6]}</li>
                                        </ul>
                                    </div>
        
                                    <NavLink to='/servicedetails'><div>Get in Touch <MdArrowRightAlt /></div></NavLink>
                                </div>
                            </div>
                            }
                        </animated.div>
                    ))
                }
            </section>
        </section>
    );
}
 
export default Services;