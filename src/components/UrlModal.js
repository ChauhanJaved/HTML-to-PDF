import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function UrlModal({ show, onHide, onAddUrl }) {
  const [url, setUrl] = useState("");
  const urlPlaceholder = `Paste your URLs here, one per line:
https://www.example.com/
https://www.google.com/
https://www.github.com/
`;
  const handleAddUrl = () => {
    onAddUrl(url);
    setUrl("");
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add URL</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea
          placeholder={urlPlaceholder}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="form-control"
        ></textarea>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleAddUrl}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
