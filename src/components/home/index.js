import React, { useState, useEffect } from 'react';
import AnimatedLetters from '../animatedLetters';
import './index.scss';
import { Link } from 'react-router-dom';
import { SiDocker, SiGoland, SiLinux, SiPostgresql, SiPython, SiReact, SiRedis } from 'react-icons/si';
import Loader from 'react-loaders';


const stackIcons = [
    <SiRedis key="redis"/>,
    <SiGoland key="golang" />,
    <SiPostgresql key="postgresql" />,
    <SiLinux key="linux" />,
    <SiDocker key="docker" />,
    <SiPython key="python" />,
    <SiReact key="react" />
]

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['c','o','f','f','e','e','m','a','n','1','a']
    const jobArray = ['f','u','l','l','s','t','a','c','k',' ','d','e','v','e','l','o','p','e','r']

useEffect(() => {
  // 1) создаём таймер и запоминаем его идентификатор
    const timerId = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 6000);

  // 2) возвращаем именно функцию-очистку
    return () => {
        clearTimeout(timerId);
    };
}, []);

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                {' '}
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={26} />
                </h1>
                <h2> DevOps / Ops / Backend Developer / Frontend Developer / Gamer </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

            <div className="floating-stack">
                {stackIcons.map((icon, i) => (
                <div className="stack-icon" key={i} style={{ '--i': i }}>
                    {icon}
                </div>
                ))}
            </div>
        </div>
        <div className='loader-wrapper'>
            <Loader type="pacman" />
        </div>
        </>

    )
}

export default Home