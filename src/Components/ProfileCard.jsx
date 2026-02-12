import { useState } from "react";

function ProfileCard({ name, role, description }) {
  const [followed, setFollowed] = useState(false);

return (
  <div className="card">
    <img
      src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random()*70)}`}
      alt="avatar"
      className="avatar"
    />

    <h2>{name}</h2>
    <h4>{role}</h4>
    <p>{description}</p>

    <button
      onClick={() => setFollowed(!followed)}
      className={followed ? "unfollow" : "follow"}
    >
      {followed ? "Unfollow" : "Follow"}
    </button>
  </div>
);
}
export default ProfileCard;
