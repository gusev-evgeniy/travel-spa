import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarWrapper } from './Sidebar.styles'

export const Sidebar = ({ clicked, navlist, closeMobileMenu }) => {
  return (
    <SidebarWrapper className={clicked && 'activate'}>
      <ul>
        {navlist()}
      </ul>
      <Link to='/sign-up'>
        <button className='navbar__button' onClick={closeMobileMenu}>SIGN UP</button>
      </Link>
    </SidebarWrapper>
  )
}
