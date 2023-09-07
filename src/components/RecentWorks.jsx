import {Link} from 'react-router-dom'
import {BsArrowUpRight} from 'react-icons/bs';
import css from './recentworks.module.css';

const RecentWorks = ({image1, image2, image3, name1, name2, name3, category1, category2, category3}) => {

    const works = [
        {image: image1, name: name1, category: category1, id: 1},
        {image: image2, name: name2, category: category2, id: 2},
        {image: image3, name: name3, category: category3, id: 3}
    ]

    return (
            <div className={css.recentImageContainer}>
                {works.map((work)=>(
                    <div className={css.recentImageWrapper} key={work.id}>
                    <div className={css.recentImage} style={work.image}>
                        <div>Award winning project</div>
                        <Link to='/portfoliodetails'>
                        <div>
                            <BsArrowUpRight className={css.icon}/>
                        </div>
                        </Link>
                    </div>
                    <p>
                        {work.name} <span>{work.category}</span>
                    </p>
                </div>
                ))}
            </div>
    );
}
 
export default RecentWorks;