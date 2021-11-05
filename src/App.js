import React from 'react'
import LinkButton from './components/LinkButton'
import TextBanner from './components/TextBanner'
import ProfilePic from './components/ProfilePic'
import picture from './tironam.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <div style={{ "textAlign": "center" }}>
      <ProfilePic
        picture={picture}
      />
      <TextBanner
        title="Michael Tirona | @tironam"
        text="Web Developer | Artist | Content Creator"
      />
      <LinkButton 
      title="Follow me on social media:"
        name="Follow me on Instagram" 
        link="https://www.instagram.com/tironam/"
      />
      <LinkButton 
        name="Follow me on TikTok"
        link="https://www.tiktok.com/@tironam"
      />
      <LinkButton
        name="Follow my art Instagram"
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
