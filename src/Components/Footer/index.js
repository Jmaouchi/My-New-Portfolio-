import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div>
      <footer className='footer'>
          <ul className='footer-logos'>
            <a href='https://www.facebook.com/djigo.mat.1'><li><i className="fab fa-facebook log-items facebook"></i></li></a>
            <a href='https://www.instagram.com/'><li><i className="fab fa-instagram log-items instagram"></i></li></a>
            <a href='https://www.linkedin.com/in/jugurta-maouchi-840b08227/'><li><i className="fab fa-linkedin log-items linkedin"></i></li></a>
            <a href='https://github.com/Jmaouchi'><li><i className="fab fa-github log-items github"></i></li></a>
          </ul>       
          <p className='footer-author'>
            &copy; 2022 | Built with <span></span> 💙 by Jugurta Maouchi
          </p> 
      </footer>
    </div>
  )
}

export default Footer