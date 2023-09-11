import Botton from './Botton';
import Slider from './Slider';
import Smallbotton from './Smallbotton';
import css from './footer.module.css';
import {FaHandPeace} from 'react-icons/fa'
import footerImage from '../assets/footerIm.jpg';
import useAnimate from './useAnimate';
import { animated } from '@react-spring/web';

const Footer = () => {
    const {
        ref,
        reff,
        ref1,
        ref2,
        ref3,
        ref4,
        ref5,
        refImage,
        springImage,
        springAnimated,
        springAnimated1,
        springAnimated2,
        springAnimated3,
        springAnimated4,
        springAnimated5,
        springAnimatedd,
    } = useAnimate();
    
    const position = screen.width >= 1400 ?
        {
            position: 'absolute',
            top: '40%',
            left: '51%',
            backgroundColor: 'var(--lightgreen2)',
            border: 'none',
            boxShadow: 'none'
        }: {
            position: 'absolute',
            top: '40%',
            left: '49.5%',
            backgroundColor: 'var(--lightgreen2)',
            border: 'none',
            boxShadow: 'none'
        }

    const arrowWrapper = {
        backgroundColor: 'var(--green)',
        border: 'none',
        boxShadow: 'none'
    }

    return (
        <section className={css.footer}>
            <Slider text={"Let's work together"} icon={<FaHandPeace className={css.handIcon} />}/>
            <animated.div style={springAnimated} ref={ref} className={css.footerChat}>
                <div>Tell about your project!</div>
                <div>
                    <div className={css.chatName}>Let's chat with <span>Ebuka</span></div>
                    <Smallbotton link={'/contact'} arrow={{transform: 'scale(.9)'}}/>
                </div>
            </animated.div>
            <div className={css.footerWrapper}>
                <Botton 
                    position={position}
                    arrowWrapper={arrowWrapper}
                />
                <div className={css.footerTextWrapper}>
                    <animated.div style={springAnimatedd} ref={reff} className={css.footerMediaWrapper}>
                        <div className={css.footerMedia}>Linkedin</div>
                        <div className={css.footerMedia}>Instagram</div>
                        <div className={css.footerMedia}>Dribble</div>
                        <div className={css.footerMedia}>Behance</div>
                        <div className={css.footerMedia}>Facebook</div>
                        <div className={css.footerMedia}>Twitter</div>
                    </animated.div>
                    <animated.div style={springAnimated1} ref={ref1} className={css.footerAddress}>
                        <div>We are in</div>
                        <h3>In new york, USA</h3>
                    </animated.div>
                    <animated.div style={springAnimated2} ref={ref2} className={css.footerAddress}>
                        <div>Drop us a line</div>
                        <h3 className={css.footerEmail}>hello@ebuka.com</h3>
                    </animated.div>
                    <animated.div style={springAnimated3} ref={ref3} className={css.footerLinkWrapper}>
                        <div className={css.footerLink}>About /</div>
                        <div className={css.footerLink}>Service /</div>
                        <div className={css.footerLink}>Portfolio /</div>
                        <div className={css.footerLink}>Work History /</div>
                        <div className={css.footerLink}>My Client /</div>
                        <div className={css.footerLink}>Blog /</div>
                        <div className={css.footerLink}>Contact /</div>
                    </animated.div>
                    <animated.div style={springAnimated4} ref={ref4} className={css.line}></animated.div>
                    <animated.div style={springAnimated5} ref={ref5}>@2023 Portnew, All Rights Reserved.</animated.div>
                </div>
                <animated.div style={springImage} ref={refImage} className={css.footerImageWrapper}>
                    <img src={footerImage} alt="" className={css.footerImage} />
                </animated.div>
            </div>

        </section>
    );
}
 
export default Footer;