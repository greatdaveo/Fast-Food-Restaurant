import React from "react";
import BurgerHero from "../components/BurgerHero";
import BurgerSlider from "../components/BurgerSlider";
import BurgerTypes from "../components/BurgerTypes";
import Contact from "../components/Contact";
import DownloadFooter from "../components/DownloadFooter";
import Footer from "../components/Footer";
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
      <Contact />
      <DownloadFooter />
      <Footer />
    </>
  );
}
