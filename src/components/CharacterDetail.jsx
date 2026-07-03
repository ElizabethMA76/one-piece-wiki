function CharacterDetail({ character }) {

    if (!character) {
        return null;
    }

    return (
        <div className="character-detail">

            <h2>{character.name}</h2>

            <p>
                <strong>Tripulación:</strong> {character.crew}
            </p>

            <p>
                <strong>Rol:</strong> {character.role}
            </p>

            <p>
                <strong>Fruta:</strong> {character.devilFruit}
            </p>

            <p>
                <strong>Recompensa:</strong> {character.bounty}
            </p>

        </div>
    );

}

export default CharacterDetail;