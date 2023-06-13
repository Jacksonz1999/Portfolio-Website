import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi, <br /> I'm
            
            Jackson
            <br />
            web developer
          </h1>
          <h2>Frontend Developer</h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
      </div>
  )
}
export default Home
