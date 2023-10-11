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
        Don't display popups
      </button>
      <button className="Start-btn" onClick={() => launchTest(true)}>
        Display social media with popups
      </button>
    </div>
  );
};

export default Start;
