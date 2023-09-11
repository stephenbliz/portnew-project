import css from './completesolu.module.css';
import footerImage from '../assets/footerIm.jpg';
import designImage from '../assets/designjob.jpg';
import useAnimate from './useAnimate';
import {animated} from '@react-spring/web'

const CompleteSolu = ({display}) => {
    const {
            ref, 
            ref1,
            ref2,
            // ref5,
            refImage,
            springImage,
            springAnimated,
            springAnimated1,
            springAnimated2,
            // springAnimated5
        } = useAnimate()

    return (
        <section style={display} className={css.compsoluton}>
            <div className={css.solutionText}>
                <animated.h2 style={springAnimated} ref={ref}>
                    We are complete solution for every idea 
                </animated.h2>
                <animated.p style={springAnimated1} ref={ref1}>
                    Design sweet Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Ipsam iusto fugiat dolores quaerat
                    provident consequuntur unde facere nobis. Sapiente 
                    temporibus qui distinctio numquam eveniet.
                </animated.p>
                <animated.p style={springAnimated2} ref={ref2}>
                    Design sweet Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Iure deserunt, repellendus error ipsam
                    veniam culpa odit assumenda eveniet facere.
                </animated.p>
                <div></div>
            </div>
            <animated.div style={springImage} ref={refImage} className={css.solutionImage}>
                <img src={footerImage} alt="A woman working with a computer" className={css.image1} />
                <img src={designImage} alt="" className={css.image2} />
            </animated.div>
        </section>
    );
}
 
export default CompleteSolu;