import React from "react";
import Header from "./componet/Header";
import Home from "./page/Home";
// import Home from "./page/Home";
 import Features from "./page/Features";
 import Pricing from "./page/Pricing";
import Faq from "./page/Faq";
import Canceled from "./componet/Canceled"
import Success from "./componet/Success"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./componet/NotFound"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
         <Route path="/" element={<Home />} />
       <Route path="/features" element={<Features />}/>
        <Route path="/pricing" element={<Pricing />} /> 
        <Route path="/faq" element={<Faq />} />  
         <Route path="/success" element={<Success />} /> 
        <Route path="/canceled" element={<Canceled />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

