import React from "react";
import "./CSS/Activity.css";
const Activity = ({ acceptedUsers, rejectedUsers }) => {
  return (
    <div className="activity-section">
      <h3>Activity</h3>
      <div>
        <h4>Accepted Users:</h4>
        <ul>
          {acceptedUsers.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Rejected Users:</h4>
        <ul>
          {rejectedUsers.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Activity;
