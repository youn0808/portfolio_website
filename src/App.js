import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";

import Projects from "./components/Projects/Projects";
import Main from "./components/Main/Main";
import Video from "./components/Video/Video";

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
              <Experience />
              <Projects />
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
