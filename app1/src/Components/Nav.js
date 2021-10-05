import React from 'react'
import './Nav.css'


const Nav = () => {
  return (
    
    <nav className="mainNav">
      <div className="test">
          <div  alt="Olso Logo" className="logo"></div>
      </div>
      <div className="test">
        <a href="https://open.spotify.com/artist/28neehTq16uiEbRUScBjS9?si=fAN7nSoUTEa79OHLVUQG8A&dl_branch=1" className="logoLink spotify" target="_blank" rel="noreferrer">
          
        </a>
        <a href="https://music.apple.com/us/artist/olso/1464043307" className="logoLink apple" target="_blank" rel="noreferrer">
          
        </a>
        <a href="https://soundcloud.com/olso_music" className="logoLink soundcloud" target="_blank" rel="noreferrer">
          Soundcloud
        </a>
        <a href="https://www.youtube.com/channel/UChg6t6oZ09rmUH1dbY2joFA" className="logoLink youtube" target="_blank" rel="noreferrer">
          Youtube
        </a>
        <a href="https://www.instagram.com/olsomusic/" className="logoLink instagram" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://twitter.com/olsomusic" className="logoLink twitter" target="_blank" rel="noreferrer"> 
          Twitter
        </a>
        <a href="https://www.facebook.com/olsomusic" className="logoLink facebook" target="_blank" rel="noreferrer">
          Facebook
        </a>
      </div>
    </nav>

    
  )
}

export default Nav
