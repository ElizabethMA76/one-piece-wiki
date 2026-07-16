import { useEffect, useState } from "react";
import { getCharacters } from "../services/onePieceApi";
import SearchBar from "./SearchBar";
import FilterButtons from "./FilterButtons";
import CharacterGrid from "./CharacterGrid";
import LoadMoreButton from "./LoadMoreButton";

function CharacterSection() {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [filterType, setFilterType] = useState("all");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [visibleCount, setVisibleCount] = useState(12);
    const [sortType, setSortType] = useState("name-asc");

    useEffect(() => {
        async function loadCharacters() {
            try {
                setIsLoading(true);
                setError("");

                const data = await getCharacters();

                if (data.length === 0) {
                    setError("No se encontraron personajes en la API.");
                    return;
                }

                setCharacters(data);
            } catch (error) {
                console.error("Error cargando personajes:", error);
                setError("No se pudieron cargar los personajes desde la API.");
            } finally {
                setIsLoading(false);
            }
        }

        loadCharacters();
    }, []);

    const handleSearchChange = (value) => {
        setSearchText(value);
        setSelectedCharacter(null);
        setVisibleCount(12);
    };

    const handleFilterChange = (value) => {
        setFilterType(value);
        setSelectedCharacter(null);
        setVisibleCount(12);
    };

    const handleSortChange = (value) => {
        setSortType(value);
        setSelectedCharacter(null);
        setVisibleCount(12);
    };

    const handleClearFilters = () => {
        setSearchText("");
        setFilterType("all");
        setSortType("name-asc");
        setSelectedCharacter(null);
        setVisibleCount(12);
    };

    function getBountyNumber(bounty) {
        const number = String(bounty).replace(/\D/g, "");
        return number ? Number(number) : 0;
    }

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

    const sortedCharacters = [...filteredCharacters].sort((a, b) => {
        const nameA = a.name.toLowerCase().trim();
        const nameB = b.name.toLowerCase().trim();

        if (sortType === "name-asc") {
            return nameA.localeCompare(nameB);
        }

        if (sortType === "name-desc") {
            return nameB.localeCompare(nameA);
        }

        if (sortType === "bounty-desc") {
            return getBountyNumber(b.bounty) - getBountyNumber(a.bounty);
        }

        if (sortType === "bounty-asc") {
            return getBountyNumber(a.bounty) - getBountyNumber(b.bounty);
        }

        return 0;
    });

    const visibleCharacters = sortedCharacters.slice(0, visibleCount);

    const hasMoreCharacters = visibleCount < sortedCharacters.length;

    const currentVisibleCount = visibleCharacters.length;
    const totalCharactersCount = sortedCharacters.length;

    const hasActiveFilters =
        searchText !== "" || filterType !== "all" || sortType !== "name-asc";

    const hasNoResults = !isLoading && !error && totalCharactersCount === 0;

    return (
        <section id="personajes" className="section">
            <h2>Personajes</h2>

            {selectedCharacter ? (
                <h3 className="selected-title">
                    Personaje seleccionado: {selectedCharacter.name}
                </h3>
            ) : (
                <h3 className="selected-title">Selecciona un personaje</h3>
            )}

            <SearchBar
                searchText={searchText}
                onSearchChange={handleSearchChange}
            />

            <FilterButtons
                filterType={filterType}
                onFilterChange={handleFilterChange}
            />

            <div className="sort-container">
                <label htmlFor="sort-select">Ordenar por:</label>

                <select
                    id="sort-select"
                    className="sort-select"
                    value={sortType}
                    onChange={(event) => handleSortChange(event.target.value)}
                >
                    <option value="name-asc">Nombre A-Z</option>
                    <option value="name-desc">Nombre Z-A</option>
                    <option value="bounty-desc">Mayor recompensa</option>
                    <option value="bounty-asc">Menor recompensa</option>
                </select>
            </div>

            {hasActiveFilters && (
                <button
                    className="clear-filters-button"
                    onClick={handleClearFilters}
                >
                    Limpiar filtros
                </button>
            )}

            {isLoading && (
                <p className="loading-message">Cargando personajes...</p>
            )}

            {error && (
                <p className="no-results">{error}</p>
            )}

            {!isLoading && !error && (
                <>
                    {hasNoResults ? (
                        <p className="empty-results-message">
                            No se encontraron personajes con esos criterios.
                        </p>
                    ) : (
                        <>
                            <p className="results-counter">
                                Mostrando {currentVisibleCount} de {totalCharactersCount} personajes
                            </p>

                            <CharacterGrid
                                filteredCharacters={visibleCharacters}
                                selectedCharacter={selectedCharacter}
                                setSelectedCharacter={setSelectedCharacter}
                            />

                            {hasMoreCharacters && (
                                <LoadMoreButton
                                    onClick={() => setVisibleCount(visibleCount + 12)}
                                />
                            )}
                        </>
                    )}
                </>
            )}
        </section>
    );
}

export default CharacterSection;