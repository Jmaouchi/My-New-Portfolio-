import React from 'react'
import './style.css'
import Footer from '../Footer'
import myImage from '../../images/me-playing-2.jpg'
import myImageTwo from '../../images/black-white.png'
import AnimatePage from '../Animate'
import Typewriter from 'typewriter-effect'

function Me() {
  return (
    <div>
      <AnimatePage>
      <section className='format-section'>
        <div className='dots'>
          <div className='dots-display'>
            <div className='dot red-dot'></div>
            <div className='dot yellow-dot'></div>
            <div className='dot green-dot'></div>
          </div>
          <div className='content-about-me'>
            <img className='my-image' src={myImage} alt='my own img playing guitar'></img>
            <div className='content-context'>
              <h1 className='left-heading'><span className='span'>He</span>llo,</h1>
              <h2 className='inside-heading'>I am Jugurta</h2>
              <p className='welcome-paragraph'>
              <Typewriter onInit={(typewriter) =>{
                  typewriter.typeString('Welcome to my protfolio.').pauseFor(1000).deleteAll().start()
                  typewriter.typeString('Ready to get into this industry').pauseFor(1000).deleteAll().start()
                  typewriter.typeString('Please take your time to explore what ive been working on').pauseFor(1000).deleteAll().start()
                  typewriter.typeString('I would love to see some feedbacks from you.').start()
                }}/>
              </p>
              <div className='section-two-about-me'>
                <div className='about-me-content-one'>
                  <p className='about-me-paragraph'>I am a Fullstack developer! I started coding since i moved to the USA 2019. Started with 
                  some basic HTML and CSS, then moved to JavaScript. I really enjoy my time when i code, and i would love 
                  to be part of this industry soon, i can consider myself a fast learner and hungry to learn new 
                  technologies. I do have a biology bachelors degree. i also can be a translator since i speak 5 languages, 
                  (English, French, Arabic, Berber and a little Spanish). My hobbies are soccer and boxing
                  </p>
                </div>

                <div className='about-me-content-two'>
                  <img src={myImageTwo} alt='' className='my-image-two'></img>
                  <p className='small-image-p-tag'>Small Town dude looking for adventure in the great wide somewhere.</p>
                </div>
              </div>
            </div>
          </div>
          <p className='sign'>BeOnToP</p> 
        </div>
      </section>
      </AnimatePage>
    
      <Footer></Footer>
    </div>

  )
}

export default Me