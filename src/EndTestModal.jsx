import { createPortal } from "react-dom";
import "./EndTestModal.css";

const EndTestModal = ({ onClose }) =>
  createPortal(
    <div className="modal">
      <div className="modal-content">
        <div>I'm a modal dialog</div>
        <button onClick={() => onClose()}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );

export default EndTestModal;
