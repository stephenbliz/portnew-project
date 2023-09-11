import videoImage from '../assets/videoimage.jpg'
import {RxTriangleRight} from 'react-icons/rx';
import css from './videobanner.module.css';
import {BsArrowUpRight} from 'react-icons/bs';
import useAnimate from './useAnimate';
import { animated } from '@react-spring/web';

const VideoBanner = () => {
    const {
        ref, 
        ref1,
        ref2,
        refImage,
        springImage,
        springAnimated,
        springAnimated1,
        springAnimated2
    } = useAnimate()
    return (
        <div className={css.connImageWrapper}>
                <div className={css.onConnImage}>
                    <div>
                        <animated.h2 style={springAnimated} ref={ref}>Highly experienced people with us</animated.h2>
                        <animated.p style={springAnimated1} ref={ref1}>
                            Desigh sweet Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Possimus nam 
                            magni expedita officiis minus 
                        </animated.p>
                        <animated.div style={springAnimated2} ref={ref2} className={css.circle}>
                            <div>view <span>project</span></div>
                            <BsArrowUpRight />
                        </animated.div>
                    </div>
                    <animated.div style={springImage} ref={refImage}>
                        <img src={videoImage} alt="" className={css.videoImage} />
                        <div className={css.outercircle}>
                            <div className={css.innercircle}>
                                <RxTriangleRight />
                            </div>
                        </div>
                    </animated.div>
                </div>
            </div>
    );
}
 
export default VideoBanner;