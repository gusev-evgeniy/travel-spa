import React from 'react'
import { FooterWrapper } from './Footer.styles'

export const Footer = () => {
  return (
    <FooterWrapper>
      <h2>Join the Adventure newsletter to receive our best vacation deals</h2>
      <p>You can unsubsdribe at any time</p>
      <form >
        <input type="text" placeholder='Your Email' />
        <button>Subscibe</button>
      </form>
      <div className="link-wrapper">
        <div className="links-row">
          <ul className="links-column">
            <li>About Us</li>
            <li>How it works</li>
            <li>Testimonials</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Terms of Service</li>
          </ul>
          <ul className="links-column">
            <li>About Us</li>
            <li>How it works</li>
            <li>Testimonials</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Terms of Service</li>
          </ul>
          <ul className="links-column">
            <li>About Us</li>
            <li>How it works</li>
            <li>Testimonials</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Terms of Service</li>
          </ul>
          <ul className="links-column">
            <li>About Us</li>
            <li>How it works</li>
            <li>Testimonials</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="contacts">
        <div className="logo">TRVL</div>
        <div className="copirate">TRVL  <span>&#169;</span> 2021</div>
        <div className="contacts">

        </div>
      </div>
    </FooterWrapper>
  )
}
