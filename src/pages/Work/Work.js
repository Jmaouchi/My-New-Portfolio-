import React from 'react'
import Nav from '../../Components/Navbar/Nav'
import './work.css'

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
            <div className="portfolio-img-background one item"></div>
            <div className="img-text-wrapper">
              <div className="logo-wrapper">
                <i class="fa-brands fa-html5"></i>
                <i class="fa-brands fa-css3"></i>
                <i class="fa-brands fa-js"></i>
              </div>

              <div className="subtitle">
                <h2>Weather Dashboard</h2>
                <p>an app that i've build on my own 2022,
                  this app will give access to a daily and weekly wether status in your curent area
                </p>
              </div>
            </div>
          </div>

          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background two item"></div>
            <div className="img-text-wrapper">
              <div className="logo-wrapper">

              </div>

              <div className="subtitle">Keep track of what you learn every day.</div>
            </div>
          </div>

          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background three item"></div>
            <div className="img-text-wrapper">
              <div className="logo-wrapper">
               
              </div>

              <div className="subtitle">Coding bootcamp and learning management system.</div>
            </div>
          </div>

          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background four item"></div>
            <div className="img-text-wrapper">
              <div className="logo-wrapper">
                
              </div>

              <div className="subtitle">Coding bootcamp and learning management system.</div>
            </div>
          </div>

          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background five item"></div>
            <div className="img-text-wrapper">
              <div className="logo-wrapper">
                
              </div>

              <div className="subtitle">Coding bootcamp and learning management system.</div>
            </div>
          </div>

          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background six item"></div>
            <div className="img-text-wrapper">
              <div className="logo-wrapper">
                
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
