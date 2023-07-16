import React, { useState } from "react";
import { users } from "./Data";
import UserCard from "./UserCard";
import "./CSS/Swipe.css";
const Swipe = ({ onAcceptUser, onRejectUser }) => {
  const [suggestedUserIndex, setSuggestedUserIndex] = useState(0);

  const handleSwipeRight = (user) => {
    onAcceptUser(user);
    setSuggestedUserIndex((prevIndex) => prevIndex + 1);
  };

  const handleSwipeLeft = (user) => {
    onRejectUser(user);
    setSuggestedUserIndex((prevIndex) => prevIndex + 1);
  };

  const suggestedUser = users[suggestedUserIndex];

  return (
    <div className="swipe-container">
      {suggestedUser ? (
        <UserCard
          user={suggestedUser}
          onSwipeRight={handleSwipeRight}
          onSwipeLeft={handleSwipeLeft}
        />
      ) : (
        <p>No more users to suggest.</p>
      )}
    </div>
  );
};

export default Swipe;
