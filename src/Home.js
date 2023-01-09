import { color } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import './style.css';
const Home = () => {
  return (
    <>
      <div className="main-page">
        <div className="main-content">
          <div className="main-heading">
            <h2>
              DISCOVER SUPER
              <br />
              <span>NFTs</span>
            </h2>
          </div>
          <div className="main-para">
            <p>
              At edgeXgame we are building a game collectable NFT marketplace
              with NFT based monthly subscription model. Players will be able to
              buy, sell and trade their digital collectables on our platform.
              These collectables are unique and cannot be replicated or
              destroyed.
            </p>
          </div>
          <div className="btn-container">
            <Link to="/buy" className="btn btnhome btn-buy">
              Explore
            </Link>
            <Link to="/aboutus" className="btn btnhome btn-buy">
              Our Team
            </Link>
          </div>
        </div>
        <div className="images">
          <div className="left_image">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/209/251/804/cod-mw-ghost-call-of-duty-hd-wallpaper-preview.jpg"
              alt=""
              className="img-main imgl"
            />

            <img
              src="https://c4.wallpaperflare.com/wallpaper/741/914/473/machine-race-the-game-nfs-need-for-speed-heat-hd-wallpaper-preview.jpg"
              alt=""
              className="img-main imgl"
            />
          </div>

          <div className="middle_image">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/725/422/535/movies-hollywood-movies-wallpaper-preview.jpg"
              alt=""
              className="img-main imgm"
            />
          </div>

          <div className="right_image">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/837/704/915/video-game-fifa-19-neymar-soccer-wallpaper-preview.jpg"
              alt=""
              className="img-main imgr"
            />

            <img
              src="https://c4.wallpaperflare.com/wallpaper/364/107/637/playerunknown-s-battlegrounds-explosion-artwork-pubg-wallpaper-thumb.jpg"
              alt=""
              className="img-main imgr"
            />

            <img
              src="https://c4.wallpaperflare.com/wallpaper/107/848/913/spiderman-ps4-spiderman-games-hd-wallpaper-preview.jpg"
              alt=""
              className="img-main imgr"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
