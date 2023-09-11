import {AiOutlineWechat} from 'react-icons/ai'
import {useRef} from 'react'
import {HiOutlineMenu} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import css from './header.module.css'
import { NavLink, Link } from 'react-router-dom'
import {animated, useSpring} from '@react-spring/web'
import { useInView } from 'react-intersection-observer'

const Header = () => {
    const mobileheader = useRef();
    const desktopheader = useRef();

    const handleMenuOpen = ()=>{
            mobileheader.current.style.display= 'none';
            desktopheader.current.style.display= 'flex';
    }

    const handleMenuClose = ()=>{
        if(screen.availWidth < 482){
            mobileheader.current.style.display= 'flex';
            desktopheader.current.style.display= 'none';
        }else{
            mobileheader.current.style.display= 'none';
            desktopheader.current.style.display= 'flex';
        }
            
    }

    const [refHeader, inViewHeader] = useInView({
        triggerOnce: true,
        threshold: 0
    })

    const [refHeader2, inViewHeader2] = useInView({
        triggerOnce: true,
        threshold: 0
    })

    const springHeader = useSpring({
        from: {opacity: inViewHeader && '0', translateY: inViewHeader && '50px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000},
        delay: 300
    })

    const springHeader2 = useSpring({
        from: {opacity: inViewHeader2 && '0', translateY: inViewHeader2 && '30px'},
        to: {opacity: '1', translateY: '0'},
        config: {duration: 1000},
    })

    return ( 
        <>
            <section ref={mobileheader} className={[css.miniheader, css.mobileview].join(' ')}>
                <div className={css.logo}>
                <Link to='/'><div>Port<span>new.</span></div></Link>
                </div>
                <HiOutlineMenu className={css.menuicon} onClick={handleMenuOpen}/>
            </section>
            <header ref={desktopheader} className={css.container}>
                <animated.div style={springHeader2} ref={refHeader2} className={css.logo}>
                    <Link to='/'><div>Port<span>new.</span></div></Link>
                    <AiOutlineClose className={css.menuclose} onClick={handleMenuClose}/>
                </animated.div>
                <nav className={css.nav}>
                    <animated.div style={springHeader} ref={refHeader}><NavLink to='/' onClick={handleMenuClose}>Home</NavLink></animated.div>
                    <animated.div style={springHeader} ref={refHeader} className={css.dropdown}>
                        Service<span>+</span>

                        <ul className={css.dropdownContent}>
                            <li><NavLink to='service' onClick={handleMenuClose}>Services</NavLink></li>
                            <li><NavLink to='servicedetails' onClick={handleMenuClose}>Services Details</NavLink></li>
                        </ul>
                    </animated.div>
                    <animated.div style={springHeader} ref={refHeader} className={css.dropdown}>
                        Portfolio<span>+</span>

                        <ul className={css.dropdownContent}>
                            <li><NavLink to='portfolio' onClick={handleMenuClose}>Portfolio</NavLink></li>
                            <li><NavLink to='portfoliodetails' onClick={handleMenuClose}>Portfolio Details</NavLink></li>
                        </ul>
                    </animated.div>
                    <animated.div style={springHeader} ref={refHeader}><NavLink to='about' onClick={handleMenuClose}>About</NavLink></animated.div>
                    <animated.div style={springHeader} ref={refHeader} className={css.dropdown}>
                        Pages<span>+</span>

                        <ul className={css.dropdownContent}>
                            <li><NavLink to='team' onClick={handleMenuClose}>Team</NavLink></li>
                            <li><NavLink to='teamdetails' onClick={handleMenuClose}>Team Details</NavLink></li>
                            <li><NavLink to='blog' onClick={handleMenuClose}>Blog</NavLink></li>
                            <li><NavLink to='blogdetails' onClick={handleMenuClose}>Blog Details</NavLink></li>
                            <li><NavLink to='404' onClick={handleMenuClose}>404</NavLink></li>
                        </ul>
                    </animated.div>
                    <animated.div style={springHeader} ref={refHeader}><NavLink to='contact' onClick={handleMenuClose}>Contact</NavLink></animated.div>
                </nav>
                    <animated.div style={springHeader2} ref={refHeader2} className={css.chat}>
                        <div className={css.iconWrapper}>
                            <AiOutlineWechat className={css.icon}/>
                        </div>
                        <div><NavLink to='/contact' onClick={handleMenuClose}>Let's chat</NavLink></div>
                    </animated.div>
            </header>
            
        </>
    );
}
 
export default Header;