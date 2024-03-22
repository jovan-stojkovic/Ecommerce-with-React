import { useState } from "react";

const Navbar = () => {
  const [hiddenCartContainer, setHiddenCartContainer] = useState("");

  const handleCartClick = () => {
    setHiddenCartContainer(hiddenCartContainer === "" ? "show" : "");
  };

  return (
    <div className="navbar">
      <div className="navbar-left-side">
        <a href="/">
          <img src="./src/assets/images/logo.svg" alt="logo" />
        </a>
        <div className="navs">
          <p className="nav">Collections</p>
          <p className="nav">Men</p>
          <p className="nav">Women</p>
          <p className="nav">About</p>
          <p className="nav">Contact</p>
        </div>
      </div>
      <div className="navbar-right-side">
        <button className="cart" onClick={handleCartClick}></button>
        <div className="user"></div>

        <div className={`hidden-cart-container ${hiddenCartContainer}`}>
          <div className="top">
            <h4 className="cart-headline">Cart</h4>
          </div>
          <div className="bottom">
            <p className="empty">Your cart is empty.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
