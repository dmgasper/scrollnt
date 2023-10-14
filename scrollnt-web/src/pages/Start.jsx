import "./Start.css";
import "../App.css";
import { useState } from "react";
import StartModal from "../StartModal";

const Start = ({ setPage, setIsExperimentGroup }) => {
  const [showModal, setShowModal] = useState(false);

  const launchTest = (isExperimentGroup) => {
    setIsExperimentGroup(isExperimentGroup);
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <StartModal setPage={setPage} onClose={() => setShowModal(false)} />
      )}
      <div className="App-body">
        <button className="Start-btn" onClick={() => launchTest(false)}>
          Don't display popups
        </button>
        <button className="Start-btn" onClick={() => launchTest(true)}>
          Display social media with popups
        </button>
      </div>
    </>
  );
};

export default Start;
