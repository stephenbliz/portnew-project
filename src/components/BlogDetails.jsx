import css from './blogdetails.module.css';
import {BiSolidQuoteLeft} from 'react-icons/bi';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import {BiLogoLinkedin} from 'react-icons/bi';
import image1 from '../assets/service11.jpg';
import image2 from '../assets/service111.jpg';
import image3 from '../assets/service1111.jpg';
import image4 from '../assets/service22.jpg';
import image5 from '../assets/service222.jpg';
import image6 from '../assets/service2222.jpg';
import RecentBlogs from './RecentBlogs';
import useAnimate from './useAnimate';
import { animated } from '@react-spring/web';

const BlogDetails = () => {
    const paragraph =  "Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fugaquisquam dolorem odio? Asperiores veritatis earum minima nobis Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fuga quisquam dolorem odio? Asperiores veritatis earum minima nobis";

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
        <section className={css.container}>
            <animated.h2 style={spring1} ref={refSpring1}>Design Thinking A Methodology for UX Design  </animated.h2>
            <animated.div style={spring} ref={refSpring} className={css.dateWrp}>
                <div>January 22, 2023</div>
                <div>Admin</div>
            </animated.div>
            <section className='portfoliodetWrapper'>
                <animated.div style={springImage} ref={refImage} className='portImaWrp'>
                    <img src={image2} alt="" className='portImage' />
                </animated.div>
                <animated.p style={springAnimated} ref={ref}>
                    {paragraph}
                </animated.p>
                <animated.p style={springAnimated1} ref={ref1}>
                    {paragraph}
                </animated.p>
                <animated.h2 style={springAnimated3} ref={ref3}>What is Structuring the Site</animated.h2>
                <animated.p style={springAnimated4} ref={ref4}>
                    {paragraph}
                </animated.p>
                <animated.div style={springAnimated5} ref={ref5} className={css.citation}>
                    <div className={css.iconWrp}>
                       <BiSolidQuoteLeft />
                    </div>
                    <div className={css.textWrp}>
                        <h3>Albert Wick</h3>
                        <div></div>
                        <p>{paragraph}</p>
                    </div>
                </animated.div>
                <animated.p style={springAnimated2} ref={ref2}>
                    {paragraph}
                </animated.p>
                <animated.p style={springAnimated2} ref={ref2}>
                    {paragraph}
                </animated.p>
                <animated.div style={springImage1} ref={refImage1} className='portImaWrp'>
                    <img src={image1} alt="" className='portImage1' />
                    <img src={image4} alt="" className='portImage1' />
                </animated.div>
                <animated.h2 style={springAnimatedd} ref={reff}>How to Make Design System</animated.h2>
                <animated.p style={springAnimated11} ref={ref11}>
                    {paragraph}
                </animated.p>
                <animated.p style={springAnimated22} ref={ref22}>
                    {paragraph}
                </animated.p>
                <animated.h2 style={springAnimated33} ref={ref33}>A Example of Good UX Design</animated.h2>
                <animated.p style={springAnimated44} ref={ref44}>
                    {paragraph}
                </animated.p>
                <animated.p style={springAnimated55} ref={ref55}>
                    {paragraph}
                </animated.p>
                <animated.div style={springImage2} ref={refImage2} className='portImaWrp'>
                    <img src={image5} alt="" className='portImage' />
                </animated.div>
                <animated.h2 style={springAnimated6} ref={ref6}>The Definition of User Experience</animated.h2>
                <animated.p style={springAnimated7} ref={ref7}>
                    {paragraph}
                </animated.p>
                <animated.p style={springAnimated8} ref={ref8}>
                    {paragraph}
                </animated.p>
                <div className={css.line}></div>
                <div className={css.socialWrp}>
                    <div>Social share:</div>
                    <div><FaFacebookF /></div>
                    <div><AiOutlineTwitter /></div>
                    <div><BiLogoLinkedin /></div>
                </div>
            </section>
            <section className={css.similarBlogWrp}>
                <div className="headtitle">
                    blog <span>similar blog</span>
                </div>
                <RecentBlogs 
                    image1={image3} image2={image6} image3={image5}
                    field1={'development'} field2={'U/X design'} field3={'work process'}
                    title1={'10 Tips for Creating an Intuitive User Interface'}
                    title2={'How to Conduct User Research for Your Design Project'}
                    title3={'The Importance of User Experience in Web Design'}
                />
            </section>
        </section> 
    );
}
 
export default BlogDetails;