import React from "react";
import "./SpotifySongs.css";
const SpotifySongs = () => {
	return (
		<div id="body">
			<div id="spotifyEmbedding">
				<h1 id="spotifyTitle">Original Songs</h1>
				<div id="comeHomeColdDiv">
					<iframe
						id="comeHomeEmbedding"
						className="songEmbedment"
						title="Come Home"
						src="https://open.spotify.com/embed/track/0tAAlZJ39X9SG5Tw8ubLgP?theme=1"
						allowTransparency="true"
						frameBorder="0"
						allowfullscreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					></iframe>
					<iframe
						id="coldEmbedding"
						className="songEmbedment"
						title="Cold"
						src="https://open.spotify.com/embed/track/1kni4OdbmFPZsH3hxWGCXS?theme=1"
						frameBorder="0"
						allowfullscreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					></iframe>
				</div>
				<div id="foolDiv">
					<iframe
						id="foolEmbedding"
						className="songEmbedment"
						title="Fool"
						src="https://open.spotify.com/embed/track/61pMmoHEwW3PnghmZW1IMm"
						frameBorder="0"
						allowfullscreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					></iframe>
				</div>
			</div>
		</div>
	);
};
export default SpotifySongs;
