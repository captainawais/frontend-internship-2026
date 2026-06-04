import "./Modal.css"

function Modal({ closeModal }) {

  return (

    <div
      className="overlay"
      onClick={closeModal}
    >

      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="modal-icon">
          🚀
        </div>

        <h2>
          Frontend Developer Internship
        </h2>

        <p>

          Currently enrolled in the Frontend
          Developer Internship Program.

          <br /><br />

          Focus Areas:

          <br />

          • React.js

          <br />

          • JavaScript

          <br />

          • Responsive Design

          <br />

          • Component Architecture

          <br />

          • Modern UI Development

        </p>

        <div className="modal-actions">

          <button
            className="close-btn"
            onClick={closeModal}
          >
            Close
          </button>

        </div>

      </div>

    </div>

  )

}

export default Modal