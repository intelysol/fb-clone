import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel.jsx";
import MessageSender from "./MessageSender.jsx";
import Post from "./Post";
import db from "../firebase.jsx";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

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

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.profilePic}
          message={post.message}
          username={post.username}
          image={post.image}
        />
      ))}
    </div>
  );
}
export default Feed;
