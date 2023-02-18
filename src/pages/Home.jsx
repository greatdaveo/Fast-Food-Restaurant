import React from "react";
import BurgerHero from "../components/BurgerHero";
import BurgerTypes from "../components/BurgerTypes";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
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

      <div>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
      </div>
    </>
  );
}
