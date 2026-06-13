import Navbar from "./component/Navbar";
import Landing from "./component/Landing";
import About from "./component/About";
import Contact from "./component/Contact";
import Brand from "./component/Brands";
import Footer from "./component/Footer";
import ContactUs from "./component/Contactus";
import Payment from "./component/Payment";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/brands" element={<Brands/>} />
      <Route path="/contactus" element={<Contactus/>} />
      <Route path="/contact" element={<Inquiries/>} />
      <Route path="/payment" element={<Payment/>} /> 

      </Routes>
      <Footer />
    </>
  );
}

export default App;
