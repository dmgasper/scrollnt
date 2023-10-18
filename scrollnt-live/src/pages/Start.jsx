import "./Start.css";
import "../App.css";

const Start = ({ setPage, setIsExperimentGroup }) => {
  const launchTest = (isExperimentGroup) => {
    setIsExperimentGroup(isExperimentGroup);
    setPage("Main");
  };

  return (
    <div className="App-body">
      <button className="Start-btn" onClick={() => launchTest(false)}>
        np
      </button>
      <button className="Start-btn" onClick={() => launchTest(true)}>
        p
      </button>
    </div>
  );
};

export default Start;
