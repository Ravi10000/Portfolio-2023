import { useState } from "react";
import "./App.css";
import About from "./components/about/about";
import Banner from "./components/banner/banner";
import EditingSubSection from "./components/editing/editing-sub-section";
import Form from "./components/form/form";
import Services from "./components/services/services";
import Skills from "./components/skills/skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Banner />
      <About />
      <Services />
      <Skills />
      <EditingSubSection />
      <Form />
    </div>
  );
}

export default App;
