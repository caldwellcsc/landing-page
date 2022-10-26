import type { Component } from "solid-js";
import { Hero } from "./Componens/LandingPage/hero";
import { Navbar } from "./Componens/global/Navbar";
import { Footer } from "./Componens/global/Footer";
import { Blogs } from "./Componens/LandingPage/Blogs";

const App: Component = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Blogs />
      <Footer />
    </div>
  );
};

export default App;
