import css from './home.module.css';
import { Link } from 'react-router-dom';
import Botton from './Botton';
import Smallbotton from './Smallbotton';
import digiImage1 from '../assets/digiimage1.jpg';
import digiImage2 from '../assets/digiimage2.jpg';
import theme1 from '../assets/theme1.jpg';
import theme2 from '../assets/theme3.jpg';
import theme3 from '../assets/theme4.jpg';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';
import logo1 from '../assets/logo1.jpg';
import logo2 from '../assets/logo2.jpg';
import logo3 from '../assets/logo3.jpg';
import logo5 from '../assets/logo5.jpg';
import logo6 from '../assets/logo6.jpg';
import blogImage1 from '../assets/blogphoto1.jpg';
import blogImage2 from '../assets/blogphoto2.jpg';
import blogImage3 from '../assets/blogphoto3.jpg';
import {IoMdCheckmarkCircleOutline} from 'react-icons/io';
import {BsArrowUpRight} from 'react-icons/bs';
import {BiCodeBlock} from 'react-icons/bi';
import {FaAppleAlt} from 'react-icons/fa';
import {MdOutlineScreenSearchDesktop} from 'react-icons/md'
import Team from './Team';
import VideoBanner from './VideoBanner';
import RecentWorks from './RecentWorks';
import RecentBlogs from './RecentBlogs';
import CompleteSolu from './CompleteSolu';
import Numbers from './Numbers';
import CustomerSay from './CustomerSay';
import Achievement from './Achievement';
import {animated} from '@react-spring/web'
import useAnimate from './useAnimate';
// import {useInView} from 'react-intersection-observer'

