import { createPortal } from "react-dom";
import "./EndTestModal.css";

const EndTestModal = ({ onClose }) =>
  createPortal(
    <div className="modal">
      <div className="modal-content">
        <div>
          Are you sure you are done? Click cancel unless you mean to be done and
          you have clicked "submit" on the Qualtrics survey.
        </div>
        <div className="buttons">
          <button onClick={() => onClose()}>Close</button>
          <button onClick={() => onClose()}>End Activity</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );

export default EndTestModal;
