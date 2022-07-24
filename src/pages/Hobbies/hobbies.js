import React from 'react'
import Nav from '../../Components/Navbar/Nav'
import './hobbies.css'


function Hobbies() {
  return (
    <div className='about'>
      <Nav />

      <section className='door'>
        <i class="fa-solid fa-lock"></i>
        <h2 className='heading-open'>
          Open
        </h2>
      </section>
    </div>
  )
}

export default Hobbies