import "./Header.css";
import EndTestModal from "./EndTestModal";
import { useState } from "react";

const Header = ({ page, setPage, setTrackMouse, setPublishMouseData }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <EndTestModal
          setPage={setPage}
          setPublishMouseData={setPublishMouseData}
          onClose={() => {
            setShowModal(false);
            setTrackMouse(true);
          }}
        />
      )}
      <span className="Header-body">
        {page === "Start" && (
          <text className="Center" color="white">
            Input initials below and then click the blue button to start
          </text>
        )}
        {page === "Main" && (
          <button
            onClick={() => {
              setShowModal(true);
              setTrackMouse(false);
            }}
            className="Button"
          >
            When you are done reading, (1) click here to submit your data and
            then (2) close the window
          </button>
        )}
      </span>
    </>
  );
};
export default Header;
