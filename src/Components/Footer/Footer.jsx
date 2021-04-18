import React from 'react'
import { Link } from 'react-router-dom'
import { FooterWrapper } from './Footer.styles'

const ABOUT_US_LINKS = [
  ['About Us', 'How it works', 'Testimonials', 'Careers', 'Investors', 'Terms of Service'],
  ['Contact Us', 'Contact', 'Support', 'Destinations', 'Sponsorships'],
  ['Videos', 'Submit Video', 'Ambassadors', 'Agency', 'Influencer'],
  ['Social Media', 'Instagram', 'Facebook', 'Youtube', 'Twitter'],
]
const CONTACTS = [
  { name: 'Facebook', icon: 'fab fa-facebook-f' },
  { name: 'Instagram', icon: 'fab fa-instagram' },
  { name: 'Youtube', icon: 'fab fa-youtube' },
  { name: 'Tweeter', icon: 'fab fa-twitter' }
]

export const Footer = () => {

  const showAboutUsLinks = (start = 0, end = ABOUT_US_LINKS.length) => {
    return ABOUT_US_LINKS
      .slice(start, end)
      .map((linksList, index) => {
        return <ul key={index} className="links-column">
          {linksList.map((link, index) => <li key={index}>{link}</li>)}
        </ul>
      })
  }

  const showContacts = () => {
    return CONTACTS.map((contact, index) => <Link
      key={index}
      className='social-icon-link '
      to='/'
      target='_blank'
      aria-label={contact.name}
    >
      <i className={contact.icon} />
    </Link>)
  }

  return (
    <FooterWrapper>
      <h2>Join the Adventure newsletter to receive our best vacation deals</h2>
      <p>You can unsubsdribe at any time</p>
      <form >
        <input type="text" placeholder='Your Email' />
        <button>Subscibe</button>
      </form>
      <div className="link_wrapper">
        <div className="links-row">
          {showAboutUsLinks(0, 2)}
        </div>
        <div className="links-row">
          {showAboutUsLinks(2, 4)}
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>TRVL © 2020</small>
          <div className='social-icons'>
            {showContacts()}
          </div>
        </div>
      </section>
    </FooterWrapper >
  )
}
