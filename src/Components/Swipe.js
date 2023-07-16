import React, { useState } from "react";
import { users } from "./Data";
import UserCard from "./UserCard";
import "./CSS/Swipe.css";
const Swipe = () => {
  const [suggestedUserIndex, setSuggestedUserIndex] = useState(0);
  const [acceptedUsers, setAcceptedUsers] = useState([]);
  const [rejectedUsers, setRejectedUsers] = useState([]);

  const handleSwipeRight = (user) => {
    setAcceptedUsers([...acceptedUsers, user]);
    setSuggestedUserIndex((prevIndex) => prevIndex + 1);
  };

  const handleSwipeLeft = (user) => {
    setRejectedUsers([...rejectedUsers, user]);
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
