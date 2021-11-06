import React from 'react'
import LinkButton from './components/LinkButton'
import TextBanner from './components/TextBanner'
import ProfilePic from './components/ProfilePic'
import picture from './profile.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <div style={{ "textAlign": "center" }}>
      <ProfilePic
        picture={picture}
        alt="Picture of Michael Tirona dressed as a Ghostbuster"
      />
      <TextBanner
        title="Michael Tirona"
        text="Southern California-based content creator, web developer, and artist"
      />
      <LinkButton 
      title="Follow me on social media:"
        name="@tironam on Instagram" 
        link="https://www.instagram.com/tironam/"
      />
      <LinkButton 
        name="@tironam on TikTok"
        link="https://www.tiktok.com/@tironam"
      />
      <LinkButton
        name="@tironadraws | Art Instagram"
        link="https://www.instagram.com/tironadraws/"
      />
      <LinkButton
        title="For web development inquiries:"
        name="Web Development Portfolio"
        link="https://tironam.com/"
      />
      <LinkButton
        name="Check out my CodeCast profile"
        link="https://www.codecast.io/users/tironam"
      />
    </div>
  );
}

export default App;
