import css from './customersay.module.css';
import myPhoto from '../assets/myPhoto.jpg';
import Smallbotton from './Smallbotton';
import useAnimate from './useAnimate';
import {animated} from '@react-spring/web';

const CustomerSay = ({padding}) => {
    const {
        ref, 
        ref1,
        ref2,
        springAnimated,
        springAnimated1,
        springAnimated2
    } = useAnimate()
    return (
        <section style={padding} className={css.customersay}>
            <Smallbotton arrow={{transform: 'rotate(-135deg)'}} />
            <div className={css.testiWrapper}>
                <animated.div style={springAnimated} ref={ref} className={css.headtitle}>Testimonial <animated.span style={springAnimated1} ref={ref1}>our customer say</animated.span></animated.div>
                <animated.p style={springAnimated2} ref={ref2}>
                    "Contrary to popular believe, Lorem ipsum is not simply 
                    random text. It has root in a piece of classical latin literature.
                    Making it over 2000 years old. Richard Mcclintock, a latin professor,
                    at Sydney college."
                </animated.p>
                <div>
                    <img src={myPhoto} alt="" className={css.pphoto} />
                    
                </div>
                <span>Uzoma Ebuka</span>
            </div>
            <Smallbotton arrow={{transform: 'rotate(45deg)'}} />
        </section>
    );
}
 
export default CustomerSay;