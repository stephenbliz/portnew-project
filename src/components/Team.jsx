import css from './team.module.css';
import {Link} from 'react-router-dom';

const Team = ({image1, image2, image3, image4,
               name1, name2,  name3, name4,
               job1, job2, job3, job4}) => {
    const teams = [
        {image: image1, social: ['Twitter', 'Dribble', 'Behance'], name: name1, job: job1, id: 1},
        {image: image2, social: ['Twitter', 'Dribble', 'Behance'], name: name2, job: job2, id: 2},
        {image: image3, social: ['Twitter', 'Dribble', 'Behance'], name: name3, job: job3, id: 3},
        {image: image4, social: ['Twitter', 'Dribble', 'Behance'], name: name4, job: job4, id: 4}
        
    ]

    return (
        <div className={css.teamcontainer}>
            {teams.map((team)=>(
                <div className={css.team} key={team.id}>
                    <div className={css.teamImageWrapper}>
                        <img src={team.image} alt="" className={css.teamImage} />
                        <div className={css.hoverContent}>
                            <div className={css.mediaWrapper}>
                                <Link to='twitter'><div>{team.social[0]}</div></Link>
                                <Link to='dribble'><div>{team.social[1]}</div></Link>
                                <Link to='behance'><div>{team.social[2]}</div></Link>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div className={css.infoWrapper}>
                        <Link to='/teamdetails'><div>{team.name}</div></Link>
                        <div>{team.job}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default Team;