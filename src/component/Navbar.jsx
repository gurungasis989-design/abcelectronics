import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>ABC Electronics</h2>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Landing</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/brands">Brands</Link></li>
         <li><Link to="/contact">Inquiries</Link></li>
        <li><Link to="/contactus">Contactus</Link></li>
        <li><Link to="/payment">Payment</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;