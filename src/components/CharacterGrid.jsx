import CharacterCard from "./CharacterCard";

function CharacterGrid({
  filteredCharacters,
  selectedCharacter,
  setSelectedCharacter,
}) {
  if (filteredCharacters.length === 0) {
    return <p className="no-results">No se encontraron personajes.</p>;
  }

  return (
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
  );
}

export default CharacterGrid;