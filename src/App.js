import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Swipe from "./Components/Swipe";
import Navbar from "./Components/Navbar";
import Chat from "./Components/Chat";
import Activity from "./Components/Activity";

function App() {
  const [acceptedUsers, setAcceptedUsers] = useState([]);
  const [rejectedUsers, setRejectedUsers] = useState([]);
  const [showActivity, setShowActivity] = useState(false);

  const handleSwipeRight = (user) => {
    setAcceptedUsers([...acceptedUsers, user]);
  };

  const handleSwipeLeft = (user) => {
    setRejectedUsers([...rejectedUsers, user]);
  };

  const toggleActivity = () => {
    setShowActivity(!showActivity);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Swipe
                onSwipeRight={handleSwipeRight}
                onSwipeLeft={handleSwipeLeft}
              />
            }
          />
          <Route path="/chat" element={<Chat />} />
          {showActivity && (
            <Route
              path="/activity"
              element={
                <Activity
                  acceptedUsers={acceptedUsers}
                  rejectedUsers={rejectedUsers}
                />
              }
            />
          )}
        </Routes>
        <Navbar toggleActivity={toggleActivity} />
      </div>
    </Router>
  );
}

export default App;
