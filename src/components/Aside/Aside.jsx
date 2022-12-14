import React, { useState } from "react";
import logo from "../../assets/foxbel-music.png";

import { Link, useNavigate } from "react-router-dom";
import { AsideStyles } from "./AsideStyles";

export const Aside = ({ show }) => {
  const [itemActive, setItemActive] = useState(1);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <AsideStyles show={show}>
      <div className="sticky">
        <div className="logo" onClick={handleClick}>
          <img src={logo} alt="foxbel-music" loading="lazy" />
        </div>
        <div className="list">
          <h3 className="list__title">My Bookstore</h3>
          <Link
            to="/?q=recientes"
            className={`list__item ${itemActive === 1 ? "active" : ""}`}
            onClick={() => setItemActive(1)}
          >
            Recent
          </Link>
          <Link
            to="/?q=artistas"
            className={`list__item ${itemActive === 2 ? "active" : ""}`}
            onClick={() => setItemActive(2)}
          >
            Artists
          </Link>
          <Link
            to="/?q=albums"
            className={`list__item ${itemActive === 3 ? "active" : ""}`}
            onClick={() => setItemActive(3)}
          >
            Álbums
          </Link>
          <Link
            to="/?q=canciones"
            className={`list__item ${itemActive === 4 ? "active" : ""}`}
            onClick={() => setItemActive(4)}
          >
            Songs
          </Link>
          <Link
            to="/?q=estaciones"
            className={`list__item ${itemActive === 5 ? "active" : ""}`}
            onClick={() => setItemActive(5)}
          >
            Stations
          </Link>
        </div>
        <div className="list">
          <h3 className="list__title">Playlist</h3>
          <Link
            to="/?q=metal"
            className={`list__item ${itemActive === 6 ? "active" : ""}`}
            onClick={() => setItemActive(6)}
          >
            Metal
          </Link>
          <Link
            to="/?q=dance"
            className={`list__item ${itemActive === 7 ? "active" : ""}`}
            onClick={() => setItemActive(7)}
          >
            To dance
          </Link>
          <Link
            to="/?q=rock"
            className={`list__item ${itemActive === 8 ? "active" : ""}`}
            onClick={() => setItemActive(8)}
          >
            Rock 90s
          </Link>
          <Link
            to="/?q=baladas"
            className={`list__item ${itemActive === 9 ? "active" : ""}`}
            onClick={() => setItemActive(9)}
          >
            Baladas
          </Link>
        </div>
      </div>
    </AsideStyles>
  );
};
