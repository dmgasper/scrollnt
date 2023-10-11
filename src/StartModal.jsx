import { createPortal } from "react-dom";
import "./Modal.css";

const StartModal = ({ setPage, onClose }) =>
  createPortal(
    <div className="modal">
      <div className="modal-content">
        <div>Press the button below to begin</div>
        <button
          className="End-button Blue-border"
          onClick={() => {
            setPage("Main");
            onClose();
          }}
        >
          Start Activity
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );

export default StartModal;
