import { Link } from 'react-router-dom';
import css from './errorpage.module.css';
import {BsArrowUpRight} from 'react-icons/bs';

const ErrorPage = () => {
    return (
        <section className={css.container}>
            <div className={css.num}>404</div>
            <div>Sorry! The page isn't found here</div>
            <p>
                Our error is a HTTP status code indicating that the requested
                resources could not be found on the server. It is commonly displayed as 
                a webpage with the message. This can occur when a user attempts to access 
                a URL that no longer exist or has been removed, or when a URL is typed incorrectly.
            </p>
            <Link to='/'><div>Back to home <BsArrowUpRight className={css.icon}/></div></Link>
        </section>
    );
}
 
export default ErrorPage;