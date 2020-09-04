import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel.jsx";
import MessageSender from "./MessageSender.jsx";
function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {/* MessageSender */}
    </div>
  );
}

export default Feed;
