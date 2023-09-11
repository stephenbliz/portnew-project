import css from './linkindicator.module.css';
import useAnimate from './useAnimate';
import { animated } from '@react-spring/web';

const LinkIndicator = ({text1, text2}) => {
    const {
        ref,
        refSpring1,
        spring1,
        springAnimated
    } = useAnimate();

    return (
        <section className={css.container}>
            <animated.div style={spring1} ref={refSpring1} className={css.linkHolder}>
                <div>--{text1}</div>
                <div>/</div>
                <div>{text2}--</div>
            </animated.div>
            <animated.div style={springAnimated} ref={ref}>{text2}</animated.div>
        </section>
    );
}
 
export default LinkIndicator;