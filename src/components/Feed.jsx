import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel.jsx";
import MessageSender from "./MessageSender.jsx";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="profileimg1.jpg"
        message="WOT This is working"
        username="Shahid"
        image="img1.jpg"
      />
      <Post
        message="Today Kamran's birthday "
        username="Kamran"
        profilePic="profileimg2.jpg"
      />
      <Post
        message="React Hackathon is going on "
        username="Kamran"
        profilePic="profileimg3.jpg"
        image="img3.jpg"
      />
    </div>
  );
}

export default Feed;
