import css from './numbers.module.css';

const Numbers = ({color}) => {
    const achievements = [
        {name: 'project complete', times: 45, id: 1},
        {name: 'happy customer', times: 30, id: 2},
        {name: 'years experience', times: 16, id: 3},
        {name: 'awards achievement', times: 12, id: 4},
    ]
    return (
        <div className={css.connNumber}>
            {achievements.map((achievement)=>(
                <div className={css.numberwrapper} key={achievement.id}>
                    <div style={color} className={css.number}>{achievement.times}</div>
                    <div></div>
                    <div>{achievement.name}</div>
                </div>
            ))}
        </div>
    );
}
 
export default Numbers;