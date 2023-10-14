import "./Main.css";
import { useEffect, useState, useRef } from "react";
import SocialFeedSimulator from "../scrollnt-web/SocialFeedSimulator";
import dialog from "../res/dialog.png";
import MouseTracker from "../utils/MouseTracker";

const Main = ({ isExperimentGroup, setTrackMouse, setPage }) => {
  const elementRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isExperimentGroup) setShowPopup(true);
    }, 30000);
    return () => clearInterval(interval);
  });

  return (
    <body>
      <div id="Main-body" className="Main-body" ref={elementRef}>
        <div className="ScrollNT-embed" onClick={() => setShowPopup(false)}>
          {showPopup && <img alt="" src={dialog} className="Popup" />}
          <SocialFeedSimulator />
          <MouseTracker setPage={setPage} />
        </div>
        <div
          onMouseEnter={() => {
            console.log("Interacting with Qualtrics");
            setTrackMouse(false);
          }}
          onMouseLeave={() => {
            console.log("Leaving Qualtrics");
            setTrackMouse(true);
          }}
        >
          <iframe
            id="Qualtrics-Embed"
            title="Qualtrics-Embed"
            className="Qualtrics-embed"
            src="https://oregonstate.qualtrics.com/jfe/form/SV_0BU2a1XQslhHGeO"
          ></iframe>
        </div>
      </div>
    </body>
  );
};

export default Main;
