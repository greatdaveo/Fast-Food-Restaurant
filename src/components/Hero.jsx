import "../styles/Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero">
      <h3>FAST FOOD BURGERS</h3>
      <h1>
        BEST BURGERS <br /> IN GALAXY
      </h1>
      <Link>
        <p>OUR MENU</p>
      </Link>
    </div>
  );
}
