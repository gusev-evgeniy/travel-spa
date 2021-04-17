import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './Navbar.styled'

export const Navbar = () => {
  return (
    <Wrapper className='navbar'>
      <div className='_container'>
        <Link className='navbar__logo' to='/'>
          <h1>TRVL</h1>
        </Link>
        <ul className="navbar__menu">
          <li className='navbar__item'>
            <Link to='/' className='navbar__links'>Home</Link>
          </li>
          <li className='navbar__item'>
            <Link to='/' className='navbar__links'>Service</Link>
          </li>
          <li className='navbar__item'>
            <Link to='/' className='navbar__links'>Product</Link>
          </li>
        </ul>
        <button className='navbar__button' >SIGN UP</button>
      </div>
    </Wrapper>
  )
}
