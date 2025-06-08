import { useEffect, useState } from 'react'
import AnimatedLetters from '../animatedLetters'
import './index.scss'
import Loader from 'react-loaders'
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

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

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                   Hi! I’m coffeeman1a, an ambitious and motivated IT specialist. 
                   I’m passionate about technology and always eager to learn new things in the world of software development and infrastructure. 
                </p>
                <p>
                    My background includes hands-on experience with Ops and DevOps. 
                    I’ve designed and deployed architectures, worked with Docker Swarm, and feel confident in managing modern infrastructure tasks.
                </p>
                <p>
                    Programming is a big part of my life — I code in Go and Python, building both backend services and automation tools. 
                    Lately, I’ve been expanding my skills into the frontend, diving into React and modern web development. 
                    I love seeing the full picture — from backend to UI — and always strive to grow as a developer.
                </p>
            </div>
        </div>
        <div className='loader-wrapper'>
            <Loader type="pacman" />
        </div>
        </>
    )
}

export default About