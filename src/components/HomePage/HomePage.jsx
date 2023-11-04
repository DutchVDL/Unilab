import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import IMAGE from "./img/pngegg.png";

const HomePage = () => {
  const navigator = useNavigate();

  return (
    <main className="home">
      <img src={IMAGE} alt="landing" className="home-img" />
      <h1>Get Started Today</h1>
      <button
        onClick={() => {
          navigator("/authorization");
        }}
      >
        Get Started
      </button>
    </main>
  );
};

export default HomePage;
