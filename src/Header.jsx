import "./Header.css";
import EndTestModal from "./EndTestModal";
import { useState } from "react";

const Header = ({ page, setPage }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <EndTestModal setPage={setPage} onClose={() => setShowModal(false)} />
      )}
      <span className="Header-body">
        <text className="Logo">Attention Activity</text>
        {page === "Start" && (
          <text className="Center" color="white">
            Select a button below to continue
          </text>
        )}
        {page === "Main" && (
          <button onClick={() => setShowModal(true)} className="Button">
            Click here when Qualtrics is Submitted
          </button>
        )}
      </span>
    </>
  );
};
export default Header;
