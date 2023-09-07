import css from './servicedetails.module.css';
import LinkIndicator from './LinkIndicator';
import groupImage from '../assets/groupimage.jpg';
import Slider from './Slider';
import uiImage from '../assets/ui.jpg';
import typing from '../assets/typing.jpg';
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import {BsStars} from 'react-icons/bs';


const ServiceDetails = () => {

    const serviceDetails = [
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

    
    return (
        <section className={css.servicedetContainer}>
            <LinkIndicator text1={'Home'} text2={'Services'}/>
            <section className={css.fromideaContainer}>
                <div className={css.fromideaTextWrapper}>
                    <h2>
                        From ideation to graphic design, UX/UI design is
                        the historical displine.
                    </h2>
                    <div className={css.ideaWrapper}>
                        <div className={css.idea}>
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
                        </div>

                        <div className={css.idea}>
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
                        </div>
                    </div>
                </div>

                <div className={css.fromideaImageWrapper}>
                    <img src={groupImage} alt="" className={css.fromideaImage} />
                </div>
            </section>
            <Slider text={"User Research"} icon={<BsStars className={css.stars}/>}/>
            <section className={css.servicedetailWrapper}>
                {serviceDetails.map((servicedetail)=>(
                    <div className={css.servicedetail} key={servicedetail.id}>
                        <div className={css.imageSide}>
                            <div className={css.servicedetailImgWrp}>
                                <img src={servicedetail.image} alt="" className={css.servicedetailImg} />
                            </div>
                            <div className={css.listWrapper}>
                                <div>
                                    <div className={servicedetail.color == 'green'? css.green : css.orange}></div>
                                    <div>{servicedetail.features[0]}</div>
                                </div>
                                
                                <div>
                                    <div className={servicedetail.color == 'green'? css.green : css.orange}></div>
                                    <div>{servicedetail.features[1]}</div>
                                </div>

                                <div>
                                    <div className={servicedetail.color == 'green'? css.green : css.orange}></div>
                                    <div>{servicedetail.features[2]}</div>
                                </div>

                                <div>
                                    <div className={servicedetail.color == 'green'? css.green : css.orange}></div>
                                    <div>{servicedetail.features[3]}</div>
                                </div>
                            </div>
                        </div>
                        <div className={css.textSide}>
                            <h2>{servicedetail.name}</h2>
                            <p>{servicedetail.mainDesc}</p>
                            <p>{servicedetail.minorDesc}</p>
                            <div></div>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    );
}
 
export default ServiceDetails;