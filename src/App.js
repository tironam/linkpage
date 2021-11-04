import React from 'react'
import LinkButton from './components/LinkButton'

function App() {
  return (
    <div>
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
