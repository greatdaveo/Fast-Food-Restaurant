import { Link } from "react-router-dom";
import "../styles/Footer.css"

export default function Footer() {
  return (
    <footer>
      <p>Copyright Bold Themes 2023.</p>

      <div className="footer-links">
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Pages</Link>
          </li>
          <li>
            <Link>Our offer</Link>
          </li>
          <li>
            <Link>Galleries</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>Shop</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
