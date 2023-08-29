import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Main from "./components/Main/Main";
import Video from "./components/Video/Video";
import Skills from "./components/Skills/Skills";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/video" element={<Video />}></Route>
      </Routes>
    </div>
  );
}

export default App;
