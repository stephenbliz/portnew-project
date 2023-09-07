import {BsArrowUpRight} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import css from './botton.module.css';

const Botton = ({position, arrowWrapper}) => {
    return (
        <div style={position} className={css.container}>
            <div className={[css.c1, css.letter].join(' ')}>E</div>
            <div className={[css.c2, css.letter].join(' ')}>x</div>
            <div className={[css.c3, css.letter].join(' ')}>p</div>
            <div className={[css.c4, css.letter].join(' ')}>l</div>
            <div className={[css.c5, css.letter].join(' ')}>o</div>
            <div className={[css.c6, css.letter].join(' ')}>r</div>
            <div className={[css.c7, css.letter].join(' ')}>e</div>
            <div className={[css.c8, css.letter].join(' ')}>M</div>
            <div className={[css.c9, css.letter].join(' ')}>o</div>
            <div className={[css.c10, css.letter].join(' ')}>r</div>
            <div className={[css.c11, css.letter].join(' ')}>e</div>
            <div className={[css.c12, css.letter].join(' ')}>S</div>
            <div className={[css.c13, css.letter].join(' ')}>e</div>
            <div className={[css.c14, css.letter].join(' ')}>r</div>
            <div className={[css.c15, css.letter].join(' ')}>v</div>
            <div className={[css.c16, css.letter].join(' ')}>i</div>
            <div className={[css.c17, css.letter].join(' ')}>c</div>
            <div className={[css.c18, css.letter].join(' ')}>e</div>
            <div className={[css.c19, css.letter].join(' ')}>s</div>

            <div className={[css.point, css.p1].join(' ')}></div>
            <div className={[css.point, css.p2].join(' ')}></div>
            <div className={[css.point, css.p3].join(' ')}></div>
            <div className={[css.point, css.p4].join(' ')}></div>
            <div className={[css.point, css.p5].join(' ')}></div>
            <div className={[css.point, css.p7].join(' ')}></div>
            <div className={[css.point, css.p8].join(' ')}></div>
            <div className={[css.point, css.p9].join(' ')}></div>
            <div className={[css.point, css.p10].join(' ')}></div>


            <Link to='/service'>
            <div style={arrowWrapper} className={css.arrowWrapper}>
                <BsArrowUpRight className={css.arrow} />
            </div>
            </Link>
           
        </div>
    );
}
 
export default Botton;