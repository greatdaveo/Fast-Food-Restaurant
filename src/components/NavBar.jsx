import Logo from "../assets/fast-food-logo-classic-red-background.png";
import { NavLink } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <div className="nav-links">
        <ul>
          <img src={Logo} className="Logo" alt="" height="100px" />

          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="">PAGES</NavLink>
          </li>
          <li>
            <NavLink to="">OUR OFFERS</NavLink>
          </li>
          <li>
            <NavLink to="">GALLERIES</NavLink>
          </li>
          <li>
            <NavLink to="">BLOG</NavLink>
          </li>
          <li>
            <NavLink to="">SHOP</NavLink>
          </li>
        </ul>
      </div>

      <div className="social-nav-links">
        <ul>
          <li>
            <a href="">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="">
              <FiInstagram />
            </a>
          </li>
          <li>
            <a href="">
              <FaFacebookMessenger />
            </a>
          </li>
          <li>
            <a href="">
              <AiOutlineSearch />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
