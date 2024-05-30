import "./Style.scss";
import { useState, useEffect } from "react";

const App = () => {
  const img1 = "/image-product-1.jpg";
  const img2 = "/image-product-2.jpg";
  const img3 = "/image-product-3.jpg";
  const img4 = "/image-product-4.jpg";

  const radioArray = [img1, img2, img3, img4];

  const title = "Fall Limited Edition Sneakers";
  const price = 125;

  const [hiddenCartContainer, setHiddenCartContainer] = useState("");
  const [hiddenCartCount, setHiddenCartCount] = useState("");
  const [largeIMG, setLargeIMG] = useState(img1);
  const [count, setCount] = useState(0);
  const [inCart, setInCart] = useState(0);
  const [sideMenu, setSideMenu] = useState("hide");

  const handleCartClick = () => {
    setHiddenCartContainer(hiddenCartContainer === "" ? "show" : "");
  };

  const handleChange = (e) => setLargeIMG(e.target.value);
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const increase = () => {
    setCount(count + 1);
  };
  const addToCart = () => setInCart(count);

  useEffect(() => {
    setHiddenCartCount(count > 0 ? "show" : "");
  }, [inCart]);

  return (
    <main>
      <div className="container">
        <div className="navbar">
          <div className="navbar-left-side">
            <button
              onClick={() => {
                setSideMenu(sideMenu === "hide" ? "show" : "hide");
              }}
            >
              <img src="/icon-menu.svg" alt="menu" />
            </button>
            <a href="/">
              <img src="/logo.svg" alt="logo" />
            </a>
            <div
              className={`navs ${sideMenu}`}
              onClick={() => {
                setSideMenu(sideMenu === "hide" ? "show" : "hide");
              }}
            >
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
            <div className={`cart-count-div ${hiddenCartCount}`}>{inCart}</div>
            <div className={`hidden-cart-container ${hiddenCartContainer}`}>
              <div className="top">
                <h4 className="cart-headline">Cart</h4>
              </div>

              {inCart === 0 ? (
                <div className="bottom-empty">
                  <p className="empty">Your cart is empty.</p>
                </div>
              ) : (
                <div className="bottom-full">
                  <div className="cart-info">
                    <div className="thumbnail"></div>
                    <div className="info">
                      <p className="title">{title}</p>
                      <div className="cart-price">
                        <p className="gray">
                          {`$${price}.00`} x {inCart}
                        </p>
                        <p className="bold">{`$${price * inCart}.00`}</p>
                      </div>
                    </div>
                    <button
                      className="delete"
                      onClick={() => {
                        setInCart(0);
                        setCount(0);
                      }}
                    ></button>
                  </div>
                  <button className="checkout">Checkout</button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className="main-container"
          onClick={() => setHiddenCartContainer("")}
        >
          <div className="main-left-side">
            <div className="large-img-container">
              <img src={largeIMG} alt="img" />
            </div>
            <div className="radios">
              {radioArray.map((img, index) => (
                <input
                  key={index}
                  type="radio"
                  id={`radio${index + 1}`}
                  value={img}
                  name="radios"
                  onChange={handleChange}
                  defaultChecked={index === 0}
                />
              ))}
            </div>
          </div>

          <div className="main-right-side">
            <h3>SNEAKER COMPANY</h3>
            <h1>{title}</h1>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>
            <div className="price">
              <h2>${price}.00</h2>
              <div className="discount">50%</div>
            </div>
            <h4>$250.00</h4>

            <div className="buttons">
              <div className="count">
                <button className="minus" onClick={decrease}></button>
                <h5>{count}</h5>
                <button className="plus" onClick={increase}></button>
              </div>
              <button className="add-to-cart" onClick={() => addToCart()}>
                <span></span>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