const Home = () => {
    const image1 = {
        backgroundImage: `url(${theme1})`
      }
      const image2 = {
        backgroundImage: `url(${theme2})`
      }
      const image3 = {
        backgroundImage: `url(${theme3})`
      }

      const {
        ref,
        reff,
        ref1,
        ref11,
        ref2,
        ref22,
        ref3,
        ref33,
        ref4,
        ref44,
        ref5,
        ref55,
        ref6,
        ref7,
        ref8,
        refSpring,
        refSpring1,
        refImage,
        refImage1,
        refImage2,
        springImage,
        springImage1,
        springImage2,
        spring,
        spring1,
        springAnimated,
        springAnimated1,
        springAnimated2,
        springAnimated3,
        springAnimated4,
        springAnimated5,
        springAnimatedd,
        springAnimated11,
        springAnimated22,
        springAnimated33,
        springAnimated44,
        springAnimated55,
        springAnimated6,
        springAnimated7,
        springAnimated8,
    } = useAnimate();

    return (
        <>
        <section className={css.digi}>
            <animated.div style={springImage} ref={refImage} className={css.digiImageWrapper}>
                <img src={digiImage1} alt="Photo of a lady working with a computer" className={css.digiImage1} />
                <img src={digiImage2} alt="Photo of two ladies working with a computer" className={css.digiImage2} />
                <div className={[css.digiSnippet, css.interface].join(' ')}>
                    <IoMdCheckmarkCircleOutline /> <span>User-friendly interface design</span>
                </div>
                <div className={[css.digiSnippet, css.website].join(' ')}>
                    <IoMdCheckmarkCircleOutline /> <span>Website design and devalopment</span>
                </div>
                <div className={[css.digiSnippet, css.search].join(' ')}>
                    <IoMdCheckmarkCircleOutline /> <span>Search engine optimization (SEO)</span>
                </div>
            </animated.div>
            <div className={css.digiTextWrapper}>
                <animated.h1 style={spring} ref={refSpring} className={css.title}>
                    Digital <span>growth</span > transforming <span>buisnesses</span>
                </animated.h1>
                <div>
                    <animated.div className={css.circle} style={spring1} ref={refSpring1}>
                        <div><Link to='/portfolio'>view <span>project</span></Link></div>
                        <BsArrowUpRight />
                    </animated.div>
                    <animated.div className={css.noncircle} style={spring} ref={refSpring}>
                        <div></div>
                        <p>
                            Our digital agency specializes in helping
                            buisnesses of all sizes navigate the ever elvoving
                            digital landscape. From website design and development 
                            to digital marketing.
                        </p>
                    </animated.div>
                </div>
            </div>
        </section>

        <section className={css.cando}>
            <div className={css.candoDescWrapper}>
                <div className={css.desc}>
                    <animated.div style={springAnimated} ref={ref}>Services</animated.div>
                    <animated.h2 style={springAnimated1} ref={ref1}>
                        What can we do for your needs.
                    </animated.h2>
                    <animated.p style={springAnimated2} ref={ref2}>
                        Sugary sweet Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat dolore ex repudiandae, quis dolor provident voluptatibus!
                        Optio, quidem nesciunt.
                    </animated.p>
                </div>
                <div>
                    <Botton />
                </div>
            </div>

            <div className={css.serviceWrapper}>
                <animated.div style={springAnimated3} ref={ref3} className={css.productWrapper}>
                    <Smallbotton arrow={{transform: 'scale(.9)'}} extraStyle={{position : 'absolute', top: '3rem', right: '2rem'}} />
                    <div className={`product1 ${css.product}`}>
                        <div className={css.iconWr}>
                            <MdOutlineScreenSearchDesktop />
                        </div>
                        <div className={css.productDesc}>
                            <h3>
                                UX/UI Digital Product Design
                            </h3>
                            <p>
                                Design sweet Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Unde facilis blanditiis error maxime
                                quo magni rerum nisi alias eum.
                            </p>
                        </div>
                        <div className={css.empty}></div>
                    </div>
                </animated.div>
                
                <animated.div style={springAnimated4} ref={ref4} className={css.productWrapper}>
                    <Smallbotton arrow={{transform: 'scale(.9)'}} extraStyle={{position : 'absolute', top: '3rem', right: '2rem'}} />
                    <div className={`product1 ${css.product}`}>
                        <div className={css.iconWr}>
                            <FaAppleAlt />
                        </div>
                        <div className={css.productDesc}>
                            <h3>
                                Mobile & IOS Application Design
                            </h3>
                            <p>
                                Design sweet Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Unde facilis blanditiis error maxime
                                quo magni rerum nisi alias eum.
                            </p>
                        </div>
                        <div className={css.empty}></div>
                    </div>
                </animated.div>
                <animated.div style={springAnimated5} ref={ref5} className={css.productWrapper}>
                    <Smallbotton arrow={{transform: 'scale(.9)'}} extraStyle={{position : 'absolute', top: '3rem', right: '2rem'}} />
                    <div className={`product1 ${css.product}`}>
                        <div className={css.iconWr}>
                            <BiCodeBlock />
                        </div>
                        <div className={css.productDesc}>
                            <h3>
                                Web Application Design and Development
                            </h3>
                            <p>
                                Design sweet Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Unde facilis blanditiis error maxime
                                quo magni rerum nisi alias eum.
                            </p>
                        </div>
                        <div className={css.empty}></div>
                    </div>
                </animated.div>
            </div>
        </section>

        <CompleteSolu />

        <section className={css.recentwork}>
            <animated.div style={springAnimatedd} ref={reff} className={css.headtitle}>portfolio <animated.span style={springAnimated11} ref={ref11}>my recent work list</animated.span></animated.div>
            <RecentWorks 
                image1={image1}
                image2={image2}
                image3={image3}
                name1={'crypto exchange app'}
                name2={'redesign a ride sharing app'}
                name3={'payment gateway app'}
                category1={'web3 dev'}
                category2={'communication'}
                category3={'development'}
            />
        </section>

        <section className={css.connbrand}>
            <p className={css.sliderWrapper}>
                Connecting your brand to the digital world.  Elevating your online awareness.
            </p>
            <VideoBanner />
            <Numbers />
        </section>

        <CustomerSay />

        <section className={css.profteam}>
            <animated.div style={springAnimated33} ref={ref33} className={css.headtitle}>
                team <animated.span style={springAnimated44} ref={ref44}>our professional team</animated.span>
            </animated.div>
            <Team 
                image1={team1} image2={team2} image3={team3} image4={team4}
                name1={'Albert Wick'} name2={'Andrew Nikos'} name3={'katy Wilson'} name4={'Aya Nikola'}
                job1={'UX/UI Designer'} job2={'IOS Developer'} job3={'Web Developer'} job4={'Digital Marketer'}
            />
            <animated.div style={springAnimated6} ref={ref6} className={css.clientnumber}>
                150+ clients we are building strong relationship
            </animated.div>

            <animated.div style={springAnimated55} ref={ref55} className={css.awardWrapper}>
                <div className={css.awards}>
                    <img src={logo1} alt="" className={css.award} />
                </div>
                <div className={css.awards}>
                    <img src={logo2} alt="" className={css.award} />
                </div>
                <div className={css.awards}>
                    <img src={logo3} alt="" className={css.award} />
                </div>
                <div className={css.awards}>
                    <img src={logo5} alt="" className={css.award} />
                </div>
                <div className={css.awards}>
                    <img src={logo6} alt="" className={css.award} />
                </div>
            </animated.div>
        </section>
        
        <Achievement />

        <section className={css.recentBlogs}>
            <animated.div style={springAnimated7} ref={ref7} className={css.headtitle}>
                blog <animated.span style={springAnimated8} ref={ref8}>our recent blogs</animated.span>
            </animated.div>
            <RecentBlogs 
                image1={blogImage1} image2={blogImage2} image3={blogImage3}
                field1={'development'} field2={'UX design'} field3={'work process'}
                title1={'10 Tips for Creating an Intuitive User Interface'}
                title2={'How to Conduct User Research for Your Design Project'}
                title3={'The Importance of User Experience in Web Design'}
            />       
        </section>
        </>
    );
}
 
export default Home;