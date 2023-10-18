import "./Modal.css";

const StartModal = ({ setTrackMouse, onClose }) => (
  <div>
    <div className="modal-content">
      <div>Press the button below when instructed</div>
      <button
        className="End-button"
        onClick={() => {
          setTrackMouse(true);
          onClose();
        }}
      >
        Start Activity
      </button>
    </div>
  </div>
);

export default StartModal;
