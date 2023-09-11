import LinkIndicator from '../components/LinkIndicator';
import css from './contact.module.css';
import { useState } from 'react';
import image1 from '../assets/myPhoto.jpg';
import {MdArrowRightAlt} from 'react-icons/md';
import useAnimate from './useAnimate';
import { animated } from '@react-spring/web';

const Contact = () => {
    const [feedback, setFeedback] = useState({
        email: '',
        name: '',
        subject: '',
        comment: ''
    })

    const handleChange = (e)=>{
        const names = e.target.name;
        const value = e.target.value;
        setFeedback({... feedback, [names]: value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(feedback);
        alert('check console for data');
    }

    const paragraph = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id dolore, corrupti assumenda earum itaque odio! Voluptates, illo quasi maxime aspernatur at debitis ipsa non nemo. Consequatur distinctio quod harum voluptas.';

    const {
        ref,
        reff,
        ref1,
        ref11,
        ref2,
        ref22,
        ref5,
        refImage,
        springImage,
        springAnimated,
        springAnimated1,
        springAnimated2,
        springAnimated5,
        springAnimatedd,
        springAnimated11,
        springAnimated22,
    } = useAnimate();

    return (
        <section className={css.container}>
            <LinkIndicator text1={'Home'} text2={'Contact'}/>
            <section className={css.formWrapper}>
                <div className={css.descWrp}>
                    <animated.h2 style={springAnimated} ref={ref}>feel free to message with us</animated.h2>
                    <animated.p style={springAnimated1} ref={ref1}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Iure assumenda mollitia eum. Odit illo optio tempora quia
                        perferendis perspiciatis ab veniam soluta, quam unde in! 
                        Labore, tempora voluptatum. Tenetur, dolore.
                    </animated.p>
                    <animated.div style={springAnimated2} ref={ref2} className={css.address}>
                        <div className={css.contact}>
                            <div>Contact Details</div>
                            <div>portnew@gmail.com</div>
                            <div>+09045893476</div>
                        </div>
                        <div className={css.contact}>
                            <div>Location</div>
                            <div>In New York, USA</div>
                            <div>Suvastu</div>
                        </div>
                    </animated.div>
                    <animated.div style={springAnimated22} ref={ref22} className={css.social}>
                        <div>Socials</div>
                        <div className={css.wrp}>
                            <div>Twitter</div>
                            <div>Dribble</div>
                            <div>Behance</div>
                        </div>
                    </animated.div>
                </div>
                <animated.div style={springImage} ref={refImage} className={css.detailWrp}>
                    <form className={css.form} onSubmit={(e)=> handleSubmit(e)}>
                        <div className={css.nameWrp}>
                            <div className={css.name}>
                                <label>Name <span>*</span></label>
                                <input 
                                    type="text" 
                                    value={feedback.name}
                                    placeholder='Name'
                                    required
                                    name='name'
                                    onChange={(e)=> handleChange(e)}
                                />
                            </div>
                            <div className={css.name}>
                                <label>Email <span>*</span></label>
                                <input 
                                    type="text" 
                                    value={feedback.email}
                                    placeholder='Email'
                                    required
                                    name='email'
                                    onChange={(e)=> handleChange(e)}
                                />
                            </div>
                        </div>
                        <div className={css.div}>
                            <label htmlFor="">Subject</label>
                            <input 
                                type="text" 
                                name='subject'
                                value={feedback.subject}
                                placeholder='How can We Help?'
                                onChange={(e)=> handleChange(e)}
                            />
                        </div>
                        <div className={css.div}>
                            <label>Comments/Questions <span>*</span></label>
                            <textarea 
                                name="comment"
                                type="text" 
                                required
                                value={feedback.comment}
                                onChange={(e)=> handleChange(e)} 
                            >
                            </textarea>
                        </div>
                        <button type='submit'>Send Message</button>
                    </form>
                </animated.div>
            </section>

            <section className={css.livechatContainer}>
                <animated.div style={springAnimatedd} ref={reff} className={css.livechatWrp}>
                    <div className={css.textWrp}>
                        <h2>Live Chat</h2>
                        <div>
                            Urgently want to reach us? 
                            <span>
                                We are available 24H, 7 days a week. (And i respond within 5 mins!)
                            </span>
                        </div>
                    </div>
                    <div className={css.imageSide}>
                        <div className={css.imageWrp}>
                            <img src={image1} alt="" className={css.img} />
                        </div>
                        <div>
                            Start a conversation <MdArrowRightAlt className={css.icon}/>
                        </div>
                    </div>
                </animated.div>
            </section>

            <section className={css.faqContainer}>
                <animated.div style={springAnimated11} ref={ref11} className={css.faqWrp}>
                    <div className={css.title}>FAQs.</div>
                    <div className={css.faq}>The Role of Prototyping in UX Design?</div>
                    <div className={css.faq}>The Importance User Testing in UX Design?</div>
                    <div className={css.faq}>Creating Persona for Targeted UX Design?</div>
                    <div className={css.faq}>The Evolution of UX/UI Design A Brief History?</div>
                </animated.div>
                <animated.div style={springAnimated5} ref={ref5} className={css.ansWrp}>
                    <div className={css.title}>Ans.</div>
                    <p>{paragraph}</p>
                    <p>{paragraph}</p>
                </animated.div>
            </section>
        </section>
    );
}
 
export default Contact;