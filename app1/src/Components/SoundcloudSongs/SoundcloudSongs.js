import React from "react";
import "./SoundcloudSongs.css";

const SoundcloudSongs = () => {
	return (
		<div id="soundCloudEmbedding">
			<h1 id="soundCloudTitle">SoundCloud Remixes</h1>
			<div id="freeEmbedding">
				<iframe
					background-color="black"
					title="Free (OLSO Cover)"
					width="100%"
					scrolling="no"
					frameborder="no"
					allow="autoplay"
					src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1101610099&color=%2369276f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
				></iframe>
			</div>
			<div id="allEyesEmbedding">
				<iframe
					title="All Eyes (OLSO Flip)"
					width="100%"
					scrolling="no"
					frameborder="no"
					allow="autoplay"
					src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/299400390&color=%2369276f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
				></iframe>
			</div>
			<div id="cryBirdEmbedding">
				<iframe
					title="Cry Bird (OLSO Flip)"
					width="100%"
					scrolling="no"
					frameborder="no"
					allow="autoplay"
					src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/554609727&color=%2369276f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
				></iframe>
			</div>
			<div id="shadowDancesEmbedding">
				<iframe
                    title="Shadow Dances (OLSO Remix)"
					width="100%"
					scrolling="no"
					frameborder="no"
					allow="autoplay"
					src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/284395972&color=%2369276f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
				></iframe>
			</div>
		</div>
	);
};
export default SoundcloudSongs;
