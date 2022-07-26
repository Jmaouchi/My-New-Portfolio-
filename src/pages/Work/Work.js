import React from 'react'
import Nav from '../../Components/Navbar/Nav'
import './work.css'
import Typewriter from 'typewriter-effect'
import Carousel from '../../Components/Carousel';
import { myWorkdata } from './workData';

function Work() {
  return (
    <div>
      <Nav />
      <div className='wrapper'>
        <section className='hero-image'>
            <div className='hero-section'>
              <div className='left-side side'>
              </div>
            </div>
        </section>
        <div className='hero-content-two'>
        </div>

        <div className='work-area'>
          <div className='work-area-content'>
            <h2><span>My</span>Work</h2>
              <div className='typewrite'>
                <Typewriter className="doit" onInit={(typewriter) =>{
                  typewriter.typeString('Please take your time and checkout my hard work').pauseFor(1000).deleteAll().start()
                  typewriter.typeString('I apreciate it').pauseFor(1000).start()
                }}/>
              </div>
          </div>
        </div>

        {/* wrapper start */}
        <div className="portfolio-items-wrapper">
          {/* one */}
          {myWorkdata.map((item) => (
          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background item"><img className='portfolio-img-background item' src={item.image} alt=""></img></div>
            <div className="img-text-wrapper">
              <div className="logo-wrapper">
                {item.techs.map((tech) => (
                  <i className={tech}></i>
                ))}
              </div>
              <div className="subtitle">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          </div> 
          ))} 
        </div>
        <Carousel />
      </div>    
    </div>
  )
}

export default Work
