import { useState } from "react";

const Main = () => {
  const img1 = "src/assets/images/image-product-1.jpg";
  const img2 = "src/assets/images/image-product-2.jpg";
  const img3 = "src/assets/images/image-product-3.jpg";
  const img4 = "src/assets/images/image-product-4.jpg";

  const [largeIMG, setLargeIMG] = useState(img1);
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setLargeIMG(e.target.value);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="main-container">
        <div className="main-left-side">
          <div className="large-img-container">
            <img src={largeIMG} alt="img" />
          </div>
          <div className="radios">
            <input
              type="radio"
              id="radio1"
              value={img1}
              name="radios"
              onChange={handleChange}
              defaultChecked
            />
            <input
              type="radio"
              id="radio2"
              value={img2}
              name="radios"
              onChange={handleChange}
            />
            <input
              type="radio"
              id="radio3"
              value={img3}
              name="radios"
              onChange={handleChange}
            />
            <input
              type="radio"
              id="radio4"
              value={img4}
              name="radios"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="main-right-side">
          <h3>SNEAKER COMPANY</h3>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="price">
            <h2>$125.00</h2>
            <div className="discount">50%</div>
          </div>
          <h4>$250.00</h4>

          <div className="buttons">
            <div className="count">
              <button className="minus" onClick={decrease}></button>
              <h5>{count}</h5>
              <button className="plus" onClick={increase}></button>
            </div>
            <button className="add-to-cart">
              <span></span>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
