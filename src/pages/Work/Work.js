import React from 'react'
import Nav from '../../Components/Navbar/Nav'
import './work.css'
import Typewriter from 'typewriter-effect'

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

          {/* Two */}
          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background two item"></div>
            <div className="img-text-wrapper">
              <div className="logo-wrapper">
                  <i class="fa-solid fa-database"></i>
                  <i class="fa-brands fa-react"></i>
              </div>
              <div className="subtitle">
                <h2>Weather Dashboard</h2>
                <p>an app that i've build on my own 2022,
                  this app will give access to a daily and weekly wether status in your curent area
                </p>
              </div>
            </div>
          </div>
          
          {/* three */}
          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background three item"></div>
            <div className="img-text-wrapper">
              <div className="logo-wrapper">
                <i class="fa-brands fa-html5"></i>
                <i class="fa-brands fa-css3"></i>
                <i class="fa-brands fa-js"></i>
                <i class="fa-brands fa-bootstrap"></i>
              </div>

              <div className="subtitle">
                <h2>Weather Dashboard</h2>
                <p>an app that i've build on my own 2022,
                  this app will give access to a daily and weekly wether status in your curent area
                </p>
              </div>
            </div>
          </div>

          {/* four */}
          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background four item"></div>
            <div className="img-text-wrapper">
              <div className="logo-wrapper">
                  <i class="fa-solid fa-database"></i>
                  <i class="fa-brands fa-react"></i>
              </div>

              <div className="subtitle">
                <h2>Motor Bike Labs</h2>
                <p>an app that i've build on my own 2022,
                  this app will give access to many motorcycles and different brans, you can see infos of every motorcycle.
                </p>
              </div>
            </div>
          </div>
          
          {/* five */}
          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background five item"></div>
            <div className="img-text-wrapper">
              <div className="logo-wrapper">
                <i class="fa-solid fa-download"></i>
              </div>

              <div className="subtitle">
                <h2>Motor Bike Labs</h2>
                <p>A PWA application that ive built,
                  this app will give access to track your expenses, you also can download this app in your device.
                </p>
              </div>
            </div>
          </div>

          {/* six */}
          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background six item"></div>
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

          {/* seven */}
          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background seven item"></div>
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

          {/* seven */}
          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background eight item"></div>
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

          {/* seven */}
          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background nine item"></div>
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
          
          {/* ten */}
          <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background ten item"></div>
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
        </div>
      </div>    
    </div>
  )
}

export default Work
