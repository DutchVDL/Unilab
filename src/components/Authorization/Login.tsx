import React, { useRef, useState } from "react";
import "./Login.css";
import IMG from "./img/IMAGE.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [selectedImage, setSelectedImage] = useState(
    localStorage.getItem("image")
  );
  const navigator = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleSignIn = () => {
    if (selectedImage !== null) {
      localStorage.setItem("name", name);
      localStorage.setItem("image", selectedImage);
      navigator("/profile");
    }
  };

  return (
    <div className="authorization">
      <h1>Get Started</h1>
      <h2>add a photo</h2>

      <div className="image-upload-container">
        <label htmlFor="file-upload" className="custom-file-upload">
          <img
            src={selectedImage ? selectedImage : IMG}
            alt="Upload Icon"
            className="upload-icon"
          />
        </label>
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </div>

      <h3>fill in you name</h3>
      <input
        type="text"
        placeholder="your name"
        id="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleSignIn}>Sign in</button>
    </div>
  );
};

export default Login;
