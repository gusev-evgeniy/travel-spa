import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarWrapper } from './Sidebar.styles'

export const Sidebar = ({ clicked }) => {
  return (
    <SidebarWrapper className={clicked && 'activate'}>
      <ul>
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
    </SidebarWrapper>
  )
}
