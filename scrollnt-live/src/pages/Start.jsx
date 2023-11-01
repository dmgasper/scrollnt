import { useState } from "react";
import "./Start.css";
import "../App.css";

const Start = ({
  setPage,
  setInitials,
  setTrackMouse,
  setIsExperimentGroup,
}) => {
  const launchTest = () => {
    const isExperimentGroup = Math.random() >= 0.5;
    setIsExperimentGroup(isExperimentGroup);
    setTrackMouse(true);
    setPage("Main");
  };

  const [showButton, setShowButton] = useState(false);

  return (
    <div className="Start-body">
      <label style={{ color: "white", paddingBottom: 10, fontSize: 32 }}>
        Enter your initials here:
      </label>
      <input
        style={{ height: 32, width: 120, alignSelf: "center", fontSize: 32 }}
        onChange={(e) => {
          setInitials(e.target.value);
          setShowButton(e.target.value !== "");
        }}
        name="initialInput"
      />
      <div style={{ visibility: showButton ? "visible" : "hidden" }}>
        <button className="Start-btn" onClick={() => launchTest()}>
          Click this button to start the activity
        </button>
      </div>
    </div>
  );
};

export default Start;
