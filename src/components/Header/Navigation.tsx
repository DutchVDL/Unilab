import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./navigation.css";
import { CiCircleRemove } from "react-icons/ci";

const Navigation = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [logout, setLogout] = useState(false);

  const navigator = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedImage = localStorage.getItem("image");

    if (storedName) {
      setName(storedName);
    }
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  const toLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("image");
    navigator("/authorization");
  };
  return (
    <nav>
      {logout && (
        <div className="logout">
          <button onClick={toLogout}>Log Out</button>
          <CiCircleRemove
            size={40}
            style={{
              color: "#4980c0",
              position: "absolute",
              top: "0px",
              right: "0px",
              transform: "translate(0,-10%)",
              cursor: "pointer",
            }}
            onClick={() => {
              setLogout(false);
            }}
          />
        </div>
      )}

      <div
        onClick={() => {
          logout && setLogout(false);
        }}
      >
        <header>
          <div id="header">
            <Link to="/profile" className="link">
              Form
            </Link>

            <Link to="/profile/api" className="link">
              API
            </Link>
          </div>
          <div id="login">
            <h1>{name}</h1>
            <img src={image} alt="" onClick={() => setLogout(true)} />
          </div>
        </header>

        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
