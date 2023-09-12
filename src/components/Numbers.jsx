import css from './numbers.module.css';
import useAnimationArray from './useAnimationArray';
import {animated} from '@react-spring/web'

const Numbers = ({color}) => {
    const achievements = [
        {name: 'project complete', times: 45, id: 1},
        {name: 'happy customer', times: 30, id: 2},
        {name: 'years experience', times: 16, id: 3},
        {name: 'awards achievement', times: 12, id: 4},
    ]

    const {refs, arraySprings} = useAnimationArray();

    return (
        <div className={css.connNumber}>
            {
                arraySprings.map((arraySpring, index)=>(
                    <animated.div className={css.numberwrapperParent} style={arraySpring} ref={refs[index]} key={arraySpring[index]}>
                        {
                            <div className={css.numberwrapper} key={achievements[index].id}>
                                <div style={color} className={css.number}>{achievements[index].times}</div>
                                <div></div>
                                <div>{achievements[index].name}</div>
                            </div>
                        }
                    </animated.div>
                ))
            }
        </div>
    );
}
 
export default Numbers;