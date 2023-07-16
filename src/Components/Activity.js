import React from "react";

const Activity = ({ acceptedUsers, rejectedUsers }) => {
  return (
    <div className="activity-section">
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

export default Activity;
