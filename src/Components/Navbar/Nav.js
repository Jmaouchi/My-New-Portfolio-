import React, {useState} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

function Nav() {
  const [clicked, setClick] = useState (false)

  const handleClick = () => {
    setClick(true)

  }

  return (
    <>
    <nav className='NavbarItems'>
      <h1 className='navbar-logo'>Jugurta<span className='jugurta-logo'>WebDev</span></h1>
      <div className='menu-icon'>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} onClick={handleClick}>
          </i>
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        <li className='option-links'>
          <Link className='nav-links' to={'/'}>Home</Link>
          <Link className='nav-links' to={'/hobbies'}>About</Link>
          <Link className='nav-links' to={'/work'}>Work</Link>
          <Link className='nav-links' to={'/about'}>Hobbies</Link>
        </li>
      </ul>
    </nav>

    <section className='my-section'>
        
    </section>
    </>
  )
}

export default Nav