import css from './recentblogs.module.css';
import Smallbotton from './Smallbotton';
import {AiOutlineFieldTime} from 'react-icons/ai';

const RecentBlogs = ({image1, align, image2, image3, field1, field2, field3, title1, title2, title3}) => {
    const blogs =[
        {image: image1, field: field1, title: title1, id: 1},
        {image: image2, field: field2, title: title2, id: 2},
        {image: image3, field: field3, title: title3, id: 3},
    ]
    return (
        <div className={css.recentBlogContainer} style={align}>
            {blogs.map((blog)=>(
               <div className={css.blogWrapper} key={blog.id}>
                    {blog.image == '' ? 
                        <div className={css.blogImageWrapper} style={{display: 'none'}}>
                            <img src={blog.image} alt="" className={css.blogImage} />
                        </div> :

                        <div className={css.blogImageWrapper}>
                            <img src={blog.image} alt="" className={css.blogImage} />
                        </div>
                    }
                    <Smallbotton extraStyle={{position: 'absolute', bottom: '1.5rem', right: '1.5rem'}} link={'/blogdetails'} arrow={{transform: 'scale(.9)'}}/>
                    <div className={`blogDesWrapper ${css.blogDesWrapper}`}>
                        <div className={css.titleWrapper}>
                            <div>{blog.field}</div>
                            <div> <AiOutlineFieldTime /> 1 min read</div>
                        </div>
                        <h3>
                            {blog.title}
                        </h3>
                        <div>
                            <p>
                                Best ways to impress your web and
                                    mobile app customers to sell any
                            </p>
                
                        </div>
                    </div>
                </div> 
            ))}
        </div>
    );
}
 
export default RecentBlogs;