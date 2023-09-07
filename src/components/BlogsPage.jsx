import LinkIndicator from "./LinkIndicator";
import blogImage1 from '../assets/blogphoto1.jpg';
import blogImage2 from '../assets/blogphoto2.jpg';
import blogImage3 from '../assets/blogphoto3.jpg';
import blogImage4 from '../assets/typing1.jpg';
import blogImage5 from '../assets/typing2.jpg';
import blogImage6 from '../assets/typing3.jpg';
import RecentBlogs from "./RecentBlogs";
import css from './blogspage.module.css';
import { NavLink } from "react-router-dom";

const Blogs = () => {
    return (
        <section className={css.container}>
            <LinkIndicator text1={'Home'} text2={'Blog'}/>
            <nav className={css.navList}>
                <NavLink >All</NavLink>
                <NavLink>UI Design</NavLink>
                <NavLink>UX Design</NavLink>
                <NavLink>Game Design</NavLink>
                <NavLink>Branding</NavLink>
                <NavLink>Illustration</NavLink>
            </nav>
            <nav className={css.navList}>
                <NavLink>2022</NavLink>
                <NavLink>2021</NavLink>
                <NavLink>2020</NavLink>
            </nav>
            <section className={css.blogWrp}>
                <RecentBlogs 
                    align={{alignItems: 'center'}}
                    image1={''} image2={blogImage1} image3={''}
                    field1={'UI design'} field2={'UI design'} field3={'UX design'}
                    title1={'The Impact of Color in UI/UX Design'}
                    title2={'How to Conduct User Research for Your Design Project'}
                    title3={'Designing for Accessibility Best Practice for Inclusive UX'}
                />
                <RecentBlogs
                    align={{alignItems: 'center'}} 
                    image1={blogImage2} image2={blogImage3} image3={blogImage4}
                    field1={'UX design'} field2={'UX design'} field3={'work process'}
                    title1={'Creating Empathy Map for Better Users Understanding'}
                    title2={'Designing for Mobile Best Practices and Considerations'}
                    title3={'The Benefits of A/B Testing in U/X Design'}
                />
                <RecentBlogs 
                    align={{alignItems: 'center'}}
                    image1={blogImage5} image2={blogImage6} image3={''}
                    field1={'UX design'} field2={'UX design'} field3={'U/X design'}
                    title1={'Creating Empathy Map for Better Users Understanding'}
                    title2={'Designing for Mobile Best Practices and Considerations'}
                    title3={'The Benefits of A/B Testing in U/X Design'}
                />
            </section>
            <div className={css.circleButton}>
                Load More
            </div>
        </section>
    );
}
 
export default Blogs;