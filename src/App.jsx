import { useEffect } from "react";
import "./App.css";
import About from "./components/about";
import Cursor from "./components/animated/cursor/curosr";
import BottomNav from "./shared/bottomNav";
import Contact from "./shared/contact";
import Hero from "./shared/hero";
import Projects from "./shared/projects";
import Stack from "./shared/stack";
import Work from "./shared/work";

function App() {
  return (
    <main className="">
      <Stack />
      <Hero />
      <Work />
      <About />
      <Projects />
      <Contact />
      <BottomNav />
      <Cursor />
    </main>
  );
}

export default App;
