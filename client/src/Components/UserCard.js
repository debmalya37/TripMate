import React from "react";

const UserCard = ({ user, onSwipeRight, onSwipeLeft }) => {
  const handleSwipeRight = () => {
    onSwipeRight(user);
  };

  const handleSwipeLeft = () => {
    onSwipeLeft(user);
  };

  return (
    <div className="user-card">
      {/* Card content */}
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

export default UserCard;
