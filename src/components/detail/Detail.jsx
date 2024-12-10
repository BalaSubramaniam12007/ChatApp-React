import "./detail.css";

const Detail = () => {
  const sharedPhotos = [
    { id: 1, name: "photo_2024_1.png", src: "./github.png" },
    { id: 2, name: "photo_2024_1.png", src: "./github.png" }, 
    { id: 3, name: "photo_2024_1.png", src: "./github.png" }, 
    { id: 4, name: "photo_2024_1.png", src: "./github.png" },  
  ];

  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="User Avatar" />
        <h2>BALA</h2>
        <p>Let me tell you something</p>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="Expand/Collapse" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="Expand/Collapse" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="Expand/Collapse" />
          </div>
          <div className="photos">
            {sharedPhotos.map((photo) => (
              <div className="photoItem" key={photo.id}>
                <div className="photoDetail">
                  <img src={photo.src} alt={photo.name} />
                  <span>{photo.name}</span>
                </div>
                <img src="./download.png" alt="" className="icon" />
              </div>
            ))}
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="Expand/Collapse" />
          </div>
        </div>

        <button>Block User</button>
        <button className="logout">Log Out</button>
      </div>
    </div>
  );
};

export default Detail;
