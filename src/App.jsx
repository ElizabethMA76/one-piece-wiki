import "./App.css";
import Navbar from "./components/Navbar";
import CharacterSection from "./components/CharacterSection";
import ApiSection from "./components/ApiSection";
import { getCrews, getFruits, getArcs } from "./services/onePieceApi";

function App() {
  return (
    <>
      <Navbar />

      <section className="hero" id="inicio">
        <h1>Bienvenido a la Grand Line</h1>
        <p>
          Explora personajes, tripulaciones, frutas del diablo y todos los
          secretos de One Piece.
        </p>
      </section>

      <nav className="menu">
        <a href="#inicio">Inicio</a>
        <a href="#personajes">Personajes</a>
        <a href="#tripulaciones">Tripulaciones</a>
        <a href="#frutas">Frutas</a>
        <a href="#arcos">Arcos</a>
      </nav>

      <CharacterSection />

      <ApiSection
        id="tripulaciones"
        title="Tripulaciones"
        loadData={getCrews}
      />

      <ApiSection
        id="frutas"
        title="Frutas del Diablo"
        loadData={getFruits}
      />

      <ApiSection
        id="arcos"
        title="Arcos"
        loadData={getArcs}
      />
    </>
  );
}

export default App;