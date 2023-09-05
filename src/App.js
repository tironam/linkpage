import React from 'react'
import LinkButton from './components/LinkButton'
import TextBanner from './components/TextBanner'
import Contact from './components/Contact'
import ProfilePic from './components/ProfilePic'
import Footer from './components/Footer'
import picture from './profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <ProfilePic
        name='Michael Tirona'
        picture={picture}
        alt='Headshot of Michael Tirona'
      />
      <TextBanner title='Content creator, web developer, and artist based in the Orlando area' />
      <Contact />
      <div style={{ marginBottom: '50px' }}>
        <LinkButton
          title=''
          name='@tironam'
          logo={<FontAwesomeIcon size='2x' icon={faTiktok} />}
          link='https://www.tiktok.com/@tironam'
        />
        <LinkButton
          name='@tironam'
          logo={<FontAwesomeIcon size='2x' icon={faInstagram} />}
          link='https://www.instagram.com/tironam/'
        />
        <LinkButton
          name='@tironadraws'
          logo={<FontAwesomeIcon size='2x' icon={faInstagram} />}
          link='https://www.instagram.com/tironadraws/'
        />
        <LinkButton
          title='Fanhome'
          name='Get your own Ecto-1 1:8 scale model from Fanhome and use promo code BUSTERSGHOST'
          link='https://bit.ly/3iKUN1F'
        />
        <LinkButton
          title='My homemade Marvel resource site'
          name='mcuandyou.com'
          link='https://mcuandyou.com'
        />
        <LinkButton
          title='Web Development Portfolio'
          name='tironam.com'
          logo={<FontAwesomeIcon size='1x' icon={faCode} />}
          link='https://tironam.com/'
        />
        <LinkButton
          title='My Redbubble store'
          name='Redbubble'
          link='https://www.redbubble.com/people/tironam/shop?asc=u'
        />
      </div>
      <Footer
        text='Michael Tirona 2022 | All Rights Reserved.'
        text2='Page was built by me using React.JS'
      />
    </div>
  )
}

export default App
