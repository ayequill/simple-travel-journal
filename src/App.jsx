import data from "./data";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

function App() {
  const cardElements = data.map((card) => {
    return <Hero key={card.id} {...card} />;
  });

  console.log(cardElements);

  return (
    <div className="App">
      <Nav />
      <main>{cardElements}</main>
    </div>
  );
}

export default App;
