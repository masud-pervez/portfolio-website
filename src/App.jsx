import "bootstrap/dist/css/bootstrap.min.css";
// import "antd/dist";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import About from "./components/about/About";
import Experince from "./components/experience/Experince";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testmonials from "./components/testmonials/Testmonials";
import Contact from "./components/Contact/Contact";
import Nav from "./components/nav/Nav";
import Error from "./components/Error/Error";
import POS from "./Poin of  Sale/PointOfSale";
import Counters from "./CounterApp/Counters.jsx";
import Todos from "./TodoApp/Todos";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/experince" element={<Experince />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testmonials" element={<Testmonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/portfolio/pos" element={<POS />} />
        <Route path="/portfolio/Counters" element={<Counters />} />
        <Route path="/portfolio/todoapp" element={<Todos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
