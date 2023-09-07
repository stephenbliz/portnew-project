import LinkIndicator from '../components/LinkIndicator';
import css from './contact.module.css';
import { useState } from 'react';
import image1 from '../assets/myPhoto.jpg';
import {MdArrowRightAlt} from 'react-icons/md';

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

    return (
        <section className={css.container}>
            <LinkIndicator text1={'Home'} text2={'Contact'}/>
            <section className={css.formWrapper}>
                <div className={css.descWrp}>
                    <h2>feel free to message with us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Iure assumenda mollitia eum. Odit illo optio tempora quia
                        perferendis perspiciatis ab veniam soluta, quam unde in! 
                        Labore, tempora voluptatum. Tenetur, dolore.
                    </p>
                    <div className={css.address}>
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
                    </div>
                    <div className={css.social}>
                        <div>Socials</div>
                        <div className={css.wrp}>
                            <div>Twitter</div>
                            <div>Dribble</div>
                            <div>Behance</div>
                        </div>
                    </div>
                </div>
                <div className={css.detailWrp}>
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
                </div>
            </section>

            <section className={css.livechatContainer}>
                <div className={css.livechatWrp}>
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
                </div>
            </section>

            <section className={css.faqContainer}>
                <div className={css.faqWrp}>
                    <div className={css.title}>FAQs.</div>
                    <div className={css.faq}>The Role of Prototyping in UX Design?</div>
                    <div className={css.faq}>The Importance User Testing in UX Design?</div>
                    <div className={css.faq}>Creating Persona for Targeted UX Design?</div>
                    <div className={css.faq}>The Evolution of UX/UI Design A Brief History?</div>
                </div>
                <div className={css.ansWrp}>
                    <div className={css.title}>Ans.</div>
                    <p>{paragraph}</p>
                    <p>{paragraph}</p>
                </div>
            </section>
        </section>
    );
}
 
export default Contact;