import {BsArrowUpRight} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Smallbotton = ({extraStyle, arrow, link}) => {

    return (
        <Link to={link}>
            <div style={extraStyle} className='button'>
                <BsArrowUpRight style={arrow} />
            </div>
        </Link>
    );
}
 
export default Smallbotton;
