const Navbar = () => {
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
        <button className="cart">
        </button>
        <div className="user">
        </div>
      </div>
    </div>
  );
};

export default Navbar;
