import React from 'react'
import Nav from '../Nav/Nav'
import './Home.css'
import SpotifySongs from '../SpotifySounds/SpotifySongs'
import SoundcloudSongs from '../SoundcloudSongs/SoundcloudSongs'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div>
            <Nav />
            <div id="pageContent">
            <SpotifySongs />
            <SoundcloudSongs />
            <Footer />
            </div>
        </div>
    )
}

export default Home
