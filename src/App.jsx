import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import characters from "./data/characters.json";
import CharacterCard from "./components/CharacterCard";
import CharacterDetail from "./components/CharacterDetail";

function App() {

  const [selectedCharacter, setSelectedCharacter] = useState(null);
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

      <section id="personajes" className="section">
        <h2>Personajes</h2>


        {selectedCharacter ? (
          <h3 className="selected-title">
            Personaje seleccionado: {selectedCharacter.name}
          </h3>
        ) : (
          <h3 className="selected-title">
            Selecciona un personaje
          </h3>
        )}

        <div className="cards-container">
          {characters.map((character) => (
            <div
              key={character.id}
              onClick={() => setSelectedCharacter(character)}
            >
              <CharacterCard
                character={character}
                isSelected={selectedCharacter?.id === character.id}
              />           
            </div>
          ))}
        </div>
          <CharacterDetail
    character={selectedCharacter}
          />
      </section>

      <section id="tripulaciones" className="section">Tripulaciones</section>
      <section id="frutas" className="section">Frutas del Diablo</section>
      <section id="arcos" className="section">Arcos</section>
    </>
  );
}

export default App;