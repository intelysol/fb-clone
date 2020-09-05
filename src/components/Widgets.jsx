/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div classname="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIntelysol-132500750121095%2F&tabs=timeline&width=300&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=390888317713778"
        width={300}
        height={800}
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder={0}
        allowTransparency="true"
        allow="encrypted-media"
      />
    </div>
  );
}

export default Widgets;
