import {AiOutlineWechat} from 'react-icons/ai'
import {useRef} from 'react'
import {HiOutlineMenu} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import css from './header.module.css'
import { NavLink, Link } from 'react-router-dom'

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
    return ( 
        <>
            <section ref={mobileheader} className={[css.miniheader, css.mobileview].join(' ')}>
                <div className={css.logo}>
                <Link to='/'><div>Port<span>new.</span></div></Link>
                </div>
                <HiOutlineMenu className={css.menuicon} onClick={handleMenuOpen}/>
            </section>
            <header ref={desktopheader} className={css.container}>
                <div className={css.logo}>
                    <Link to='/'><div>Port<span>new.</span></div></Link>
                    <AiOutlineClose className={css.menuclose} onClick={handleMenuClose}/>
                </div>
                <nav className={css.nav}>
                    <div><NavLink to='/' onClick={handleMenuClose}>Home</NavLink></div>
                    <div className={css.dropdown}>
                        Service<span>+</span>

                        <ul className={css.dropdownContent}>
                            <li><NavLink to='service' onClick={handleMenuClose}>Services</NavLink></li>
                            <li><NavLink to='servicedetails' onClick={handleMenuClose}>Services Details</NavLink></li>
                        </ul>
                    </div>
                    <div className={css.dropdown}>
                        Portfolio<span>+</span>

                        <ul className={css.dropdownContent}>
                            <li><NavLink to='portfolio' onClick={handleMenuClose}>Portfolio</NavLink></li>
                            <li><NavLink to='portfoliodetails' onClick={handleMenuClose}>Portfolio Details</NavLink></li>
                        </ul>
                    </div>
                    <div><NavLink to='about' onClick={handleMenuClose}>About</NavLink></div>
                    <div className={css.dropdown}>
                        Pages<span>+</span>

                        <ul className={css.dropdownContent}>
                            <li><NavLink to='team' onClick={handleMenuClose}>Team</NavLink></li>
                            <li><NavLink to='teamdetails' onClick={handleMenuClose}>Team Details</NavLink></li>
                            <li><NavLink to='blog' onClick={handleMenuClose}>Blog</NavLink></li>
                            <li><NavLink to='blogdetails' onClick={handleMenuClose}>Blog Details</NavLink></li>
                            <li><NavLink to='404' onClick={handleMenuClose}>404</NavLink></li>
                        </ul>
                    </div>
                    <div><NavLink to='contact' onClick={handleMenuClose}>Contact</NavLink></div>
                </nav>
                    <div className={css.chat}>
                        <div className={css.iconWrapper}>
                            <AiOutlineWechat className={css.icon}/>
                        </div>
                        <div><NavLink to='/contact' onClick={handleMenuClose}>Let's chat</NavLink></div>
                    </div>
            </header>
            
        </>
    );
}
 
export default Header;