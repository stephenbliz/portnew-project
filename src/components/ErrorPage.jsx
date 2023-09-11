import { Link } from 'react-router-dom';
import css from './errorpage.module.css';
import {BsArrowUpRight} from 'react-icons/bs';
import useAnimate from './useAnimate';
import { animated } from '@react-spring/web';

const ErrorPage = () => {
    const {
        ref,
        ref1,
        ref2,
        refSpring1,
        spring1,
        springAnimated,
        springAnimated1,
        springAnimated2,
    } = useAnimate();

    return (
        <section className={css.container}>
            <animated.div style={spring1} ref={refSpring1} className={css.num}>404</animated.div>
            <animated.div style={springAnimated} ref={ref}>Sorry! The page isn't found here</animated.div>
            <animated.p style={springAnimated1} ref={ref1}>
                Our error is a HTTP status code indicating that the requested
                resources could not be found on the server. It is commonly displayed as 
                a webpage with the message. This can occur when a user attempts to access 
                a URL that no longer exist or has been removed, or when a URL is typed incorrectly.
            </animated.p>
            <Link to='/'><animated.div style={springAnimated2} ref={ref2}>Back to home <BsArrowUpRight className={css.icon}/></animated.div></Link>
        </section>
    );
}
 
export default ErrorPage;