import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import characters from "./data/characters.json";
import CharacterCard from "./components/CharacterCard";
import CharacterDetail from "./components/CharacterDetail";

function App() {
  // react recuerda la informacion mientras la aplicacion esta funcionando 
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredCharacters = characters.filter((character) => {
    const matchesSearch = character.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const hasDevilFruit =
      character.devilFruit.toLowerCase() !== "none" &&
      character.devilFruit.toLowerCase() !== "ninguna";

    if (filterType === "with-fruit") {
      return matchesSearch && hasDevilFruit;
    }

    if (filterType === "without-fruit") {
      return matchesSearch && !hasDevilFruit;
    }

    return matchesSearch;
  });
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

        <input
          className="search-input"
          type="text"
          placeholder="Buscar personaje..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <div className="filter-buttons">
          <button
            className={filterType === "all" ? "active-filter" : ""}
            onClick={() => setFilterType("all")}
          >
            Todos
          </button>

          <button
            className={filterType === "with-fruit" ? "active-filter" : ""}
            onClick={() => setFilterType("with-fruit")}
          >
            Con fruta
          </button>

          <button
            className={filterType === "without-fruit" ? "active-filter" : ""}
            onClick={() => setFilterType("without-fruit")}
          >
            Sin fruta
          </button>
        </div>

        <div className="cards-container">
          {filteredCharacters.length > 0 ? (
            <div className="cards-container">
              {filteredCharacters.map((character) => (
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
          ) : (
            <p className="no-results">
              No se encontraron personajes.
            </p>
          )}
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