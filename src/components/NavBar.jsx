import Logo from "../assets/fast-food-logo-classic-red-background.png";
import { NavLink, Link } from "react-router-dom";
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

          <li className="menu">
            <NavLink to="/">HOME</NavLink>

            <div className="drop-menu">
              <li>
                <Link>Landing</Link>
              </li>
              <hr />
              <li>
                <Link>Burgers</Link>
              </li>
              <hr />
              <li>
                <Link>Green</Link>
              </li>
              <hr />
              <li>
                <Link>Food Truck</Link>
              </li>
              <hr />
              <li>
                <Link>Pizza</Link>
              </li>
            </div>
          </li>

          <li className="menu">
            <NavLink to="">PAGES</NavLink>

            <div className="drop-menu">
              <li className="hover-menu">
                <Link>About us</Link>

                <div className="sub-menu2">
                  {/* <ul> */}
                  <li>
                    <Link>Overview</Link>
                  </li>
                  <hr />
                  <li>
                    <Link>Our team</Link>
                  </li>
                  <hr />
                  <li>
                    <Link>Our story</Link>
                  </li>
                  <hr />
                  <li>
                    <Link>History</Link>
                  </li>
                  {/* </ul> */}
                </div>
              </li>
              <hr />
              <li>
                <Link>Services</Link>
              </li>
              <hr />
              <li>
                <Link>Testimonials</Link>
              </li>
              <hr />
              <li>
                <Link>Cost calculator</Link>
              </li>
              <hr />
              <li>
                <Link>Contact</Link>
              </li>
              <hr />
              <li>
                <Link>Under construction</Link>
              </li>
            </div>
          </li>

          <li className="menu">
            <NavLink to="">OUR OFFERS</NavLink>

            <div className="drop-menu">
              <li>
                <Link>Classic menu</Link>
              </li>
              <hr />
              <li>
                <Link>Menu features</Link>
              </li>
              <hr />
              <li>
                <Link>Menu highlights</Link>
              </li>
              <hr />
              <li>
                <Link>Special offers</Link>
              </li>
              <hr />
              <li>
                <Link>Reservations</Link>
              </li>
            </div>
          </li>

          <li className="menu">
            <NavLink to="">GALLERIES</NavLink>

            <div className="drop-menu">
              <li>
                <Link>Galleries grid</Link>
              </li>
              <hr />
              <li>
                <Link>Galleries title</Link>
              </li>
              <hr />
              <li>
                <Link>Single project</Link>
              </li>
            </div>
          </li>

          <li className="menu">
            <NavLink to="">BLOG</NavLink>

            <div className="drop-menu">
              <li>
                <Link>Blog list</Link>
              </li>
              <hr />
              <li>
                <Link>Blog grid title</Link>
              </li>
              <hr />
              <li>
                <Link>Blog title</Link>
              </li>
              <li>
                <Link>Single post</Link>
              </li>
            </div>
          </li>

          <li className="menu">
            <NavLink to="">SHOP</NavLink>

            <div className="drop-menu">
              <li>
                <Link>Products</Link>
              </li>
              <hr />
              <li>
                <Link>Single products</Link>
              </li>
              <hr />
              <li>
                <Link>Shop pages</Link>
              </li>
              <hr />
            </div>
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
