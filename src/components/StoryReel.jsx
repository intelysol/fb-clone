import React from "react";
import "./StoryReel.css";
import Story from "./Story.jsx";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="img1.jpg"
        profileSrc="profileimg1.jpg"
        title="Shahid Mehmood"
      />
      <Story
        image="img2.jpg"
        profileSrc="profileimg2.jpg"
        title="This is Story"
      />
      <Story
        image="img3.jpg"
        profileSrc="profileimg3.jpg"
        title="This is Story"
      />
      <Story
        image="img4.jpg"
        profileSrc="profileimg4.jpg"
        title="This is Story"
      />
      <Story
        image="img5.jpg"
        profileSrc="profileimg5.jpg"
        title="This is Story"
      />
    </div>
  );
}

export default StoryReel;
