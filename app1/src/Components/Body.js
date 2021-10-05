import React from "react";
import "./Body.css";
const Body = () => {
	return (
		<div id="body">
			<div id="spotifyEmbedding">
				<div id="comeHomeColdDiv">
					<iframe
						id="comeHomeEmbedding"
						title="Come Home"
						src="https://open.spotify.com/embed/track/0tAAlZJ39X9SG5Tw8ubLgP?theme=1"
						allowTransparency="true"
						height="350vh"
						frameBorder="0"
						allowfullscreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					></iframe>
					<iframe
						id="coldEmbedding"
						title="Cold"
						src="https://open.spotify.com/embed/track/1kni4OdbmFPZsH3hxWGCXS?theme=1"
						height="350vh"
						frameBorder="0"
						allowfullscreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					></iframe>
				</div>
				<div id="foolDiv">
					<iframe
						id="foolEmbedding"
						title="Fool"
						src="https://open.spotify.com/embed/track/61pMmoHEwW3PnghmZW1IMm"
						height="80"
						frameBorder="0"
						allowfullscreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					></iframe>
				</div>
			</div>
		</div>
	);
};
export default Body;
