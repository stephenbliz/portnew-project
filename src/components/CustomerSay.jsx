import css from './customersay.module.css';
import myPhoto from '../assets/myPhoto.jpg';
import Smallbotton from './Smallbotton';

const CustomerSay = ({padding}) => {
    return (
        <section style={padding} className={css.customersay}>
            <Smallbotton arrow={{transform: 'rotate(-135deg)'}} />
            <div className={css.testiWrapper}>
                <div className={css.headtitle}>Testimonial <span>our customer say</span></div>
                <p>
                    "Contrary to popular believe, Lorem ipsum is not simply 
                    random text. It has root in a piece of classical latin literature.
                    Making it over 2000 years old. Richard Mcclintock, a latin professor,
                    at Sydney college."
                </p>
                <div>
                    <img src={myPhoto} alt="" className={css.pphoto} />
                    
                </div>
                <span>Uzoma Ebuka</span>
            </div>
            <Smallbotton arrow={{transform: 'rotate(45deg)'}} />
        </section>
    );
}
 
export default CustomerSay;