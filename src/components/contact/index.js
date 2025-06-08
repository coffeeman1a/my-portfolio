import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../animatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const userToken = process.env.REACT_APP_USER_TOKEN;

        useEffect(() => {
        // 1) создаём таймер и запоминаем его идентификатор
            const timerId = setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 3000);
    
        // 2) возвращаем именно функцию-очистку
            return () => {
                clearTimeout(timerId);
            };
        }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                serviceID,
                templateID,
                refForm.current,
                userToken
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again!')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}/>
                    </h1>
                    <p>
                        I am interested in freelance opportunities, 
                        so feel free to contact me if you have any projects or offers. 
                        Even if you just have a question or want to discuss something, 
                        don’t hesitate to reach out—I’m always open to new connections!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" name="subject" type="text" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>

                    </div>
                    
                </div>
                
            </div>
            <div className='loader-wrapper'>
                <Loader type="pacman" />
            </div>
        </>
    )
}

export default Contact