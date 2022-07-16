import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const cards = data.map((place) => <Card key={place.startDate} {...place} />);

  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
