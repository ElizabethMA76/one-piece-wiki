function CharacterCard({ character, isSelected }) {
  return (
    <div
      className={`character-card ${isSelected ? "selected-card" : ""
        }`}
    >
      <img src={character.image} alt={character.name} />

      <h3>{character.name}</h3>
      <p><strong>Tripulación:</strong> {character.crew}</p>
      <p><strong>Rol:</strong> {character.role}</p>
      <p><strong>Fruta:</strong> {character.devilFruit}</p>
      <p><strong>Recompensa:</strong> {character.bounty}</p>
    </div>
  );
}

export default CharacterCard;