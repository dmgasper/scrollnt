import "./Main.css";
import { useEffect, useState, useRef } from "react";
import SocialFeedSimulator from "../scrollnt-web/SocialFeedSimulator";
import MouseTracker from "../utils/MouseTracker";
import StartModal from "../StartModal";

const Main = ({
  isExperimentGroup,
  setTrackMouse,
  setPage,
  setPublishTrackingData,
}) => {
  const elementRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showStartModal, setShowStartModal] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isExperimentGroup) setShowPopup(true);
    }, 20000);
    return () => clearInterval(interval);
  });

  return (
    <body>
      <div id="Main-body" className="Main-body" ref={elementRef}>
        <div className="ScrollNT-embed" onClick={() => setShowPopup(false)}>
          {showStartModal ? (
            <StartModal
              setTrackMouse={setTrackMouse}
              onClose={() => setShowStartModal(false)}
            />
          ) : (
            <>
              <SocialFeedSimulator />
              <MouseTracker
                setPage={setPage}
                isExperimentGroup={isExperimentGroup}
                setPublishTrackingData={setPublishTrackingData}
              />
            </>
          )}
          {showPopup && (
            <img
              alt=""
              src="https://scrollnt.azurewebsites.net/images/dialog.png"
              className="Popup"
            />
          )}
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
            src="https://oregonstate.qualtrics.com/jfe/form/SV_ePOX9Mk6MNB3JiK"
          ></iframe>
        </div>
      </div>
    </body>
  );
};

export default Main;
