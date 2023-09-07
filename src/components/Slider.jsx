import css from './slider.module.css';


const Slider = ({text, icon}) => {
    return (
        <div className={css.sliderContainer}>
            <div className={[css.slider, css.slider1, css.sliders, css.slider1].join(' ')}>
                <div>{icon} {text}</div>
                <div>{icon} {text}</div>
                <div>{icon} {text}</div>
                <div>{icon} {text}</div>
            </div>
            <div className={[css.slider, css.sliders, css.slider2].join(' ')}>
                <div>{icon} {text}</div>
                <div>{icon} {text}</div>
                <div>{icon} {text}</div>
                <div>{icon} {text}</div>
            </div>
        </div>
    );
}
 
export default Slider;