import "../styles/OrderBurger.css";

export default function OrderBurger() {
  return (
    <div className="order-container">
      <div className="order-text order1-card">
        <h5>NEW</h5>
        <h1>
          FARMHOUSE <br /> BURGER
        </h1>
        <p>
          This burger’s name explains itself. Of course, you can also top it
          with crisp lettuce, tomatoes, ketchup, barbecue sauce and anything
          else.
        </p>
        <h1>
          $2.49 <span>$2.99</span>
        </h1>
        <button className="order-btn">ORDER NOW</button>
      </div>

      <div className="order-text order2-card">
        <h5>NEW</h5>
        <h1>
          QUINOA & BLACK <br /> BEAN BURGER
        </h1>
        <p>
          We can’t think of a better way to celebrate summer than with these
          omg-worthy hamburgers. Plus, try our over-the-top creative
          cheeseburgers.
        </p>
        <h1>$3.99</h1>
        <button className="order-btn">ORDER NOW</button>
      </div>

      <div className="order-text order3-card">
        <h5>NEW</h5>
        <h1>
          CHOCOLATE <br /> MILKSHAKE
        </h1>
        <p>
          Milkshakes always taste good if you are a chocolate lover. You can
          throw one together with a cream or experiment with all kinds of extra
          flavors.
        </p>
        <h1>$2.49</h1>
        <button className="order-btn">ORDER NOW</button>
      </div>

      <div className="order-text order4-card">
        <h5>NEW</h5>
        <h1>
          STANDARD <br /> BURGER <br /> MEAL
        </h1>
        <p>
          These incredible burger meal offer a unique twist to the classic
          hamburger, incorporating ingredients like pimento cheese and sesame.
        </p>
        <h1>
          $4.49 <span>$5.99</span>
        </h1>
        <button className="order-btn">ORDER NOW</button>
      </div>

      <div className="order-text order5-card">
        <h5>NEW</h5>
        <h1>
          CHECKOUT OUR <br /> CATERING MENU
        </h1>
        <p>
          Throwing the party is never been easier. Order now and let us spice up
          your party. Burger meals, french fries and cheeseburgers will cheer up
          your friends.
        </p>
        <h1>$13.99</h1>
        <button className="order-btn">ORDER NOW</button>
      </div>

      <div className="order-text order6-card">
        <h5>NEW</h5>
        <h1>
          HOW TO MAKE A <br /> PERFECT BURGER
        </h1>
        <p>
          We will tell you a little secret. Mixing best quality steak and pork
          and serves them on homemade herb-butter rolls is the best version we
          know.
        </p>
        <h1>$5.99</h1>
        <button className="order-btn">ORDER NOW</button>
      </div>
    </div>
  );
}
