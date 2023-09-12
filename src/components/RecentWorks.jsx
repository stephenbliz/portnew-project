import {Link} from 'react-router-dom'
import {BsArrowUpRight} from 'react-icons/bs';
import css from './recentworks.module.css';
import { animated} from '@react-spring/web'
import useAnimationArray3 from './useAnimationArray3';

const RecentWorks = ({image1, image2, image3, name1, name2, name3, category1, category2, category3}) => {

    const works = [
        {image: image1, name: name1, category: category1, id: 1},
        {image: image2, name: name2, category: category2, id: 2},
        {image: image3, name: name3, category: category3, id: 3}
    ]
    
    const {refs, arraySprings} = useAnimationArray3()
    

    return (
            <div className={css.recentImageContainer}>
                {
                    arraySprings.map((arraySpring, index)=>(
                        <animated.div className={css.recentImageWrapperParent} style={arraySpring} key={arraySpring[index]} ref={refs[index]}>
                            {
                                <div className={css.recentImageWrapper} key={works[index].id}>
                                <div className={css.recentImage} style={works[index].image}>
                                    <div>Award winning project</div>
                                    <Link to='/portfoliodetails'>
                                    <div>
                                        <BsArrowUpRight className={css.icon}/>
                                    </div>
                                    </Link>
                                </div>
                                <p>
                                    {works[index].name} <span>{works[index].category}</span>
                                </p>
                            </div>
                            }
                        </animated.div>
                    ))
                }
            </div>
    );
}
 
export default RecentWorks;