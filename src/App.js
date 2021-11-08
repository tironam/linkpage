import React from 'react'
import LinkButton from './components/LinkButton'
import TextBanner from './components/TextBanner'
import ProfilePic from './components/ProfilePic'
import Footer from './components/Footer'
import picture from './profile.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <div style={{ "textAlign": "center" }}>
      <ProfilePic
        name="Michael Tirona"
        picture={picture}
        alt="Picture of Michael Tirona dressed as a Ghostbuster"
      />
      <TextBanner
        title="Southern California-based content creator, web developer, and artist"
        text="For business inquiries: tironamichael@gmail.com"
      />
      <div style={{ "marginBottom": "50px"}}>
        <LinkButton
          title=""
          name="@tironam on TikTok"
          link="https://www.tiktok.com/@tironam"
        />
        <LinkButton
          name="@tironam on Instagram"
          link="https://www.instagram.com/tironam/"
        />
        <LinkButton
          name="@tironadraws"
          link="https://www.instagram.com/tironadraws/"
        />
        <LinkButton
          title="Web Development Portfolio"
          name="tironam.com"
          link="https://tironam.com/"
        />
        <LinkButton
          title="Check me out on CodeCast"
          name="CodeCast"
          link="https://www.codecast.io/users/tironam"
        />
        <LinkButton
          title='Use code "tironam" for 10% off!'
          name="Fandomion"
          link="https://bit.ly/TironamMarvelMerch"
        />
      </div>
      <Footer
        text="Michael Tirona 2021 | All Rights Reserved."
        text2="Page was built by me using React.JS"
      />
    </div>
  );
}

export default App;
