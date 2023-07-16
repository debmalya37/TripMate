import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Swipe from "./Components/Swipe";
import Navbar from "./Components/Navbar";
import Chat from "./Components/Chat";
import Activity from "./Components/Activity";

function App() {
  const [acceptedUsers, setAcceptedUsers] = useState([]);
  const [rejectedUsers, setRejectedUsers] = useState([]);

  const handleAcceptUser = (user) => {
    setAcceptedUsers([...acceptedUsers, user]);
  };

  const handleRejectUser = (user) => {
    setRejectedUsers([...rejectedUsers, user]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Swipe onAcceptUser={handleAcceptUser} onRejectUser={handleRejectUser} />}
          />
          <Route path="/chat" element={<Chat />} />
          <Route
            path="/activity"
            element={<Activity acceptedUsers={acceptedUsers} rejectedUsers={rejectedUsers} />}
          />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
