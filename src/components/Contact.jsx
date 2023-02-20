import "../styles/Contact.css";
import { IoIosTimer } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaTripadvisor } from "react-icons/fa";
import TheLocation from "./TheLocation";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-text-container">
        <h5>CALL US</h5>
        <h3>+1-202-555-016</h3>

        <div className="contact-time">
          <a href="">
            <IoIosTimer />
          </a>
          <div className="date">
            <p>mon-thu: 11.00 – 23.00</p>
            <p> sat: 12.00 – 23.00</p>
            <p> sun: 12.00 – 21.00</p>
          </div>
        </div>

        <div className="contact-location">
          <a href="">
            <CiLocationOn />
          </a>
          <div className="address">
            <p>60 East 65th Street</p>
            <p> New York City</p>
            <p>NY 10065</p>
          </div>
        </div>

        <div className="contact-icons">
          <ul>
            <li>
              <FiFacebook />
            </li>

            <li>
              <FiTwitter />
            </li>

            <li>
              <FiInstagram />
            </li>

            <li>
              <FaTripadvisor />
            </li>
          </ul>
        </div>
      </div>

      {/* <TheLocation /> */}
    </div>
  );
}
