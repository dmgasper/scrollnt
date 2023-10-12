import "./Main.css";
import { useEffect, useState, useRef, Image } from "react";
import SocialFeedSimulator from "../scrollnt-web/SocialFeedSimulator";
import dialog from "../res/dialog.png";
import MouseTracker from "../utils/MouseTracker";

const Main = ({ isExperimentGroup, setTrackMouse }) => {
  // https://timetoprogram.com/get-width-of-element-react-js/
  // https://www.geeksforgeeks.org/how-to-determine-the-size-of-a-component-in-reactjs/
  const elementRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);

  // Component dimensions
  const getComponentDimensions = () => {
    setDimensions({
      width: elementRef.current?.offsetWidth,
      height: elementRef.current?.offsetHeight,
    });
    setPosition({
      x: elementRef.current?.offsetLeft,
      y: elementRef.current?.offsetTop,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isExperimentGroup) setShowPopup(true);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <body>
      <div id="Main-body" className="Main-body" ref={elementRef}>
        <MouseTracker />
        <div onClick={() => setShowPopup(false)}>
          {showPopup && <img alt="" src={dialog} className="Popup" />}
          <SocialFeedSimulator className="ScrollNT-embed" />
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
