import React from "react";
import "../styles/Header.css";

export default function Header(props) {
  return (
    <div className="header">
      <button className="btn btn-primary" onClick={props.onAddURLClick}>
        Convert
      </button>
      <button className="btn btn-primary" onClick={props.onConvertClick}>
        Convert
      </button>
    </div>
  );
}
