import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header">
      <button className="btn btn-primary" onClick={props.onAddURLClick}>
        Add URL
      </button>
      <button className="btn btn-primary" onClick={props.onConvertClick}>
        Convert
      </button>
    </div>
  );
}
