import "./Main.css";
import { useEffect, useState, useRef } from "react";
import SocialFeedSimulator from "../scrollnt-web/SocialFeedSimulator";
import MouseTracker from "../utils/MouseTracker";
import StartModal from "../StartModal";
import StudyContent from "../StudyContent";

const Main = ({
  initials,
  isExperimentGroup,
  setTrackMouse,
  setPage,
  setPublishTrackingData,
}) => {
  const elementRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showStartModal, setShowStartModal] = useState(false);

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
              <MouseTracker
                setPage={setPage}
                initials={initials}
                isExperimentGroup={isExperimentGroup}
                setPublishTrackingData={setPublishTrackingData}
              />
              <SocialFeedSimulator showPopup={showPopup} />
            </>
          )}
        </div>
        <StudyContent />
      </div>
    </body>
  );
};

export default Main;
