import { useState } from "react";
import "./App.scss";
import About from "./components/about/about";
import Banner from "./components/banner/banner";
import Form from "./components/form/form";
import Services from "./components/services/services";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
