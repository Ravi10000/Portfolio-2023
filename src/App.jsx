import { useState } from "react";
import "./App.css";
import EditingSubSection from "./components/editing/editing-sub-section";
import Form from "./components/form/form";
import Services from "./components/services/services";
import Skills from "./components/skills/skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <img src="/hero-color-edited.png" alt="hero" width={"100%"} />
      <Services />
      <Skills />
      <EditingSubSection />
      <Form />
    </div>
  );
}

export default App;
