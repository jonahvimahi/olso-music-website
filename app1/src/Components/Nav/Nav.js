import React from "react";
import "./Nav.css";
import logo from "../../content/icons/OLSOlogo21.png";
import spotify from "../../content/icons/spotify-icon.png";
import applemusic from "../../content/icons/applemusic-icon.png";
import soundcloud from "../../content/icons/soundcloud-icon.png";
import youtube from "../../content/icons/youtube-icon.png";
import instagram from "../../content/icons/instagram-icon.png";
import twitter from "../../content/icons/twitter-icon.png";
import facebook from "../../content/icons/facebook-icon.png";

const Nav = () => {
	return (
		<nav className="mainNav">
			<div className="test">
				<img id="olsoLogo"className="logo" alt="OLSO logo" src={logo}></img>
				{/* <div  alt="Olso Logo" i className="logo"></div> */}
			</div>
			<div className="spacer"></div>
			<div className="test2">
				<a 
					href="https://open.spotify.com/artist/28neehTq16uiEbRUScBjS9?si=fAN7nSoUTEa79OHLVUQG8A&dl_branch=1"
          className="logoLink"
					id="logoLink spotify"
					target="_blank"
					rel="noreferrer"
				>
					<img className="logo" id="spotifyLogo" alt="Spotify Logo" src={spotify}></img>
				</a>
				<a
					href="https://music.apple.com/us/artist/olso/1464043307"
          className="logoLink"
					id="logoLink apple"
					target="_blank"
					rel="noreferrer"
				>
					<img
						className="logo" id="applemusicLogo"
						alt="Apple Music Logo"
						src={applemusic}
					></img>
				</a>
				<a
					href="https://soundcloud.com/olso_music"
          className="logoLink"
					id="logoLink soundcloud"
					target="_blank"
					rel="noreferrer"
				>
					<img
						className="logo" id="soundcloudLogo"
						alt="SoundCloud Logo"
						src={soundcloud}
					></img>
				</a>
				<a
					href="https://www.youtube.com/channel/UChg6t6oZ09rmUH1dbY2joFA"
          className="logoLink"
					id="logoLink youtube"
					target="_blank"
					rel="noreferrer"
				>
					<img className="logo" id="youtubeLogo" alt="Youtube Logo" src={youtube}></img>
				</a>
				<a
					href="https://www.instagram.com/olsomusic/"
          className="logoLink"
					id="logoLink instagram"
					target="_blank"
					rel="noreferrer"
				>
					<img
						className="logo" id="instagramLogo"
						alt="Instagram Logo"
						src={instagram}
					></img>
				</a>
				<a
					href="https://twitter.com/olsomusic"
          className="logoLink"
					id="logoLink twitter"
					target="_blank"
					rel="noreferrer"
				>
					<img className="logo" id="twitterLogo" alt="Twitter Logo" src={twitter}></img>
				</a>
				<a
					href="https://www.facebook.com/olsomusic"
          className="logoLink"
					id="logoLink facebook"
					target="_blank"
					rel="noreferrer"
				>
					<img
						className="logo" id="facebookLogo"
						alt="Facebook Logo"
						src={facebook}
					></img>
				</a>
			</div>
		</nav>
	);
};

export default Nav;
