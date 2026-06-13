import Navbar from "./component/Navbar";
import Landing from "./component/Landing";
import About from "./component/About";
import Brands from "./component/Brands";
import Contact from "./component/Contact";
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";
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
      <Route path="/contact" element={<Contact/>} />
      <Route path="/contactUs" element={<ContactUs/>} />
      <Route path="/payment" element={<Payment/>} /> 

      </Routes>
      <Footer />
    </>
  );
}

export default App;


