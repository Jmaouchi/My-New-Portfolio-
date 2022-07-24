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

        <div className='myWork'>
          <div className='myWork-content'> 
            <h4 className='myWork-heading'>My Design Work</h4>
            <p className='myWork-paragraph'>Checkout some of my recent work</p>
          </div>
          
          <div className='myWork-grid-items'>
              <div className='item-one item'>
                
              </div>

              <div className='item-two item'>

              </div>

              <div className='item-three item'>

              </div>

              <div className='item-four item'>

              </div>

              <div className='item-five item'>

              </div>

              <div className='item-six item'>
                
                </div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Work
