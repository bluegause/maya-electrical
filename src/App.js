import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./App.css";

const Faqs = React.lazy(() => import('./pages/Faqs/Faqs'));
const About = React.lazy(() => import('./pages/About/About'));
const Services = React.lazy(() => import('./pages/Services/Services'));
function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services"
          element={ <React.Suspense fallback={<h1 style={{width: "100%",  color: "lightgray",fontSize: "4rem", paddingTop: "6rem",textAlign: "center", height: "100vh"}}>Loading...</h1>}>
            <Services />
          </React.Suspense>
          }
        />
        <Route path="/about"
          element={ <React.Suspense fallback={<h1 style={{width: "100%",  color: "lightgray",fontSize: "4rem", paddingTop: "6rem",textAlign: "center", height: "100vh"}}>Loading...</h1>}>
            <About />
          </React.Suspense>
          }
        />
        <Route path="/faqs"
          element={ <React.Suspense fallback={<h1 style={{width: "100%",  color: "lightgray",fontSize: "4rem", paddingTop: "6rem",textAlign: "center", height: "100vh"}}>Loading...</h1>}>
            <Faqs />
          </React.Suspense>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
