import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { WrapperNavbar } from './Navbar.styled'
import { Sidebar } from './Sidebar/Sidebar'


const MENU_ITEMS = [{ name: 'Home', link: '/' }, { name: 'Service', link: '/serveces' }, { name: 'Products', link: '/products' }]

export const Navbar = ({ setOverflowAuto }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1200) setButton(false);
    else setButton(true)
  }

  useEffect(() => {
    showButton();
  }, [])

  const navlist = () => {
    return MENU_ITEMS.map((item, index) => {
      return <li className='navbar__item'>
        <Link key={index} to={item.link} className='navbar__links' onClick={closeMobileMenu}>{item.name}</Link>
      </li>
    })
  }

  const showMenu = () => {
    if (!button) return (
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
    )
    else return (
      <div className="navbar__menu">
        <ul>
          {navlist()}
        </ul>
        <Link to='/sign-up'>
          <button className='navbar__button' >SIGN UP</button>
        </Link>
      </div>
    )
  }

  window.addEventListener('resize', showButton);

  return (<>
    <WrapperNavbar className='navbar'>
      <div className='_container'>
        <Link className='navbar__logo' to='/'>
          <h1>TRVL</h1>
          <i className='fab fa-typo3' />
        </Link>
        {showMenu()}
      </div>
    </WrapperNavbar>
    <Sidebar clicked={click} navlist={navlist} closeMobileMenu={closeMobileMenu} />
  </>
  )
}
