import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="messageSender">
      <div className="messageSedner__top">
        <Avatar />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder="what's on your mind"
          />
          <input
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />
          <button onClick="{this.handleSubmit.bind(this)}" type="submit">
            Hidden Sumbit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <p>Live Video</p>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <p>Photo/Video</p>
        </div>

        <div className="messageSender__option">
          <InsertEmotionIcon style={{ color: "orange" }} />
          <p>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
