import React from "react";
import BurgerHero from "../components/BurgerHero";
import BurgerSlider from "../components/BurgerSlider";
import BurgerTypes from "../components/BurgerTypes";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import OrderBurger from "../components/OrderBurger";
import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <div className="hero-container">
        <NavBar />
        <Hero />
      </div>

      <BurgerHero />
      <BurgerTypes />
      <OrderBurger />
      <BurgerSlider />
      <Contact/>

      <div>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
      </div>
    </>
  );
}
