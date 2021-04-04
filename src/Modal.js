import React from "react";
import Contact from "./Contact.js";
const Modal = (props) => {
  return (
    <div>
      <div className="modal-overlay" />
      <div
        className="modal-wrapper"
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal">
          <div className="modal-header">
            <button
              type="button"
              className="modal-close-button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => props.displaySetter(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Modal;
