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

const BlogDetails = () => {
    const paragraph =  "Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fugaquisquam dolorem odio? Asperiores veritatis earum minima nobis Design sweet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci deserunt eos eligendi. Possimus facilis eveniet corrupti fuga quisquam dolorem odio? Asperiores veritatis earum minima nobis";


    return (
        <section className={css.container}>
            <h2>Design Thinking A Methodology for UX Design  </h2>
            <div className={css.dateWrp}>
                <div>January 22, 2023</div>
                <div>Admin</div>
            </div>
            <section className='portfoliodetWrapper'>
                <div className='portImaWrp'>
                    <img src={image2} alt="" className='portImage' />
                </div>
                <p>
                    {paragraph}
                </p>
                <p>
                    {paragraph}
                </p>
                <h2>What is Structuring the Site</h2>
                <p>
                    {paragraph}
                </p>
                <div className={css.citation}>
                    <div className={css.iconWrp}>
                       <BiSolidQuoteLeft />
                    </div>
                    <div className={css.textWrp}>
                        <h3>Albert Wick</h3>
                        <div></div>
                        <p>{paragraph}</p>
                    </div>
                </div>
                <p>
                    {paragraph}
                </p>
                <p>
                    {paragraph}
                </p>
                <div className='portImaWrp'>
                    <img src={image1} alt="" className='portImage1' />
                    <img src={image4} alt="" className='portImage1' />
                </div>
                <h2>How to Make Design System</h2>
                <p>
                    {paragraph}
                </p>
                <p>
                    {paragraph}
                </p>
                <h2>A Example of Good UX Design</h2>
                <p>
                    {paragraph}
                </p>
                <p>
                    {paragraph}
                </p>
                <div className='portImaWrp'>
                    <img src={image5} alt="" className='portImage' />
                </div>
                <h2>The Definition of User Experience</h2>
                <p>
                    {paragraph}
                </p>
                <p>
                    {paragraph}
                </p>
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