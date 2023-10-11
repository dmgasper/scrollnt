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
        Control group
      </button>
      <button className="Start-btn" onClick={() => launchTest(true)}>
        Experiment group
      </button>
    </div>
  );
};

export default Start;
