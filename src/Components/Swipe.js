import React, { useState } from "react";
import { users } from "./Data";
import "./CSS/Swipe.css";
import UserCard from "./UserCard";

import Activity from "./Activity";

const Swipe = () => {
  const [suggestedUserIndex, setSuggestedUserIndex] = useState(0);
  const [acceptedUsers, setAcceptedUsers] = useState([]);
  const [showActivity, setShowActivity] = useState(false);

  const handleSwipeRight = (user) => {
    setAcceptedUsers([...acceptedUsers, user]);
    setSuggestedUserIndex((prevIndex) => prevIndex + 1);
  };

  const handleSwipeLeft = () => {
    setSuggestedUserIndex((prevIndex) => prevIndex + 1);
  };

  const suggestedUser = users[suggestedUserIndex];

  return (
    <div className="swipe-container">
      {showActivity ? (
        <Activity acceptedUsers={acceptedUsers} />
      ) : (
        <>
          {suggestedUser ? (
            <UserCard
              user={suggestedUser}
              onSwipeRight={handleSwipeRight}
              onSwipeLeft={handleSwipeLeft}
            />
          ) : (
            <p>No more users to suggest.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Swipe;
