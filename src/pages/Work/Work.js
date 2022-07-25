import React from 'react'
import Nav from '../../Components/Navbar/Nav'
import './work.css'
import image from '../../images/me.png'

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
        <div className="portfolio-items-wrapper">
          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background one"></div>
            <div className="img-text-wrapper">
              <div className="logo-wrapper">
                <img src={image} alt=""></img>
              </div>

              <div className="subtitle">Coding bootcamp and learning management system.</div>
            </div>
          </div>

          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background two"></div>
            <div className="img-text-wrapper">
              <div className="logo-wrapper">
                <img src={image} alt=""></img>
              </div>

              <div className="subtitle">Keep track of what you learn every day.</div>
            </div>
          </div>

          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background three"></div>
            <div className="img-text-wrapper">
              <div className="logo-wrapper">
                <img src={image} alt=""></img>
              </div>

              <div className="subtitle">Coding bootcamp and learning management system.</div>
            </div>
          </div>

          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background four"></div>
            <div className="img-text-wrapper">
              <div className="logo-wrapper">
                <img src={image} alt=""></img>
              </div>

              <div className="subtitle">Coding bootcamp and learning management system.</div>
            </div>
          </div>

          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background five"></div>
            <div className="img-text-wrapper">
              <div className="logo-wrapper">
                <img src={image} alt=""></img>
              </div>

              <div className="subtitle">Coding bootcamp and learning management system.</div>
            </div>
          </div>

          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background six"></div>
            <div className="img-text-wrapper">
              <div className="logo-wrapper">
                <img src={image} alt=""></img>
              </div>

              <div className="subtitle">I built the Quip Ecommerce platform, named a Top 25 Invention by Time Magazine in 2016.</div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Work
