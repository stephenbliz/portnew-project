import css from './servicedetails.module.css';
import LinkIndicator from './LinkIndicator';
import groupImage from '../assets/groupimage.jpg';
import Slider from './Slider';
import uiImage from '../assets/ui.jpg';
import typing from '../assets/typing.jpg';
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import {BsStars} from 'react-icons/bs';
import useAnimate from './useAnimate';
import { animated } from '@react-spring/web';
import useAnimationArray from './useAnimationArray';


const ServiceDetails = () => {

    const servicedetails = [
        {name: 'Research', color: 'green', image: uiImage, mainDesc: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fuga quisquam dolorem odio? Asperiores veritatis earum minima nobis accusamus fuga dignissimos reiciendis ex.', 
            minorDesc: 'Our digital agency specializes in helping buisnesses of all sizes navigate the ever elvoving digital landscape. From website design and development to digital marketing.', 
            features: ['context', 'Wireframe', 'Test', 'Prototype'], id: 1 },
        {name: 'Analyze', image: service1, mainDesc: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fuga quisquam dolorem odio? Asperiores veritatis earum minima nobis accusamus fuga dignissimos reiciendis ex.', 
            minorDesc: 'Our digital agency specializes in helping buisnesses of all sizes navigate the ever elvoving digital landscape. From website design and development to digital marketing.', 
            features: ['context', 'Wireframe', 'Test', 'Prototype'], id: 2 },
        {name: 'Design', color: 'green', image: typing, mainDesc: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fuga quisquam dolorem odio? Asperiores veritatis earum minima nobis accusamus fuga dignissimos reiciendis ex.', 
            minorDesc: 'Our digital agency specializes in helping buisnesses of all sizes navigate the ever elvoving digital landscape. From website design and development to digital marketing.', 
            features: ['context', 'Wireframe', 'Test', 'Prototype'], id: 3 },
        {name: 'Launch & Analyze', image: service2, mainDesc: 'Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fuga quisquam dolorem odio? Asperiores veritatis earum minima nobis accusamus fuga dignissimos reiciendis ex.', 
            minorDesc: 'Our digital agency specializes in helping buisnesses of all sizes navigate the ever elvoving digital landscape. From website design and development to digital marketing.', 
            features: ['context', 'Wireframe', 'Test', 'Prototype'], id: 4 }
    ]

    const {
        ref,
        ref1,
        ref2,
        refImage,
        springAnimated,
        springAnimated1,
        springAnimated2,
        springImage
    } = useAnimate()

    const {refs, arraySprings} = useAnimationArray();

    
    return (
        <section className={css.servicedetContainer}>
            <LinkIndicator text1={'Home'} text2={'Service Details'}/>
            <section className={css.fromideaContainer}>
                <div className={css.fromideaTextWrapper}>
                    <animated.h2 style={springAnimated} ref={ref}>
                        From ideation to graphic design, UX/UI design is
                        the historical displine.
                    </animated.h2>
                    <div  className={css.ideaWrapper}>
                        <animated.div style={springAnimated1} ref={ref1} className={css.idea}>
                            <div>
                                <div className={css.green}></div>
                                <div>UX Design</div>
                            </div>

                            <div>
                                <div className={css.green}></div>
                                <div>Research</div>
                            </div>

                            <div>
                                <div className={css.green}></div>
                                <div>UI Design</div>
                            </div>

                            <div>
                                <div className={css.green}></div>
                                <div>Illustration</div>
                            </div>
                        </animated.div>

                        <animated.div style={springAnimated2} ref={ref2} className={css.idea}>
                            <div>
                                <div className={css.orange}></div>
                                <div>UX Design</div>
                            </div>

                            <div>
                                <div className={css.orange}></div>
                                <div>Research</div>
                            </div>

                            <div>
                                <div className={css.orange}></div>
                                <div>UI Design</div>
                            </div>

                            <div>
                                <div className={css.orange}></div>
                                <div>Illustration</div>
                            </div>
                        </animated.div>
                    </div>
                </div>

                <animated.div style={springImage} ref={refImage} className={css.fromideaImageWrapper}>
                    <img src={groupImage} alt="" className={css.fromideaImage} />
                </animated.div>
            </section>
            <Slider text={"User Research"} icon={<BsStars className={css.stars}/>}/>
            <section className={css.servicedetailWrapper}>
                {
                    arraySprings.map((arraySpring, index)=>(
                        <animated.div className={css.servicedetailParent} style={arraySpring} key={arraySpring[index]} ref={refs[index]}>
                            {
                                <div className={css.servicedetail} key={servicedetails[index].id}>
                                <div className={css.imageSide}>
                                    <div className={css.servicedetailImgWrp}>
                                        <img src={servicedetails[index].image} alt="" className={css.servicedetailImg} />
                                    </div>
                                    <div className={css.listWrapper}>
                                        <div>
                                            <div className={servicedetails[index].color == 'green'? css.green : css.orange}></div>
                                            <div>{servicedetails[index].features[0]}</div>
                                        </div>
                                        
                                        <div>
                                            <div className={servicedetails[index].color == 'green'? css.green : css.orange}></div>
                                            <div>{servicedetails[index].features[1]}</div>
                                        </div>
        
                                        <div>
                                            <div className={servicedetails[index].color == 'green'? css.green : css.orange}></div>
                                            <div>{servicedetails[index].features[2]}</div>
                                        </div>
        
                                        <div>
                                            <div className={servicedetails[index].color == 'green'? css.green : css.orange}></div>
                                            <div>{servicedetails[index].features[3]}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={css.textSide}>
                                    <h2>{servicedetails[index].name}</h2>
                                    <p>{servicedetails[index].mainDesc}</p>
                                    <p>{servicedetails[index].minorDesc}</p>
                                    <div></div>
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
 
export default ServiceDetails;