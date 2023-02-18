import Burger1 from "../assets/burger_illustration_1.png";
import Burger2 from "../assets/burger_illustration_2.png";
import Burger3 from "../assets/burger_illustration_3.png";
import Burger4 from "../assets/burger_illustration_4.png";

import "../styles/BurgerHero.css";

export default function BurgerHero() {
  return (
    <div className="burger-hero-container">
      <div className="burger-card">
        <img src={Burger1} alt="" />
        <h3>GRILL`D BURGERS</h3>
        <p>Beetroot water spinach okra water chestnut ricebean pea.</p>
      </div>

      <div className="burger-card">
        <img src={Burger2} alt="" />
        <h3>VEGGIE OPTIONS</h3>
        <p>Water spinach arugula pea tatsoi aubergine spring onion.</p>
      </div>

      <div className="burger-card">
        <img src={Burger3} alt="" />
        <h3>MILKSHAKES</h3>
        <p>Dandelion zucchini burdock yarrow chickpea dandelion sorrel..</p>
      </div>

      <div className="burger-card">
        <img src={Burger4} alt="" />
        <h3>DESSERTS</h3>
        <p>Chickweed okra pea winter purslane coriander yarrow sweet.</p>
      </div>
    </div>
  );
}
