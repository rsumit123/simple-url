import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function UrlReady(props) {
  return (
    <div>
      <h4>Popup - GeeksforGeeks</h4>
      <Popup trigger={props.shortUrl} position="right center">
        <div>{shortUrl}</div>
        <button>Click here</button>
      </Popup>
    </div>
  );
}
