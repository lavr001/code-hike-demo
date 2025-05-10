import React from "react";

const WelcomeModal = ({ isOpen, onClose, onStartGuide }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Welcome to the Code Hike Demo!</h2>
        <p>
          This prototype demonstrates how AWS Amplify documentation could be
          enhanced with Code Hike for a more interactive learning experience.
        </p>
        <div className="modal-actions">
          <button onClick={onStartGuide} className="modal-button primary">
            Show me how it works
          </button>
          <button onClick={onClose} className="modal-button secondary">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
