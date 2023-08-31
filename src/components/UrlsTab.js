import React, { useState } from "react";
import { Button } from "react-bootstrap";
import UrlModal from "./UrlModal";

export default function UrlsTab(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Button className="btn btn-primary" onClick={() => setModalShow(true)}>
        Add URL
      </Button>
      <UrlModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onAddUrl={props.onAddUrl}
      />
      <ul>
        {props.urls.map((url, index) => (
          <li key={index}>{url}</li>
        ))}
      </ul>
    </div>
  );
}
