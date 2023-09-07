import css from './completesolu.module.css';
import footerImage from '../assets/footerIm.jpg';
import designImage from '../assets/designjob.jpg';

const CompleteSolu = ({display}) => {
    return (
        <section style={display} className={css.compsoluton}>
            <div className={css.solutionText}>
                <h2>
                    We are complete solution for every idea 
                </h2>
                <p>
                    Design sweet Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Ipsam iusto fugiat dolores quaerat
                    provident consequuntur unde facere nobis. Sapiente 
                    temporibus qui distinctio numquam eveniet.
                </p>
                <p>
                    Design sweet Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Iure deserunt, repellendus error ipsam
                    veniam culpa odit assumenda eveniet facere.
                </p>
                <div></div>
            </div>
            <div className={css.solutionImage}>
                <img src={footerImage} alt="A woman working with a computer" className={css.image1} />
                <img src={designImage} alt="" className={css.image2} />
            </div>
        </section>
    );
}
 
export default CompleteSolu;