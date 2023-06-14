import React, { useEffect, useState } from 'react'
import './index.scss'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [" ",'J', 'a', 'c', 'k', 's', 'o', 'n']
  const jobArray = [
    'F',
    'r',
    'o',
    'n',
    't',
    '-',
    'E',
    'n',
    'd',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    "."
  ]
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass}`}>i,</span>
            <br />
            <span className={`${letterClass}`}>I</span>
            <span className={`${letterClass}`}>'m</span> 
          <AnimatedLetters letterClass ={letterClass} strArray={nameArray} idx={15} />
          <br />
          <AnimatedLetters letterClass ={letterClass} strArray={jobArray} idx={22} />
        </h1>
        <h2>🖥️Full Stack Developer HTML | CSS | Javascript | Typescript | React | Node.js | MongoDB | Software Developer </h2>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
      <Logo/>
    </div>
  )
}
export default Home
