import React, { useState } from "react";
import Header from "./components/Header";
import ProjectContainer from "./components/ProjectContainer";
import SkillContainer from "./components/SkillContainer";
import TopContainer from "./components/TopContainer";
import "./App.css";
// import ExperienceContainer from "./components/ExperienceContainer";
import Contact from "./components/Contact";
import Dropdown from "./components/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <TopContainer />
      <SkillContainer />
      <ProjectContainer />
      {/* <ExperienceContainer /> */}
      <Contact />
    </>
  );
}

export default App;
