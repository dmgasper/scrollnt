import { createPortal } from "react-dom";
import "./EndTestModal.css";

const EndTestModal = ({ setPage, onClose }) =>
  createPortal(
    <div className="modal">
      <div className="modal-content">
        <div>
          Are you sure you are done? Click cancel unless you mean to be done and
          you have clicked "submit" on the Qualtrics survey.
        </div>
        <div className="button-row">
          <button
            className="End-button"
            onClick={() => {
              setPage("End");
              onClose();
            }}
          >
            End Activity
          </button>
          <button className="End-button Blue-border" onClick={() => onClose()}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );

export default EndTestModal;
