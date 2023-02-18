import "../styles/Contact.css";
import { IoIosTimer } from "react-icons/io";
import { GrLocation } from "react-icons/gr";

export default function Contact() {
  return (
    <div>
      <div>
        <h5>CALL US</h5>
        <h3>+1-202-555-016</h3>

        <div>
          <a href="">
            <IoIosTimer />
          </a>
          <div>
            <p>mon-thu: 11.00 – 23.00</p>
            <p> sat: 12.00 – 23.00</p>
            <p> sun: 12.00 – 21.00</p>
          </div>
        </div>

        <div>
          <a href="">
            <GrLocation />
          </a>
          <div>
            <p>
              60 East 65th Street <br /> New York City
              <br /> NY 10065
            </p>
          </div>
        </div>

        <div>
            
        </div>
      </div>
    </div>
  );
}
