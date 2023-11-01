import { createPortal } from "react-dom";
import "./Modal.css";

const EndTestModal = ({ onClose, setPublishMouseData }) =>
  createPortal(
    <div className="modal">
      <div className="modal-content">
        <div>
          Are you sure you are done? Click cancel unless you really are done
          reading and ready to submit your data
        </div>
        <div className="button-row">
          <button
            className="End-button"
            onClick={() => {
              setPublishMouseData(true);
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
