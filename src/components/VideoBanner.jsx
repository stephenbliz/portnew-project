import videoImage from '../assets/videoimage.jpg'
import {RxTriangleRight} from 'react-icons/rx';
import css from './videobanner.module.css';
import {BsArrowUpRight} from 'react-icons/bs';

const VideoBanner = () => {
    return (
        <div className={css.connImageWrapper}>
                <div className={css.onConnImage}>
                    <div>
                        <h2>Highly experienced people with us</h2>
                        <p>
                            Desigh sweet Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Possimus nam 
                            magni expedita officiis minus 
                        </p>
                        <div className={css.circle}>
                            <div>view <span>project</span></div>
                            <BsArrowUpRight />
                        </div>
                    </div>
                    <div>
                        <img src={videoImage} alt="" className={css.videoImage} />
                        <div className={css.outercircle}>
                            <div className={css.innercircle}>
                                <RxTriangleRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
 
export default VideoBanner;