import LinkIndicator from './LinkIndicator';
import css from './teamdetails.module.css';
import {BsArrowUpRight} from 'react-icons/bs';
import team1 from '../assets/team1.jpg';
import Skill from './Skill';

const TeamDetails = () => {
    return (
        <section className={css.container}>
            <LinkIndicator text1={'Home'} text2={'Team'} />
            <section className={css.teamWrapper}>
                <div className={css.teamImageWrp}>
                    <img src={team1} alt="" className={css.teamImage} />
                </div>
                <div className={css.teamDescWrp}>
                    <h2>Aya Nikola <span>UX/UI Designer</span> </h2>
                    <div></div>
                    <p>
                        Design sweet Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus similique quos sint tenetur blanditiis in quidem dolores aliquam
                        repellat vel nobis animi, fugiat deleniti praesentium, consequatur vitae velit.
                        Eos, laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dolorum atque vero ipsum veritatis quo non nam obcaecati ratione totam provident,
                        quasi porro ea alias ipsam repellendus, odio, saepe iste error?
                    </p>
                    <div className={css.contactWrp}>
                        <div className={css.contact}>
                            <div>contact details</div>
                            <div className={css.email}>uzomaebuka11@gmail.com</div>
                            <div>+09010000000</div>
                        </div>
                        <div className={css.contact}>
                            <div>address</div>
                            <div>458 old york court huntington</div>
                            <div>station NY 11746</div>
                        </div>
                    </div>
                    <div className={css.socialWrp}>
                        <div>social</div>
                        <div className={css.mediaWrp}>
                            <div className={css.media}>facebook</div>
                            <div className={css.media}>twitter</div>
                            <div className={css.media}>linkedIn <BsArrowUpRight /> </div>
                        </div>
                    </div>
                </div>
            </section>
            <Skill padding={{paddingTop: '0'}}/>
        </section>
    );
}
 
export default TeamDetails;