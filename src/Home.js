import React from "react";
import "./App.css";
import "./Home.css";

function Home() {
  return (
    <div>
      <h2>Fortnite !</h2>
      <div className="container">
        <img
          className="grow"
          src="https://cdn2.unrealengine.com/social-1920x1080-839949505.jpg"
        />
        <img
          className="grow"
          src="https://static-assets-prod.epicgames.com/fortnite/static/webpack/8f9484f10eb14f85a189fb6117a57026.jpg"
        />
        <img
          className="grow"
          src="https://image-cdn.essentiallysports.com/wp-content/uploads/20200617190129/fortnite-season-3-battle-pass-skins.jpg"
        />
        <img
          className="grow"
          src="https://c4.wallpaperflare.com/wallpaper/755/413/149/video-game-fortnite-hd-wallpaper-preview.jpg"
        />
        <img
          className="grow"
          src="https://i.ytimg.com/vi/mW53LrK1QGM/maxresdefault.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
