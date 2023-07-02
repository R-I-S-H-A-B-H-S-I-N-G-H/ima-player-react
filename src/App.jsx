import { useEffect, useRef, useState } from "react";
import { init } from "./utils/IMA";
import "./ima.css"


function App() {
  const playButtonRef = useRef();
	const adContainerRef = useRef();
	const videoContentRef = useRef();
	const [tagUrl, setTagUrl] = useState();

	useEffect(() => {
		if (playButtonRef.current && videoContentRef.current && adContainerRef.current) {
			console.log(tagUrl);
			init(videoContentRef.current, playButtonRef.current, adContainerRef.current,
				tagUrl
			);
		}
	}, [playButtonRef,tagUrl])

  return (
    <>
     <div>
			<div id="mainContainer">
				<div
					id='content'
				>
					<video
						ref={videoContentRef}
						controls
						id="contentElement"
					>
						<source
							src='https://storage.googleapis.com/gvabox/media/samples/stock.mp4'
						></source>
					</video>
				</div>
				<div
					ref={adContainerRef}
					id="adContainer"
				></div>
			</div>
			<div>
				<textarea
					onChange={(e)=>setTagUrl(e.target.value)}
				/>
				<button
					onClick={() => {
						console.log("DD");
					}}
					ref={playButtonRef}
					id='playButton'>Play</button>
			</div>
		</div>
    </>
  )
}

export default App
