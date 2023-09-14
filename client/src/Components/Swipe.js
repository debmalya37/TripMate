import React, { useState, useEffect } from "react";
import { users } from "./Data";
import UserCard from "./UserCard";
import "./CSS/Swipe.css";

const Swipe = ({ onAcceptUser, onRejectUser }) => {
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [swipedUsers, setSwipedUsers] = useState([]);

  useEffect(() => {
    const remainingUsers = users.filter((user) => !swipedUsers.includes(user));
    setSuggestedUsers(remainingUsers);
  }, [swipedUsers]);

  const handleSwipeRight = (user) => {
    onAcceptUser(user);
    setSwipedUsers([...swipedUsers, user]);
  };

  const handleSwipeLeft = (user) => {
    onRejectUser(user);
    setSwipedUsers([...swipedUsers, user]);
  };

  const suggestedUser = suggestedUsers[0];

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
