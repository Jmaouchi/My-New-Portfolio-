import React from 'react'
import './style.css'
import Footer from '../Footer'
import myImage from '../../images/me-playing-2.jpg'
import myImageTwo from '../../images/black-white.png'
import AnimatePage from '../Animate'
import Typewriter from 'typewriter-effect'
// import ModelOV from './ModelOV'

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
          <p className='sign'>BeOnToP</p>
          <div className='content-about-me'>
            <img className='my-image' src={myImage} alt='my own img playing guitar'></img>
            <div className='content-context'>
              <h1 className='left-heading'>Hello,</h1>
              <h2 className='inside-heading'>I am Jugurta</h2>
        
              <p className='welcome-paragraph'>
              <Typewriter onInit={(typewriter) =>{
                  typewriter.typeString('Welcome to my protfolio. my life is nothing without coding!').pauseFor(1000).deleteAll().start()
                  typewriter.typeString('I would love to see some feedbacks from you').pauseFor(1000).deleteAll().start()
                  typewriter.typeString('Welcome to my protfolio. my life is nothing without coding!').start()
                }}/>
              </p>

              <div className='section-two-about-me'>
                <div className='about-me-content-one'>
                  <p className='about-me-paragraph'>I'm here to show you most of my recent work, some of them are projects that I've built on my own, and some others are projects that I've learned by watching videos and   tried to build something simular without watching the code.                    tired to do the same on my own.
                  well yea it was hard for me to build them but I'm proud of what I did.
                  please check them out bellow</p>
                </div>

                <div className='about-me-content-two'>
                  <img src={myImageTwo} alt='' className='my-image-two'></img>
                  <p className='small-image-p-tag'>Small Town dude looking for adventure in the great wide somewhere.</p>
                </div>
              </div>
            </div>
          </div> 
        </div>

      </section>
      </AnimatePage>
    
      <Footer></Footer>
    </div>

  )
}

export default Me