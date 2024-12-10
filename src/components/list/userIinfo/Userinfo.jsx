import "./userInfo.css";

const UserInfo = () => {
  return (
    <div className="userInfo">
      {/* User Section */}
      <div className="user">
        <img src="./avatar.png" alt="User Avatar" />
        <h2>John Doe</h2>
      </div>

      {/* Icons Section */}
      <div className="icons">
        <img src="./more.png" alt="More Options" />
        <img src="./video.png" alt="Video Call" />
        <img src="./edit.png" alt="Edit" />
      </div>
    </div>
  );
};

export default UserInfo;
