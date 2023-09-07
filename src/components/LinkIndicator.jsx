import css from './linkindicator.module.css';

const LinkIndicator = ({text1, text2}) => {
    return (
        <section className={css.container}>
            <div className={css.linkHolder}>
                <div>--{text1}</div>
                <div>/</div>
                <div>{text2}--</div>
            </div>
            <div>{text2}</div>
        </section>
    );
}
 
export default LinkIndicator;