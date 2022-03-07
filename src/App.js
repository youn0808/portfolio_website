import { Fragment } from "react";
import About from "./components/About/About";
import Contact from "./components/Contacts/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import TestMonials from "./components/Testmonials/TestMonials";
function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <TestMonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
