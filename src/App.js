import React from 'react'
import LinkButton from './components/LinkButton'
import TextBanner from './components/TextBanner'
import ProfilePic from './components/ProfilePic'

function App() {
  return (
    <div>
      
      <TextBanner
        title="Michael Tirona @tironam"
        text="Web Developer | Artist | Content Creator"
      />
      <LinkButton 
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
        title="For web development inquiries"
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
