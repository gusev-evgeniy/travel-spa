import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/'>Service</Link>
        </li>
        <li>
          <Link to='/'>Product</Link>
        </li>
      </ul>
    </nav>
  )
}
