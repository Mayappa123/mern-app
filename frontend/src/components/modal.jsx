import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function StaticExample() {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Want to delete the student info?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You cannot retain the deleted student info.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default StaticExample;
