import Burger1 from "../assets/inner_burger_1.jpg";
import Burger2 from "../assets/inner_burger_2.jpg";
import Burger3 from "../assets/inner_burger_3.jpg";
import Burger4 from "../assets/inner_burger_4.jpg";
import Burger5 from "../assets/inner_burger_5.jpg";
import Burger6 from "../assets/inner_burger_6.jpg";
import "..//styles/BurgerTypes.css";

export default function BurgerTypes() {
  return (
    <div className="burger-container">
      <div className="card-container">
        <div className="burger-types-header">
          <h3>TASTY & CRUNCHY</h3>
          <h1>Choose & enjoy</h1>
          <p>Inspired by recipes and creations of world’s best chefs</p>
        </div>

        <div className="types-card-container">
          <div className="card">
            <img src={Burger1} alt="" />
            <h3>BEEF BURGERS</h3>
            <p>Beetroot water spinach okra water chestnut ricebean pea.</p>
          </div>

          <div className="card">
            <img src={Burger2} alt="" />
            <h3>CHICKEN BURGERS</h3>
            <p>Water spinach arugula pea tatsoi aubergine spring onion.</p>
          </div>

          <div className="card">
            <img src={Burger3} alt="" />
            <h3>VEGAN OPTIONS</h3>
            <p>Dandelion zucchini burdock yarrow chickpea dandelion sorrel.</p>
          </div>

          <div className="card">
            <img src={Burger4} alt="" />
            <h3>SALADS & WRAPS</h3>
            <p>Water spinach arugula pea tatsoi aubergine spring onion.</p>
          </div>

          <div className="card">
            <img src={Burger5} alt="" />
            <h3>FRENCH FRIES</h3>
            <p>Dandelion zucchini burdock yarrow chickpea dandelion sorrel.</p>
          </div>

          <div className="card">
            <img src={Burger6} alt="" />
            <h3>GREAT DESSERTS</h3>
            <p>Chickweed okra pea winter purslane coriander yarrow sweet.</p>
          </div>
        </div>

        <div className="card-btn">
          <button className="burger-types-btn">VIEW OUR FULL MENU</button>
        </div>
      </div>
    </div>
  );
}
