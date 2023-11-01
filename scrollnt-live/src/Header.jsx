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
            Click when done reading and ready to submit data
          </button>
        )}
      </span>
    </>
  );
};
export default Header;
