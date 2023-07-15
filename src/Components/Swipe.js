import React, { useState, useEffect } from "react";
import { users } from "./Data";
import "./CSS/Swipe.css";

const UserCard = ({ user, onSwipeRight, onSwipeLeft }) => {
  const handleSwipeRight = () => {
    onSwipeRight(user);
  };

  const handleSwipeLeft = () => {
    onSwipeLeft(user);
  };

  return (
    <div className="user-card">
      <div className="user-picture">
        <img src={user.picture} alt={user.name} />
      </div>
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
      <div className="swipe-buttons">
        <button onClick={handleSwipeRight}>A</button>
        <button onClick={handleSwipeLeft}>R</button>
      </div>
    </div>
  );
};

const Swipe = () => {
  const [suggestedUserIndex, setSuggestedUserIndex] = useState(0);
  const [acceptedUsers, setAcceptedUsers] = useState([]);
  const [rejectedUsers, setRejectedUsers] = useState([]);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setContainerHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <div
      className="swipe-container"
      style={{ minHeight: `${containerHeight}px` }}
    >
      {suggestedUser ? (
        <UserCard
          user={suggestedUser}
          onSwipeRight={handleSwipeRight}
          onSwipeLeft={handleSwipeLeft}
        />
      ) : (
        <p>No more users to suggest.</p>
      )}

      <h3>Accepted Users</h3>
      <ul>
        {acceptedUsers.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>

      <h3>Rejected Users</h3>
      <ul>
        {rejectedUsers.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Swipe;
