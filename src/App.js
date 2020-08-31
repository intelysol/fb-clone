import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Feed from "./components/Feed.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* App Body -> Feed */}
        {/* App Body -> Widgets */}
      </div>
    </div>
  );
}

export default App;
