import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import AnimatePage from '../../Components/animateB'
function About() {
  return (
    <div className='contact-page'>
      <AnimatePage>
      <div className='contact-section'>
        <div className='left-part'>
          <div className='back'>
            <Link to={'/'}><i className="fa-solid fa-backward"></i></Link>
          </div>
          <h4 className='heading-happiness'><span className='color'>Happ</span>iness</h4>
          <p className='paragraph-left-part'><span className='color'>Do you want to build something that</span> will make your life easier!!</p>  
          <p to={'/work'} className='paragraph-left-part-projects'><span className='color'>Check Out My</span> Projects First</p>

          {/* social media      */}
          <div className='scl-media-contact'>
            <a href='https://www.facebook.com/djigo.mat.1'><li className='facebook-contact'><i className="fab fa-facebook"></i></li></a>
            <a href='https://www.instagram.com/'><li className='instagram-contact'><i className="fab fa-instagram"></i></li></a>
            <a href='https://www.linkedin.com/in/jugurta-maouchi-840b08227/'><li className='linkedin-contact'><i className="fab fa-linkedin"></i></li></a>
            <a href='https://github.com/Jmaouchi'><li className='github-contact'><i className="fab fa-github"></i></li></a>
          </div>
        </div>

        <div className='right-part'>
        <Link to={'/work'}> <i className="fa-solid fa-circle-play"></i></Link>
          <h5 className='heading-lets-talk'>Let's Talk Now</h5>
          <h5 className='heading-add-review'>Add a review</h5>
          <div className='side-paragraph'>
            <p className='right-rotated-paragraph'>Noramohand</p>
            <div className='noramohand'></div>
          </div>
        </div>  
      </div>
      </AnimatePage>
    </div>   
  )
}

export default About