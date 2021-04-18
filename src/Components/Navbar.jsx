import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { WrapperNavbar } from './Navbar.styled'
import { Sidebar } from './Sidebar/Sidebar';

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1200) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  console.log(window.innerWidth)
  useEffect(() => {
    showButton();
  }, []);

  const showMenu = () => {
    if (!button) {
      console.log('button')
      return (<div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>)
    }

    else {
      console.log('not button')
      return (
        <div className="navbar__menu">
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
        </div>
      )
    }
  }

  window.addEventListener('resize', showButton);

  return (<>
    <WrapperNavbar className='navbar'>
      <div className='_container'>
        <i className='navbar__logo' to='/'>
          <h1>TRVL</h1>
          <Link className='fab fa-typo3' />
        </i>
        {showMenu()}
      </div>
    </WrapperNavbar>
    <Sidebar clicked={click} />
  </>
  )
}
