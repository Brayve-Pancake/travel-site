import globe from "../assets/globe.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={globe} alt="globe" />
      <h4 className="nav--title">Me travelling the world</h4>
    </nav>
  );
}
