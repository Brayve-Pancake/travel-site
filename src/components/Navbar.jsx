import globe from "../assets/globe.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={globe} alt="globe" />
      <h4 className="nav--title">Three boys travel the world</h4>
    </nav>
  );
}

export default Navbar;
